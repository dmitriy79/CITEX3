<template>
  <div class="home">
    <section class="loading" v-if='pageLoading'>
      <div class="ico-logo"></div>
    </section>
    <section v-else>
      <home-swiper :list="banner"></home-swiper>
      <div class="container notice">
        <a class="notice-title" href="https://ibtop-vip.zendesk.com/hc/zh-cn/categories/360001014091-%E5%85%AC%E5%91%8A%E4%B8%AD%E5%BF%83" target="_blank">公告：IB.TOP上线公告</a>

        <!-- <transition name="fade">
          <a @click="noticeDetail" v-if="official.length>0">{{official[officialIndex].title}}</a>
        </transition> -->
        <div class="notice-more">
          <a href="https://ibtop-vip.zendesk.com/hc/zh-cn/categories/360001014091-%E5%85%AC%E5%91%8A%E4%B8%AD%E5%BF%83" target="_blank">更多</a>
        </div>
      </div>
      <coin-type :coinList="coinList"></coin-type>
      <rise-drop :dealOrder="dealOrder"></rise-drop>
      <tab-transaction></tab-transaction>
      <div class="bottom">
        <div class="container">
          <div class="bottom-title">{{$t("home.adtitle")}}</div>
          <div class="info-wrap">
            <div class="item">
              <div class="img-wrap">
                <img src="../assets/images/bottom.png" alt="">
              </div>
              <!-- <div class="item-title">{{$t("home.col1title")}}</div>
              <p class="info">{{$t("home.col1cont")}}
               
              </p> -->
              <div class="item-title">
                <p>使用用户遍布全球</p>
              </div>
                <div class="info">
                    <p>支持多语言切换，多国家、地区使用</p>
                    <p>多个国家、地区组建团队运营</p>
                </div>
                
            </div>
            <div class="item">
              <div class="img-wrap">
                <img src="../assets/images/bottom2.png" alt="">
              </div>
              <div class="item-title">社群化平台管理用户</div>
              <div class="info">
                <p>社群留言区自由评论各大项目</p>
                <p>加强用户与渠道商之间的联系</p>
                <p>渠道商申请提供真实渠道，增加社群流量</p>
              </div>
            </div>
            <div class="item">
              <div class="img-wrap">
                <img src="../assets/images/bottom3.png" alt="">
              </div>
              <div class="item-title">多样化公平申请上币</div>
              <div class="info">
                <p>多币种多交易对上币，满足用户的多样化需求</p>
                <p>使用上币指数进行公平上币</p>
                <p>人人都是渠道商，人人可上币</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import HomeSwiper from "../components/Swiper";
import CoinType from "../components/home/CoinType";
import RiseDrop from "../components/home/RiseOrDrop";
import TabTransaction from "../components/home/TabTransaction";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    CoinType,
    RiseDrop,
    TabTransaction,
    HomeSwiper
  },
  data() {
    return {
      title: ""
    };
  },
  created() {
    this.$store.dispatch("initTradingList", {});
    this.$store.dispatch("home/initHome")
    this.$store.dispatch("home/officaliCycle")
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    noticeDetail() {
      let index = this.officialIndex;
      let id = this.official[this.officialIndex].id;
      this.$router.push({
        name: "NoticeDetail",
        params: {
          id: id,
          index: index,
          allList: this.official,
          prelist: this.official[index - 1],
          nextlist: this.official[index + 1]
        }
      });
    }
  },
  computed: {
    ...mapState(["pageLoading"]),
    ...mapState("home", [
      "banner",
      "official",
      "category",
      "dealOrder",
      "coinList",
      "officialIndex",
      "tradingCurrentIndex",
      "tradingList"
    ])
  }
};
</script>
<style lang="less" scoped>
html {
  background: #3b4249;
}
.loading {
  min-height: 300rpx;
  display: flex;
  align-items: center;
  text-align: center;
  min-height: 450px;
  justify-content: center;
  flex-direction: column;
  .ico-logo {
    font-size: 30px;
  }
}

.notice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  a {
    font-size: 13px;
    cursor: pointer;
    flex-grow: 2;
    width: 100%;
    &:hover {
      color: #fff;
    }
  }
  &-title {
    // width: 60px;
    cursor: pointer;
    font-weight: 800;
    font-size: 13px;
  }
  &-more {
    width: 80px;
    text-align: right;
    flex-grow: 1;

    color: #6f717a;
    cursor: pointer;
    font-size: 13px;
    &::after {
      content: "";
      width: 6px;
      height: 6px;
      display: inline-block;
      border-left: 1px solid #6f717a;
      border-top: 1px solid #6f717a;
      transform: rotate(135deg);
    }
  }
}

.bottom {
  background: rgba(22, 22, 22, 0.1);
  padding: 90px 0;
  margin-top: 50px;
  display: flex;
  .container {
    margin: auto;
  }
  &-title {
    font-size: 26px;
    color: #ffffff;
    text-align: center;
    color: #ffffff;
    margin-bottom: 60px;
  }
  .info-wrap {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    .item {
      width: 33.3333333%;
      &-title {
        text-align: center;
        font-size: 18px;
        margin-bottom: 12px;
        font-weight: normal;
        color: #fff;
      }

      .img-wrap {
        display: inline-block;
        margin-bottom: 30px;
        width: 50px;
        height: 50px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        p {
          font-size: 12px;
          color: #9da0a4;
          line-height: 1.8;
        }
      }
    }
  }
}
</style>
