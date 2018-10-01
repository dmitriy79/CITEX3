
<template>
  <div>
    <div class="transaction-wrap">
      <div class="transaction-top">
        <div class="left">
          <div class="title" v-if="inited">
            <div class="title-left">
              <div class="symbol">
                <span>{{marketInfo.name}}</span>/<span>{{zoneName}}</span>
              </div>
              <div class="price-wrap">
                <span class="rate" :class="{red:!marketInfo.increase}">{{marketInfo.increase ? '+':'-'}}<i>{{marketInfo.increase_24H}}%</i></span>
                <span class="price" :class="{red:!marketInfo.increase}">{{marketInfo.deal_price}}</span>&nbsp;
                <!-- <span class="price-val">≈ <i>0000.43</i> CNY</span> -->
              </div>
            </div>
            <div class="title-right">
              <ul>
                <li>
                  <div class="img-wrap">
                    <!-- <img src="../../src/assets/images/hours.png" alt=""> -->
                    <span class="ico-hours"></span>
                  </div>
                  <div>
                    <p class="ititle">24h成交量</p>
                    <p class="result">{{marketInfo.amount_24H}}</p>
                  </div>
                </li>
                <li>
                  <div class="img-wrap">
                    <span class="ico-chart"></span>
                    <!-- <img src="../../src/assets/images/icon-hours-top.png" alt=""> -->
                  </div>
                  <div>
                    <p class="ititle">24h最高</p>
                    <p class="result">{{marketInfo.maxPrice_24H}}</p>
                  </div>
                </li>
                <li>
                  <div class="img-wrap">
                    <span class="ico-chats"></span>
                    <!-- <img src="../../src/assets/images/icon-hours-low.png" alt=""> -->
                  </div>
                  <div>
                    <p class="ititle">24h最低</p>
                    <p class="result">{{marketInfo.minPrice_24H}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <k-line v-if="klineHistory"></k-line>
        </div>
        <div class="right">
          <coin-tab v-if="inited"></coin-tab>
        </div>
      </div>
      <div class="transaction-middle">
        <div class="transaction-middle-left">
          <div class="panel-left">
          <limited-price></limited-price>
          <entrust></entrust>
        </div>
        <div class="panel-right">
          <buy-sell></buy-sell>
        </div>
      </div>
      <div class="transaction-middle-right">
        <transaction-price></transaction-price>
      </div>
    </div>
    <div class="transaction-bottom">
      <div class="panel-left">
        <type-info></type-info>
      </div>
      <div class="panel-right">
        <div class="deepImg-title">深度图</div>
        <x-chart :id="id" :ask="AskList" :bid="BidList"></x-chart>
        <!-- <deep-img></deep-img> -->
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import KLine from "../components/transactionCenter/KLine";
import CoinTab from "../components/transactionCenter/CoinTab";
import LimitedPrice from "../components/transactionCenter/LimitedPrice";
import Entrust from "../components/transactionCenter/Entrust";
import BuySell from "../components/transactionCenter/BuyOrSell";
import TransactionPrice from "../components/transactionCenter/TransactionPrice";
// import DeepImg from "../components/transactionCenter/DeepImg";
import TypeInfo from "../components/transactionCenter/CoinTypeInfo";
import XChart from "../components/chart/DeepImg.vue";
// 导入chart组件模拟数据
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
export default {
  name: "Transaction",
  components: {
    KLine,
    CoinTab,
    LimitedPrice,
    Entrust,
    BuySell,
    TransactionPrice,
    // DeepImg,
    XChart,
    TypeInfo
  },
 
  data() {
    return {
      inited: false,
      id: "id",
    };
  },
  created() {
  },
  
  watch: {
    '$route.params.pair': function (pair) {
      const [coinName, zoneName] = pair.split('_');
      this.$store.dispatch("trading/toggleMarket", { coinName, zoneName });
    }
  },

  mounted() {
    this.$store.dispatch("initTradingList", {
      pair: this.$route.params.pair,
      callback: () => {
        this.inited = true;
        this.$store.dispatch("trading/initTradings")
      }
    })
  },
  methods: {
    
  },
  computed: {
    // ...mapState(["marketInfo"]),
     ...mapState("trading", [ "AskList", "BidList", 'klineHistory']),
     ...mapState(['marketInfo', "zoneName"])
  }
};
</script>
<style>
@media only screen and (max-width: 1920px) and (min-width: 1400px) {
  #app .transaction-wrap .transaction-middle .transaction-middle-left {
    width: 78.5%;
  }
  #app
    .transaction-wrap
    .transaction-middle
    .transaction-middle-left
    .panel-left {
    width: 70%;
  }
  #app
    .transaction-wrap
    .transaction-middle
    .transaction-middle-left
    .panel-right {
    width: 30%;
  }
  #app .transaction-wrap .transaction-middle .transaction-middle-right {
    width: 27%;
  }
}
@media only screen and (max-width: 1425px) {
  #app .transaction-wrap .transaction-bottom .panel-left {
    width: 52%;
  }
}
@media only screen and (max-width: 1400px) {
  #app .transaction-wrap .transaction-middle .transaction-middle-left {
    width: 75%;
  }
  #app .transaction-wrap .transaction-top .left {
    width: 75%;
  }
  #app .transaction-wrap .transaction-top .right {
    width: 26%;
  }
  #app
    .transaction-wrap
    .transaction-middle
    .transaction-middle-left
    .panel-left {
    width: 64.5%;
  }
  #app
    .transaction-wrap
    .transaction-middle
    .transaction-middle-left
    .panel-right {
    width: 35%;
  }
  #app .transaction-wrap .transaction-middle .transaction-middle-right {
    width: 26%;
  }
  #app .limit-price .penel .input-text input {
    width: 69%;
  }
  #app .entrust-panel dt span,
  #app .entrust-panel dd span {
    width: 19.2%;
  }
}

@media only screen and (max-width: 1366px) and (min-width: 1300px) {
  #app .transaction-wrap .transaction-middle .transaction-middle-right {
    width: 28%;
  }
  #app .transaction-wrap .transaction-top .left {
    width: 72%;
  }
  #app .transaction-wrap .transaction-top .right {
    width: 28%;
  }
  #app .transaction-wrap .transaction-middle .transaction-middle-left {
    width: 72%;
  }
  #app .transaction-wrap .transaction-bottom .panel-left {
    width: 47.8%;
  }
  #app .transaction-wrap .transaction-bottom .panel-right {
    width: 54%;
    margin: 0 9px 0 7px;
  }
}
</style>
<style lang="less" scoped>
.price-wrap {
  span {
    font-size: 16px;
  }
  i {
    font-style: normal;
  }
  .rate {
    background: #1fc56d;
    border-radius: 2px;
    padding: 1px 7px;
    font-family: PingFangSC-Semibold;
    font-size: 13px;
    color: #ffffff;
    &.red{
      background-color:#ef6e59;
    }
    i {
      font-size: 13px;
      font-style: normal;
    }
  }
  .price {
    font-size: 16px;
    color: #5dc176;
    &.red{
      color:#ef6e59;
    }
  }
  .price-val {
    font-size: 16px;
    color: #dfe2e8;
  }
}
.transaction-wrap {
  background: #3b4249;
  padding: 8px 0 9px 17px;
  .transaction-top {
    overflow: hidden;
    display: flex;
    margin-bottom: 8px;
    .left {
      width: 78.5%;
      .title {
        display: flex;
        height: 50px;
        background: #181f27;
        .title-left {
          display: flex;
          height: 100%;
          align-items: center;
          .symbol {
            background: #161c24;
            width: 105px;
            padding: 0 13px 0 12px;
            margin-right: 22px;
            color: #e4e5e7;
            font-weight: 800;
          }
        }
        .title-right {
          height: 100%;
          flex: 1;
          ul {
            display: flex;
            justify-content: flex-end;
            height: 100%;
            li {
              display: flex;
              align-items: center;
              margin-right: 40px;
              .img-wrap {
                width: 22px;
                height: 22px;
                margin-right: 7px;
                span {
                  color: #bababe;
                  font-size: 22px;
                }
                // img {
                //   width: 100%;
                // }
                & + div {
                  margin-left: 4px;
                }
              }

              .ititle {
                font-size: 12px;
                color: #999ea4;
                font-family: PingFangSC-Regular;
              }
            }
            .result {
              font-family: PingFangSC-Semibold;
              font-size: 13px;
              color: #ebeff3;
            }
          }
        }
      }
    }
    .right {
      width: 21.5%;
      min-width: 328px;
    }
  }
  .transaction-middle {
    margin-bottom: 8px;
    display: flex;

    .transaction-middle-left {
      display: flex;
      width: 78.5%;
      .panel-left {
        width: 74%;
      }
      .panel-center {
        width: 20%;
        margin: 0 8px 0 12px;
        background: #292f37;
        position: relative;
      }
      .panel-right {
        width: 26%;
        margin-left: 0.8%;
      }
    }
    .transaction-middle-right {
      width: 21.5%;
    }
  }
  .transaction-bottom {
    display: flex;
    .panel-left {
      width: 51.7%;
    }
    .panel-right {
      background: #292f37;
      width: 27%;
      margin: 0 9px;
      width: 47%;
      .deepImg-title {
        height: 30px;
        line-height: 30px;
        background: #181f27;
        padding-left: 18px;
        font-size: 13px;
        color: #ffffff;
      }
    }
  }
}
</style>


