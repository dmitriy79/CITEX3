<template>
  <div class="home">
    <v-header></v-header>
    <section v-if='pageLoading'>loading </section>
    <section v-else>
      <home-swiper :list="swiperList"></home-swiper>
      <div class="container notice">
        <div class="notice-title">公告：</div>
        <transition name="fade">
          <a @click="noticeDetail">
              {{notice[noticeIndex].title}}
            </a>
        </transition>
        <div class="notice-more"><router-link to="/notice">更多</router-link>  </div>
      </div>
      <coin-type></coin-type>
      <rise-drop></rise-drop>
      <tab-transaction></tab-transaction>
      <div class="bottom">
        <div class="container">
          <div class="bottom-title">最值得信赖的数字货币平台</div>
          <div class="info-wrap">
            <div class="item">
              <div class="img-wrap">
                <img src="../assets/images/bottom.png" alt="">
              </div>
              <div class="item-title">全球化数字货币交易</div>
              <div class="info">
                <p>使用用户遍布全球</p>
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
    <v-footer></v-footer>
  </div>
</template>
<script>
import VHeader from "../components/Header";
import VFooter from "../components/Footer";
import HomeSwiper from "../components/Swiper";
import CoinType from "../components/home/CoinType";
import RiseDrop from "../components/home/RiseOrDrop"
import TabTransaction from "../components/home/TabTransaction"

export default {
  name: "Home",
  components: {
    VHeader,
    VFooter,
    CoinType,
    RiseDrop,
    TabTransaction,
    HomeSwiper
  },
  data() {
    return {
      // title:'',
      swiperList: [{
          img: "https://www.oex.cn/hryfile/c/9/9fb480a485f54e3fb80e55bef20f59fa.jpg"
        },
        {
          img: "https://www.oex.cn/hryfile/6/1/d60fb42e0a434e94ba9edd9404ed0f72.jpg"
        }
      ],
      notice: [],
      noticeIndex: 0,
      pageLoading: true,
    };
  },
  mounted() {
    // this.getbanner()
    this.initIndex()

  },
  methods: {
    //公告详情
    noticeDetail(){
         var id= this.notice[this.noticeIndex].id
        var index=this.noticeIndex
         this.$router.push({name:'NoticeDetail',params:{id:id,index:index,allList:this.notice,prelist:this.notice[index-1],nextlist:this.notice[index+1]}})
    },
    // getbanner() {
    //   var url = `/api/banner/listByType`
    //   this.$http.get(url, {
    //     params: {
    //       type: 1,
    //     }
    //   }, {
    //     headers: { "Content-Type": "application/json" }
    //   })
    // },
    rodAd() {
      var currindex = 0
      let rod = setInterval(() => {
        let i = currindex++
          this.noticeIndex = i
        if (i == this.notice.length) {
          currindex = 0
        }
      }, 5000)
    },

    initIndex() {
      this.$http.all([this.$api.list({ pageNum: 1, pageSize: 20 ,n_language:'zh_CN'	}), this.$api.listByType({ type: 1 })])
        .then(res => {
          
          this.notice = res[0].data.datas.list
          console.log(this.notice,'wwwww')
          this.swiperList = res[1].data.datas
          this.rodAd()
          this.pageLoading = false
        })
      // this.$api.listByType({ type: 1 })
      //   .then(res => {
      //     console.log("banner", res.data.datas)
      //     this.swiperList = res.data.datas
      //     console.log(this.swiperList, 'banner')
      //   })


      // this.$api.list({ pageNum: 1, pageSize: 20 })
      //   .then(res => {
      //     console.log("ad", res.data)
      //     if (res.data.status == '200') {
      //       let notice = res.data.datas.list
      //       this.notice = notice
      //       this.rodAd()
      //     }
      //   })

      // this.$api.all({})
      //   .then(res => {
      //     console.log(res)
      //   })
    },

  },
  created() {
    console.log("created")
  },

};

</script>
<style lang="less" scoped>
html {
  background: #3B4249;
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
    width:100%;
    &:hover {
      color: #fff;
    }
  }
  &-title {
    width:60px;
    font-weight:800;
     font-size:13px;
  }
  &-more {
    width:80px;
    text-align:right;
    flex-grow: 1;

      color: #6F717A;
      cursor: pointer;
      font-size:13px;
        &::after {
          content: '';
          width: 6px;
          height: 6px;
          display: inline-block;
          border-left: 1px solid #6F717A;
          border-top: 1px solid #6F717A;
          transform: rotate(135deg);
        }
  }
}

.bottom {
  background: rgba(22, 22, 22, .1);
  padding: 90px 0;
  margin-top: 50px;
  display: flex;
  .container {
    margin: auto;
  }
  &-title {
    font-size: 26px;
    color: #FFFFFF;
    text-align: center;
    color: #FFFFFF;
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
