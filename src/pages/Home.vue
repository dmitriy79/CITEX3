<template>
  <div class="hello">
    <v-header></v-header>  
    <swiper :options="swiperOption" ref="mySwiper">
 <!-- slides -->
 <swiper-slide>I'm Slide 1</swiper-slide>
 <swiper-slide>I'm Slide 2</swiper-slide>
 <swiper-slide>I'm Slide 3</swiper-slide>
 <!-- Optional controls -->
 <div class="swiper-pagination"  slot="pagination"></div>
 <div class="swiper-button-prev" slot="button-prev"></div>
 <div class="swiper-button-next" slot="button-next"></div>
 <div class="swiper-scrollbar"   slot="scrollbar"></div>
</swiper>

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

export default {
  name: "Home",
  components: {
    VHeader,
    VFooter, 
    swiper,
    swiperSlide
  },
  data() {
    return {
         swiperOption: {
       // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
       notNextTick: true,
       // swiper configs 所有的配置同swiper官方api配置
       autoplay: 3000,
       // direction : 'vertical',
       effect:"coverflow",
       grabCursor : true,
       setWrapperSize :true,
       // autoHeight: true,
       // paginationType:"bullets",
       pagination : '.swiper-pagination',
       paginationClickable :true,
       prevButton:'.swiper-button-prev',
       nextButton:'.swiper-button-next',
       // scrollbar:'.swiper-scrollbar',
       //mousewheelControl : true,
       observeParents:true,
       // if you need use plugins in the swiper, you can config in here like this
       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
       // debugger: true,
       // swiper callbacks
       // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
       // onTransitionStart(swiper){
       //   console.log(swiper)
       // },
       // more Swiper configs and callbacks...
       // ...
     },
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
    dd{
      font-size: 14px;
      color: #FFFFFF;
      line-height: 30px;
    }
    .download-btn{
      border:1px solid #fff;
      opacity: .31;
      display: inline-block;
      margin-top: 30px;
      width: 165px;
      text-align: center;
      height: 42px;
      line-height: 42px;
      border-radius: 2px;

    }
    .download-btn:last-of-type{
      margin-left: 20px
    }
  }
}
</style>
