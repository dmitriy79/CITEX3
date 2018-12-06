<template>
    <div class="limit-price">
        <div class="title">
            <div class="left">限价</div>
            <!-- <div class="right"><span class="type">ETH</span>可用 <span class="available">192321.92</span> / 冻结<span class="frozen">921111.00</span></div> -->
        </div>
        <div class="penel">
          <div class="buy-panel">
            <div class="input-text">
               <p class="islogin"  v-if="!this.token"> <router-link tag="a" to="/login" class="green">登录</router-link> 或  <router-link tag="a" to="/register" class="green">注册</router-link> 开始交易</p>
                <p class="useable" v-if="this.token">可用：<span class="num" ref="num1"><span  class="num" v-if="!curbuyPrice">0.00000000</span>{{curbuyPrice}}</span><span class="type">{{zoneName}}</span></p>
                <span class="label">买入<i ></i></span>
                <div class="buy-price">
                    <span class="name">价格</span>
                    <input type="number"
                    name="buyPrice"
                    v-model="buyPrice" :class="{border1:hasBorder}">
                     <!-- <input type="number"
                    name="buyPrice"
                    @keyup="checkNumber"
                    v-model="currentPrice"> -->
                    <span class="unit">{{zoneName}}</span>
                </div>
               <div class="buy-num">
                    <span class="name">数量</span>
                    <input type="number" :class="{border2:hasBorder}"
                    name="buyAmount"
                    v-model="buyNums"
                    @keydown="toggleBuyIndex"
                    >
                    <span class="unit" v-if="marketInfo">{{marketInfo.name}}</span>
                </div>
                <div class="buy-rate">
                    <button
                      data-id="buyPre"
                      v-for="(item, index) in percentage"
                      @click="selectPercentage"
                      :data-index="index"
                      :data-num="item"
                      :disabled="isDisabled"
                      :class="{ active: index == buyNumIndex }"
                    >
                      {{item}}%
                    </button>
                </div>
             
                <div class="total-price">
                    <span class="name">交易额</span>
                    <span class="value">{{buyAmount}}</span>
                    <span class="unit">{{zoneName}}</span>
                </div>
                   <button 
                class="buy-button transaction-btn"
                :class="{Allowed: isDisabled}"
                @click='buyCoin' 
                :disabled="isDisabled">买入<span v-if="marketInfo">{{marketInfo.name}}</span></button> 
                <!-- <button 
                class="buy-button transaction-btn"
                :class="{Allowed:isDisabled}"
                @click='$store.dispatch("trading/tradingBuy", buyParams)' 
                :disabled="isDisabled">买入<span v-if="marketInfo">{{marketInfo.name}}</span></button>  -->
            </div>
        </div>
        <div class="sell-panel">
            <div class="input-text">
               <p class="islogin"   v-if="!this.token"> <router-link tag="a" to="/login" class="green">登录</router-link> 或  <router-link tag="a" to="/register" class="green">注册</router-link> 开始交易</p>
                <p class="useable" v-if="this.token">可用：<span class="num" ref="num2"><span  class="num" v-if="!cursellPrice">0.00000000</span>{{cursellPrice}}</span><span class="type" v-if="marketInfo" >{{marketInfo.name}}</span></p>
                <span class="label">卖出<i></i></span>
                <div class="buy-price">
                    <span  class="name">价格</span>
                    <input type="number" 
                    name="sellPrice" 
                    v-model="sellPrice"> 
                    <span class="unit">{{zoneName}}</span>
                </div>
                <div class="buy-num">
                    <span  class="name">数量</span>
                    <input type="number" 
                    name="sellAmount"
                     v-model="sellNums"
                    @keydown="toggleSellIndex">
                    <span class="unit" v-if="marketInfo">{{marketInfo.name}}</span>
                </div>
                <div class="buy-rate">
                    <button
                      v-for="(item,index) in percentage"
                      :data-index="index"
                      data-id="sellPre"
                      :data-num="item"
                      @click="selectPercentage" 
                      ref="rateBtn"
                      :disabled="isDisabled"
                      :class="{ active: index == sellNumIndex }"
                    >{{item}}%</button>
                </div>
                <div class="total-price">
                    <span  class="name">交易额</span>
                   <span class="value">{{sellAmount}}</span>
                    <span class="unit">{{zoneName}}</span>
                </div>
                <!-- <button class="sell-button transaction-btn"
                :class="{Allowed:isDisabled}"
                 @click='$store.dispatch("trading/tradingSell", sellParams)'
                :disabled="isDisabled">卖出<span v-if="marketInfo">{{marketInfo.name}}</span></button> -->
                <button class="sell-button transaction-btn"
                :class="{Allowed:isDisabled}"
                 @click='sellCoin'
                :disabled="isDisabled">卖出<span v-if="marketInfo">{{marketInfo.name}}</span></button>
            </div>
        </div>
        </div>
  
    </div>
</template>
<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from "vuex"
const numReg = /^\d+(?:\.\d{1,4})?$/;
const coinReg = /^\d+(?:\.\d{1,8})?$/;
export default {
  name: "LimitedPrice",
  data() {
    return {
      token: "",
      isDisabled: true,
      hasBorder: false,
      percentage: ["25", "50", "75", "100"],
      sellAmount: 0,
      buyAmount: 0,
      ableTotal: '', //可买入总数
      buyPrice: '', //买入价
      buyNums: 0, //买入数量
      sellPrice: '', //买入价格
      sellNums: 0, //买入数量
      ableSellTotal: '', //可卖总数
      buyParams: {
        tradeCoinPairId: 1,
        //code: 13422,
        tradePassword: 95558
      },
      sellParams: {
        tradeCoinPairId: 1,
        //code: 1123414,
        tradePassword: 95558
      },
      buyNumIndex: -1,
      sellNumIndex: -1
    }
  },
  watch: {
    buyPrice(newVal, oldVal) {
      if (coinReg.test(newVal) && newVal.toString().length <= 15) {
        this.totalAmout('buy');
        this.buyPrice = this.toNumber(newVal);;
      } else if (newVal == '') {
        this.buyPrice = 0;
      } else if(newVal&&newVal!==oldVal){
        this.buyPrice=this.buyPrice
      }
      else {
        this.buyPrice = oldVal;
      }
      this.ableTotal = this.curbuyPrice / this.buyPrice;
      this.buyNums = Math.min(this.toFixedDecimal(this.ableTotal, 4), this.buyNums);
      this.buyAmount = this.toFixedDecimal(this.buyNums * this.buyPrice, 4);
    },
    buyNums(newVal, oldVal) {
      if (numReg.test(newVal) && newVal.toString().length <= 15) {
        this.totalAmout('buy');
        this.buyNums = this.toNumber(newVal);
      } else if (newVal == '') {
        this.buyNums = 0;
      } else {
        this.buyNums = oldVal;
      }
    },
    sellPrice(newVal, oldVal) {
      if (coinReg.test(newVal) && newVal.toString().length <= 15) {
        this.totalAmout('sell');
        this.sellPrice = this.toNumber(newVal);;
      } else if (newVal == '') {
        this.sellPrice = 0;
      } else {
        this.sellPrice = oldVal;
      }
    },
    sellNums(newVal, oldVal) {
      if (numReg.test(newVal) && newVal.toString().length <= 15) {
        this.totalAmout('sell');
        this.sellNums = this.toNumber(newVal);;
      } else if (newVal == '') {
        this.sellNums = 0;
      } else {
        this.sellNums = oldVal;
      }
    },
    currentPrice(val) {
      console.log(val,"currentPrice======>>>>>>>>>>")
      this.buyPrice = val[1];
      this.sellPrice = val[0];
    },
  },
  mounted() {
    this.token = localStorage.getItem("token")
    if (this.token) {
      this.isDisabled = false
    } else {
      this.isDisabled = true
    }
  },
  computed: {
    ...mapState("trading", ["tradingAssets", "currentPrice", "curbuyPrice", "cursellPrice"]),
    ...mapState(["zoneName", 'marketInfo']),
  },
  methods: {
    toggleBuyIndex() {
      this.buyNumIndex = -1
    },
    toggleSellIndex() {
      this.sellNumIndex = -1
    },
    toNumber(s) {
      s = s.toString();
      s = s.replace(/^0+\./,'0.');
      s = s.replace(/^0+([0-9])/,'$1');
      return s;
    },
    selectPercentage(e) {
      let target = e.target.dataset
      console.log(target, '====00000target')
      if (target.id == "buyPre") {
        let params = this.buyParams;
        this.buyNumIndex = target.index;
        this.$nextTick(() => {
          this.ableTotal = this.curbuyPrice / this.buyPrice;
          this.buyNums = this.toFixedDecimal(target.num / 100 * this.ableTotal, 4);
          this.buyAmount = this.toFixedDecimal(this.buyNums * this.buyPrice, 4);
        })
      } else if (target.id == "sellPre") {
        let params = this.sellParams;
        this.sellNumIndex = target.index;
        this.$nextTick(() => {
          this.sellNums = this.toFixedDecimal(target.num / 100* this.cursellPrice, 4);
          this.sellAmount = this.toFixedDecimal(this.sellNums * this.sellPrice, 4);
        })
      }
    },
    toFixedDecimal(num, decimal) {
      let dec = Math.pow(10, decimal);
      return Math.floor(num * dec) / dec;
    },
    //买币
    buyCoin() {
      if (this.buyNums == '') {
        this.hasBorder = true
        this.$message({
          message: '请输入买入数量',
          type: 'warning'
        });
      }
      if (this.buyPrice == '') {
        this.hasBorder = true
        this.$message({
          message: '请输入买入价',
          type: 'warning'
        });
      }
      var buyParams = {
        Price: this.buyPrice,
        Nums: this.buyNums
      }
      this.$store.dispatch("trading/tradeCoinPairMaxMinPrice", buyParams)
    },
    sellCoin() {
      if (this.sellNums == '') {
        this.hasBorder = true
        this.$message({
          message: '请输入卖出数量',
          type: 'warning'
        });
      }
      if (this.sellPrice == '') {
        this.hasBorder = true
        this.$message({
          message: '请输入卖出价',
          type: 'warning'
        });
      }
      var sellParams = {
        Price: this.sellPrice,
        Nums: this.sellNums
      }
      this.$store.dispatch("trading/tradeCoinPairMaxMinPrice1", sellParams)
    },
    totalAmout(type) {
      switch (type) {
        case "buy":
          this.buyAmount = (this.buyNums * this.buyPrice).toFixed(8)
        case "sell":
          this.sellAmount = (this.sellNums * this.sellPrice).toFixed(8)
      }
    },
    ...mapMutations(["searchTradingCoin"])
  }
};
</script>
<style>
.el-message-box__input .el-input__inner{color:#333}
</style>

<style lang="less" scoped>

.border1,.border2{border:1px solid red}
.useable {
  margin-top: 12px;
  color: #fff;
  font-size: 13px;
  span {
    font-size: 16px;
    padding-left: 0 !important;
    color: #fff !important;
    &.num {
      font-size: 16px;
    }
  }
}
.useable {
  margin-top: 15px;
  color: #fff;
  span {
    font-size: 16px;
    padding-left: 0;
    color: #fff;
  }
}
.Allowed {
  cursor: not-allowed !important;
}
.islogin {
  margin-top: 10px;
  font-size: 12px;
}
.buy-price,
.buy-num,
.total-price {
  position: relative;
  .name {
    position: absolute;
    left: 0px;
  }
  .unit {
    position: absolute;
    right: 10px;
    top: 0;
  }
  .value {
    position: relative;
    left: 50px;
  }
  input {
    &:focus {
      border-color: #1fc56d;
    }
  }
}
.sell-panel {
  input {
    &:focus {
      border-color: #ef6e59;
    }
  }
}
.limit-price {
  margin-bottom: 8px;
  background: #292f37;
  .title {
    padding: 0 28px 0 22px;
    height: 30px;
    background: #181f27;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Semibold;
    font-size: 13px;
    color: #ffffff;
    .left {
      flex: 1;
    }
  }
  .penel {
    padding-left: 22px;
    display: flex;
    .buy-panel {
      width: 48%;
      margin-right: 5.7%;
      button:hover, button.active {
        color: #fff;
        background: #1fc56d !important;
      }
    }
    .sell-panel {
      width: 48%;
      margin-right: 3.1%;
    }
    .input-text {
      .label {
        font-family: PingFangSC-Semibold;
        padding: 13px 0;
        font-size: 15px;
        color: #ebebeb;
        display: block;
        i {
          font-style: normal;
        }
      }
      .type {
        font-size: 12px;
        font-weight: 800;
        margin-left: 5px;
      }
      input {
        width: 100%;
        height: 32px;
        text-indent: 30px;
        font-size: 14px;
        color: #ffffff;
      }
      span {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999ea4;
        padding-left: 8px;
        &.num {
          font-size: 16px;
        }
      }
     div, .transaction-btn {
        margin-bottom: 19px;
        height: 32px;
        line-height: 32px;
      }
      .total-price {
        .name {
          position: initial;
          padding-left: 0;
        }
        .value,
        .unit {
          position: initial;
          padding-left: 2px;
        }
      }
      .buy-num,
      .total-price {
        // display:flex;
        align-items: center;
        input {
        }
      }

      .transaction-btn {
        text-align: center;
        font-size: 14px;
        color: #ffffff;
        width: 100%;
        height: 32px;
        line-height: 32px;
        span {
          color: #fff;
          padding: 0;
        }
      }
    }
  }
}
.buy-rate {
  display: flex;
  margin: 0 -2% 19px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  button {
    width: 24%;
    margin: 0 2%;
    border: 1px dashed #999ea4;
    font-size: 13px;
    color: #999ea4;
    background: transparent;
    cursor: pointer;
    border-radius: 2px;
    transition: 0.4s;

    &:hover, &.active {
      color: #fff;
      background: #ef6e59 !important;
      border: none;
    }
  }
}
.buy-button {
  background: #1fc56d;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: darken(#1fc56d, 9%);
  }
}
.sell-button {
  background: #ef6e59;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: darken(#ef6e59, 9%);
  }
}
</style>


