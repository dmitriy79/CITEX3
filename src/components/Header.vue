<template>
  <div class="header">
    <div class="content">
      <div class="logo-wrapper">
        <a href="/Home">
          <img src="../assets/images/logo.png" alt="">
          <!-- <span class="ico-logo"></span> -->
        </a>
      </div>
      <ul class="header-nav">
        <li>
          <router-link to="/" tag="div">首页</router-link>
        </li>
        <li>
          <router-link to="/Transaction" tag="div">交易中心</router-link>
        </li>
        <!-- <li>
          <router-link to="/" tag="div">C2C交易</router-link>
        </li>
        <li>
          <router-link to="/" tag="div">新闻资讯</router-link>
        </li>
        <li>
          <router-link to="/" tag="div">个人中心</router-link>
        </li> -->
        <li>
          <router-link to="/" tag="div">渠道商</router-link>
        </li>
        <li class="header-space"></li>
        
      </ul>
      <ul class="nav-right-wrapper">
        <!-- <li class="nav-right-help">帮助中心</li>
        <li class="nav-right-download">App下载</li> -->
        <li class="nav-right">注册</li>
        <li class="split">或</li>
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
      isShow: false,
      currentLanguage: "中文",
      isActive: false
    };
  },
  methods: {
    selectLanguage() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    changeLanguage(e) {
      this.currentLanguage = e.target.innerText;
    }
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.header {
  height: 50px;
  background: #181f27;
  opacity: 0.9;
  .content {
    height: 100%;
    display: flex;
    align-items: center;
    font-family: SourceHanSansCN-Medium;
    .logo-wrapper {
      margin-left: 17px;
      a {
        display: block;
      }
      .ico-logo{color: #3CA0FF}
    }
    .nav-right-wrapper {
      display: flex;
      align-items: center;
      li {
        color: #8d9398;
        font-size: 12px;
        font-size: 12px;
        cursor: pointer;
      }
      .nav-right,
      .split {
        margin-left: 0;
      }
      .nav-right-help,
      .nav-right-download {
        margin-right: 10px;
      }
      .nav-right-download {
        margin-right: 60px;
      }
      .split {
        margin: 0 10px;
      }
      .change-btn {
        margin-left: 20px;
        position: relative;
        opacity: 0.8;
        background: #000000;
        height: 50px;
        line-height: 50px;
        padding: 0 29px 0 26px;
        width: 96px;
        cursor: pointer;
        div {
          font-size: 12px;
          //  height: 50px;
          //  line-height: 50px;
        }
        .dropdown {
          background: #1e2130;
          position: absolute;
          top: 50px;
          left: 0;
          right: 0;
          padding: 4px 0 0 6px;
          div {
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
          top: 22px;
          transition: ease-in-out 0.2s;
        }
        .drop-icon.active {
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
        // width: 20%;
      }
      li {
        position: relative;
        height: 50px;
        line-height: 50px;
        margin-left: 38px;
        div {
          font-family: SourceHanSansCN-Medium;
          font-size: 16px;
          color: #999ea4;
          letter-spacing: 0;
          cursor: pointer;
        }
      }
    }
  }
}
</style>


