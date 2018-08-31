<template>
  <div class="home">
    <v-header></v-header>  
    <home-swiper :list="swiperList"></home-swiper>
    <!-- <div class="wrap-bg">
      <img src="../assets/images/home-bg.png" alt="">
      <div class="bg-text">
          <div class="text-top">IB数字资产交易所一站式解决方案</div>
          <div class="text-bottom">助力项目方一键极速搭建自有交易所</div>
          <div class="btn-wrap"><span class="btn">申请渠道商</span></div>
      </div>
    </div> -->
    <div class="content">
       <div class="title">
         <span>公告：<i>关于7月26日 BTC/USDT 交易对数据异常说明</i></span>
         <span>更多<i></i></span>
       </div>
       <div><coin-type></coin-type></div>
       <div>
         <rise-drop></rise-drop>
       </div>
       
       <tab-transaction></tab-transaction>
       <div class="bottom">
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
      swiperList: [
        // {
        //   img:
        //     "https://www.oex.cn/hryfile/c/9/9fb480a485f54e3fb80e55bef20f59fa.jpg"
        // },
        // {
        //   img:
        //     "https://www.oex.cn/hryfile/6/1/d60fb42e0a434e94ba9edd9404ed0f72.jpg"
        // }
      ]
    };
  },
  mounted(){
    this.getbanner()
  },
  methods:{
    getbanner(){
        var url=`/api/banner/listByType`
        this.$http.get(url,{
                  params: {
                    type: 1,
                }
            },
        {
      headers:{"Content-Type": "application/json"}}).then(res => {
            console.log(res.data.datas,'2222')
            this.swiperList=res.data.datas
            // console.log(this.swiperList,'www')
        })
    }
  }
};
</script>


<style lang="less" scoped>

.home{
  .content{
    background: #3b4249;
    padding: 0 10.3%;
    .title{
      display: flex;
      height: 82px;
      align-items: center;
      span{
        font-family: PingFangSC-Medium;
        font-size: 14px;
      }
      span:first-child{
        flex: 1;
        color: #999AA1;
        i{
          color: #C8CCD1;
          font-family:"PingFangSC-Regular";
        }
      }
      span:last-child{
        color: #6F717A;
        cursor: pointer;
        i{
          padding-left:10px; 
              &::after{
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
    }
  }
  .wrap-bg{
     height: 510px;
     position: relative;
     color: #FFFFFF;
     img{
       height: 100%;
       width: 100%
     }
     .bg-text{
       position: absolute;
      top: 146px;
      left: 0;
      right: 0;
      text-align: center;
      font-family:"PingFangSC-Regular" ;
      .text-top{
        font-size: 41px;margin-bottom: 24px;
      }
      .text-bottom{font-size: 25px;}
      .btn-wrap{margin-top:70px;
        .btn{width: 172px;height: 48px;border: 1px solid #fff;padding: 10px 37px;font-size: 20px}
      }
      
     }
  }
}
.bottom{
  margin-top: 60px;
  .bottom-title{
     font-family: PingFangSC-Medium;
      font-size: 26px;
      color: #FFFFFF;
      line-height: 37px;
      text-align: center;
      margin-bottom:114px;
  }
  .info-wrap{display: flex;justify-content: center;text-align: center;padding-bottom:82px;
    .item{flex: 1;
    .item-title{text-align: center;font-family: "PingFangSC-Medium";
font-size: 18px;
color: #FFFFFF;margin-bottom: 5px;}
     
    .img-wrap{display: inline-block;margin-bottom:15px;
      width: 65px;
      height: 65px;
      img{width: 100%;height: 100%;}
    }
    .info{
      p{font-family: "PingFangSC-Regular";
font-size: 12px;
color: #9da0a4;line-height: 22px}
    }
  }
  }
 
}
</style>
