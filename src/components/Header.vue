<template>
  <div class="header">
    <div class="content">
      <div class="logo-wrapper">
        <a href="/Home">
          <img src="../assets/images/logo.png" alt="">
        </a>
      </div>
      <ul class="header-nav">
        <li>
          <router-link to="/" tag="div">首页</router-link>
        </li>
        <li>
          <router-link to="/" tag="div">交易中心</router-link>
        </li>
        <li>
          <router-link to="/" tag="div">C2C交易</router-link>
        </li>
        <li>
          <router-link to="/" tag="div">新闻资讯</router-link>
        </li>
        <li>
          <router-link to="/" tag="div">个人中心</router-link>
        </li>
        <li>
          <router-link to="/" tag="div">渠道商</router-link>
        </li>
        <li class="header-space"></li>
        
      </ul>
      <ul class="nav-right-wrapper">
        <li class="nav-right">注册</li>
        <li class="split">|</li>
        <li class="nav-right">登陆</li>
        <li class="change-btn" @click="selectLanguage">
          <i class="drop-icon" :class="{active:isActive}"></i>
          <div class="language" >{{currentLanguage}}</div>
          <transition name="fade">
            <div class="dropdown" v-if="isShow">
              <div @click="changeLanguage">中文</div>
              <div @click="changeLanguage">English</div>
            </div>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      isShow:false,
      currentLanguage:'中文',
      isActive:false
    };
  },
  methods:{
    selectLanguage(){
      this.isShow=!this.isShow
      if(this.isShow){
        this.isActive=true
      }
      else{
        this.isActive=false
      }
    },
    changeLanguage(e){
      this.currentLanguage=e.target.innerText
    }
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.header {
  height: 90px;
  background: #1e212f;
  .content {
    margin: 0 120px;
    height: 100%;
    display: flex;
    align-items: center;
    .logo-wrapper {
      a {
        display: block;
      }
    }
    .nav-right-wrapper {
      display: flex;
      align-items: center;
      .nav-right,
      .split {
        opacity: 0.5;
        font-family: PingFangTC-Regular;
        font-size: 12px;
        color: #ffffff;
        margin-left: 0;
      }
      .split {
        margin: 0 10px;
      }
      .change-btn {
        width: 70px;
        margin-left: 20px;
        position: relative;
        border: 1px solid #ffffff;
          border-radius: 2px;
          padding: 3px 0 3px 8px;
          background: #1e2130;
          opacity: 0.5;
          color: #fff;
          border-radius: 2px;
          cursor: pointer;
          div{
             font-size: 12px;
          }
        .dropdown{
          background: #1E2130;
          position: absolute;
          top: 25px;
          left: 0;
          width:80px;
          padding: 4px 0 0 6px;
          div{
            line-height: 25px;
          }
          
        }
        .drop-icon {
          width: 5px;
          height: 5px;
          display: inline-block;
          border-left: 1px solid #ffffff;
          border-top: 1px solid #ffffff;
          transform: rotate(225deg);
          -ms-transform: rotate(225deg);
          -moz-transform: rotate(225deg);
          -webkit-transform: rotate(225deg);
          -o-transform: rotate(225deg);
          opacity: 0.5;
          position: absolute;
          right: 9px;
          top: 8px;
          transition: ease-in-out 0.2s;
        }
        .drop-icon.active{
          transform: rotate(45deg);
        }
      }
    }
    .header-nav {
      display: flex;
      align-items: center;
      flex: 1 1 0%;
      margin-left: 28px;
      opacity: 0.8;

      .header-space {
        width: 242px;
      }
      li {
        position: relative;
        height: 90px;
        line-height: 90px;
        margin-left: 38px;
        div {
          font-family: PingFangTC-Medium;
          font-size: 16px;
          color: #fff;
          letter-spacing: 0;
          cursor: pointer;
        }
      }
    }
  }
}
</style>


