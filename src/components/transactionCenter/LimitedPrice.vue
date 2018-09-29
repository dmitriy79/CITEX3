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
                    v-model="currentPrcie"> -->
                    <span class="unit">{{zoneName}}</span>
                </div>
               <div class="buy-num">
                    <span class="name">数量</span>
                    <input type="number" :class="{border2:hasBorder}"
                    name="buyAmount"
                    v-model="buyNums">
                    <span class="unit" v-if="marketInfo">{{marketInfo.name}}</span>
                </div>
                <div class="buy-rate">
                    <button 
                    :class="{active:buySelect==index,Allowed:isAllowed}" 
                    v-for="(item,index) in percentage" 
                    @click="selectPercentage"
                    :data-index="index"
                    data-id="buyPre"
                    :data-num="item"
                    :disabled="isDisabled">{{item}}%</button>
                </div>
             
                <div class="total-price">
                    <span class="name">交易额</span>
                    <span class="value">{{buyAmount}}</span>
                    <span class="unit">{{zoneName}}</span>
                </div>
                   <button 
                class="buy-button transaction-btn"
                :class="{Allowed:isAllowed}"
                @click='buyCoin' 
                :disabled="isDisabled">买入<span v-if="marketInfo">{{marketInfo.name}}</span></button> 
                <!-- <button 
                class="buy-button transaction-btn"
                :class="{Allowed:isAllowed}"
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
                    <input type="text" 
                    name="sellPrice" 
                    v-model="sellPrice"> 
                    <span class="unit">{{zoneName}}</span>
                </div>
                <div class="buy-num">
                    <span  class="name">数量</span>
                    <input type="text" 
                    name="sellAmount"
                     v-model="sellNums">
                    <span class="unit" v-if="marketInfo">{{marketInfo.name}}</span>
                </div>
                <div class="buy-rate">
                    <button
                    :class="{active:sellSelect==index,Allowed:isAllowed1}"
                    v-for="(item,index) in percentage"
                    :data-index="index"
                    data-id="sellPre"
                    :data-num="item"
                    @click="selectPercentage" 
                    ref="rateBtn"
                    :disabled="isDisabled">{{item}}%</button>
                </div>
                <div class="total-price">
                    <span  class="name">交易额</span>
                   <span class="value">{{sellAmount}}</span>
                    <span class="unit">{{zoneName}}</span>
                </div>
                <!-- <button class="sell-button transaction-btn"
                :class="{Allowed:isAllowed}"
                 @click='$store.dispatch("trading/tradingSell", sellParams)'
                :disabled="isDisabled">卖出<span v-if="marketInfo">{{marketInfo.name}}</span></button> -->
                <button class="sell-button transaction-btn"
                :class="{Allowed:isAllowed}"
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
export default {
  name: "LimitedPrice",
  data() {
    return {
      sellSelect: 0,
      buySelect: 0,
      token: "",
      isAllowed: false,
      isAllowed1: false,
      isDisabled: true,
      hasBorder: false,
      percentage: ["25", "50", "75", "100"],
      sellAmount: 0,
      buyAmount: 0,
      ableTotal: '', //可买入总数
      buyPrice: '', //买入价
      buyNums: 1, //买入数量
      sellPrice: '', //买入价格
      sellNums: 1, //买入数量
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
      }
    }
  },
  watch: {
    buyPrice() {
      this.totalAmout('buy')
    },
    buyNums() {
      this.totalAmout('buy')
    },
    sellPrice() {
      this.totalAmout('sell')
    },
    sellNums() {
      this.totalAmout('sell')
    },
    currentPrcie(val) {
      this.buyPrice = val;
      this.sellPrice = val;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token")
    if (this.token) {
      this.isDisabled = false
    } else {
      this.isDisabled = true
      this.isAllowed = true
      this.isAllowed1 = true
    }
  },
  computed: {
    ...mapState("trading", ["tradingAssets", "currentPrcie", "marketInfo", "curbuyPrice", "cursellPrice"]),
    ...mapState(["zoneName"]),
  },
  methods: {

    selectPercentage(e) {
      let target = e.target.dataset
      console.log(target, '====00000target')
      if (target.id == "buyPre") {
        this.buySelect = target.index;
        let params = this.buyParams;
        this.$nextTick(() => {
          var currentProperty1 = this.$refs.num1.innerText
          this.ableTotal = currentProperty1 / this.buyPrice
          console.log(this.ableTotal, target.num)
          this.buyNums = (target.num / 100) * this.ableTotal
          this.buyAmount = this.buyNums * this.buyPrice
        })
      } else if (target.id == "sellPre") {
        this.sellSelect = target.index;
        let params = this.sellParams;
        this.$nextTick(() => {
          var currentProperty2 = this.$refs.num2.innerText
          this.ableSellTotal = currentProperty2 / this.sellPrice
          console.log(this.ableSellTotal, target.num)
          this.sellNums = (target.num / 100) * this.ableSellTotal
          this.sellAmount = this.sellNums * this.sellPrice
        })
      }
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
      .active {
        background: #1fc56d !important;
      }
    }
    .sell-panel {
      width: 48%;
      margin-right: 3.1%;
      .active {
        background: #ef6e59 !important;
      }
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

    &:hover {
      border-color: #fff;
      color: #fff;
    }
    &.active {
      color: #ffffff;
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


