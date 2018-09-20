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
                <p class="useable" v-if="this.token">可用：<span class="num">{{tradingAssets.able}}</span><span class="type">IOST</span></p>
                <span class="label">买入<i >IOST</i></span>
                <div class="buy-price">
                    <span class="name">价格</span>
                    <input type="number"
                    name="buyPrice"
                    @keyup="checkNumber"
                    v-model="buyParams.price">
                    <span class="unit">ETH</span>
                </div>
               <div class="buy-num">
                    <span class="name">数量</span>
                    <input type="number"
                    name="buyAmount"
                     @keyup="checkNumber"
                    v-model="buyParams.amount">
                    <span class="unit">IOST</span>
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
                    <span class="unit">ETH</span>
                </div>
                <button 
                class="buy-button transaction-btn"
                :class="{Allowed:isAllowed}"
                @click='$store.dispatch("trading/tradingBuy", buyParams)' 
                :disabled="isDisabled">买入<span>IOST</span></button> 
            </div>
        </div>
        <div class="sell-panel">
            <div class="input-text">
               <p class="islogin"   v-if="!this.token"> <router-link tag="a" to="/login" class="green">登录</router-link> 或  <router-link tag="a" to="/register" class="green">注册</router-link> 开始交易</p>
                <p class="useable" v-if="this.token">可用：<span class="num">192321</span><span class="type">ETH</span></p>
                <span class="label">卖出<i>IOST</i></span>
                <div class="buy-price">
                    <span  class="name">价格</span>
                    <input type="text" 
                    name="sellPrice" 
                    @keyup="checkNumber"
                    v-model="sellParams.price">
                    <span class="unit">ETH</span>
                </div>
                <div class="buy-num">
                    <span  class="name">数量</span>
                    <input type="text" 
                    name="sellAmount"
                    @keyup="checkNumber"
                     v-model="sellParams.amount">
                    <span class="unit">IOST</span>
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
                    <span class="unit">ETH</span>
                </div>
                <div class="sell-button transaction-btn"
                :class="{Allowed:isAllowed}"
                 @click='$store.dispatch("trading/tradingSell", sellParams)'
                :disabled="isDisabled">卖出<span>IOST</span></div>
            </div>
        </div>
        </div>
  
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "LimitedPrice",
  data() {
    return {
      sellSelect: 0,
      buySelect: 0,
      token: "",
      isAllowed: false,
      isAllowed1: false,
      isDisabled: false,
      buyPrice: "",
      buyNum: "",
      percentage: ["25", "50", "75", "100"],
      sellAmount: 0,
      buyAmount: 0,
      buyParams: {
        tradeCoinPairId: 0,
        code: 12,
        tradePassword: "hebi199261"
      },
      sellParams: {
        tradeCoinPairId: 1,
        code: 14,
        tradePassword: "hebi199261"
      }
    };
  },
  mounted() {
    this.token = localStorage.getItem("token");
    if (this.token == null) {
      this.isAllowed = true;
      this.isAllowed1 = true;
      this.isDisabled = true;
    } else {
      this.isAllowed = false;
      this.isAllowed1 = false;
      this.isDisabled = false;
    }
  },
  created() {
    const assetsParams = {
      pageNum: 1,
      pageSize: 90,
      coinId: 3
    };
    //this.$store.dispatch("trading/getAssets", assetsParams)
  },
  computed: {
    ...mapState("trading", ["tradingAssets"])
  },
  methods: {
    selectPercentage(e) {
      let target = e.target.dataset
      if (target.id == "buyPre") {
        this.buySelect = target.index;
        let params = this.buyParams;
        params.price = 0.02;
        params.amount = 1000 * (target.num / 100);
        this.buyAmount = (params.price * params.amount).toFixed(8);
      } else if (target.id == "sellPre") {
        this.sellSelect = target.index;
        let params = this.sellParams;
        params.price = 0.02;
        params.amount = 12300 * (target.num / 100);
        this.sellAmount = (params.price * params.amount).toFixed(8);
      }
    },
    isNumber(value) {
      let regs = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,8})))$/;
      let isNumber = regs.test(value)
      return isNumber
    },
    totalAmout(type) {
      switch (type) {
        case "buy":
          return (this.buyParams.amount * this.buyParams.price).toFixed(8)
        case "sell":
          return (this.sellParams.amount * this.sellParams.price).toFixed(8)
      }
    },
    checkNumber(e) {
      let buy = this.buyParams,
          sell = this.sellParams,
          buyAmount = this.buyAmount,
          sellAmount = this.sellAmount,
          isRight = !this.isNumber(e.target.value),
          buyAmounts = this.buyParams.amount,
          buyPrices = this.buyParams.price
          console.log(isRight)
      switch(e.target.name){
        case 'buyAmount':
          this.buyParams.amount = isRight ? buyAmounts : e.target.value
          this.buyAmount = this.buyParams.price ? this.totalAmout('buy') : 0
          break
        case "buyPrice":
          this.buyParams.price = isRight ? buyPrices : e.target.value
          this.buyAmount = buy.amount ? this.totalAmout('buy') : 0
          break
        case 'sellAmount':
          this.sellParams.amount = isRight ? sell.amount : e.target.value
          this.sellAmount = this.sellParams.price ? this.totalAmout('sell') : 0
          break
        case "sellPrice":
          this.sellParams.price = !this.isNumber(e.target.value) ? sell.price : e.target.value
          this.sellAmount = sell.amount ? this.totalAmout('sell') : 0
          break
      }
    },
    ...mapMutations(["searchTradingCoin"])
  }
};
</script>
<style lang="less" scoped>
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
      div {
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
          // padding:4px 0;
          // font-size:12px;
          // &:focus{
          //   border-color:transparent;
          // }
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


