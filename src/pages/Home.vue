<template>
  <div class="hello">
    <v-header></v-header>  
    <home-swiper :list="swiperList"></home-swiper>
    <div class="block-dark">
      <img src="../assets/images/phone.png" alt="">
      <div class="info download-info">
        <dl>
          <dt>IB.TOP移动端支持</dt>
          <dd>覆盖iOS、Android多个移动端平台，支持全业务功能</dd>
          <dd>集多种灵活交易模式于一体，体验一站式数字货币交易服务，币财富，一手掌握</dd>
          <dd>
            <div class="download-btn">安卓移动端下载</div>
            <div class="download-btn">IOS移动端下载</div>
          </dd>
        </dl>
      </div>
    </div>   
    <v-footer></v-footer>     
  </div>
</template>

<script>
import VHeader from "../components/Header";
import VFooter from "../components/Footer";
import HomeSwiper from "../components/Swiper";
export default {
  name: "Home",
  components: {
    VHeader,
    VFooter,
    HomeSwiper
  },
  data() {
    return {
      swiperList: [
        {
          imgUrl:
            "https://www.oex.cn/hryfile/c/9/9fb480a485f54e3fb80e55bef20f59fa.jpg"
        },
        {
          imgUrl:
            "https://www.oex.cn/hryfile/6/1/d60fb42e0a434e94ba9edd9404ed0f72.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.block-dark {
  padding: 115px 206px;
  background: #282b38;
  display: flex;
  .download-info {
    display: flex;
    padding-left: 128px;
    dt {
      font-size: 30px;
      color: #ffffff;
      line-height: 30px;
      margin-bottom: 28px;
    }
    dd {
      font-size: 14px;
      color: #ffffff;
      line-height: 30px;
    }
    .download-btn {
      border: 1px solid #fff;
      opacity: 0.31;
      display: inline-block;
      margin-top: 30px;
      width: 165px;
      text-align: center;
      height: 42px;
      line-height: 42px;
      border-radius: 2px;
    }
    .download-btn:last-of-type {
      margin-left: 20px;
    }
  }
}
</style>
