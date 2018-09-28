<template>
<div class="contanier">
    <div class="personal-wrapper">
    <div class="tabs">
       <dl>
          <dt>账户中心</dt>
          <dd @click="toggleTab('property')" :class="{active:this.currentTab==='property'}" class="border-bottom">
            <i class="ico-bags"></i>我的资产</dd>
          <dt>交易记录</dt>
          <dd @click="toggleTab('entrust')"  :class="{active:this.currentTab==='entrust'}">
              <i class="ico-hist"></i>我的委托</dd>
          <dd @click="toggleTab('record')"  :class="{active:this.currentTab==='record'}">
               <i class="ico-order"></i>交易记录</dd>
          <!-- <dd class="border-bottom">C2C记录</dd> -->
          <!-- <dt><span class="iconfont">&#xe602;</span>财产中心</dt> -->
          <dd @click="toggleTab('full-coin')"  :class="{active:this.currentTab==='full-coin'}">
              <i class="ico-in"></i>我要充币</dd>
          <dd @click="toggleTab('carry-coin')"  :class="{active:this.currentTab==='carry-coin'}">
              <i class="ico-out"></i>我要提币</dd>
          <!-- <dd @click="toggleTab('bank-card')"  :class="{active:this.currentTab==='bank-card'}">银行卡管理</dd> -->
          <dd @click="toggleTab('coin-count')"  :class="{active:this.currentTab==='coin-count'}"  class="border-bottom">
              <i class="ico-asst"></i>币账户</dd>
          <dt>安全中心</dt>
          <!-- <dd @click="toggleTab('phone-authentication')"  :class="{active:this.currentTab==='phone-authentication'}" >手机认证</dd> -->
          <dd @click="toggleTab('email-authenticator')"  :class="{active:this.currentTab==='email-authenticator'}">
              <i class="ico-mail"></i>邮箱认证</dd>

          <dd @click="toggleTab('real-authentication')"  :class="{active:this.currentTab==='real-authentication'}">
              <i class="ico-users"></i>实名认证</dd>
          <dd @click="toggleTab('mine-info')"  :class="{active:this.currentTab==='mine-info'}">
              <i class="ico-msgs"></i>我的消息</dd>
          <dd @click="toggleTab('google-authenticator')"  :class="{active:this.currentTab==='google-authenticator'}">
              <i class="ico-google"></i>谷歌验证</dd>
          <!-- <dd @click="toggleTab('recommed')"  :class="{active:this.currentTab==='recommed'}">推荐返佣</dd> -->
          <dd  @click="toggleTab('modify-password')"  :class="{active:this.currentTab==='modify-password'}">
              <i class="ico-locks"></i>登录密码</dd>
          <dd  @click="toggleTab('transaction-password')"  :class="{active:this.currentTab==='transaction-password'}">
              <i class="ico-safe"></i>交易密码</dd>
        </dl>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</div>


</template>
 
<script>

export default {
  name: "app",
  data() {
    return {
      currentTab: "property", // currentTab 用于标识当前触发的子组件
      showList: false
    };
  },
  created() {
    this.currentTab = this.$route.path.split('/')[2];
  },
  methods: {
    toggleTab: function(tab) {
      this.$router.push(tab)
      this.currentTab = tab;
    }
  }
};
</script>


<style lang="less" scoped>
.iconfont {
  margin: 0 8px 0 -29px;
}
.contanier {
  background: #3b4249;
}
.personal-wrapper {
  overflow: hidden;
  width: 1200px;
  margin: 47px auto;
  .content {
    position: relative;
    margin-left: 180px;
    background: #292f37;
     min-height:1000px;
  }
}
.tabs {
  color: #fff;
  width: 180px;
  background: #1b222a;
  font-size: 16px;
  min-height:1000px;
  float: left;
  dl {
    padding-bottom: 200px;
    dt,
    dd {
      cursor: pointer;
    }
    dt {
      font-size: 12px;
      font-weight: 1000;
      padding: 8px 20px;
      background: rgba(0, 0, 0, 0.2);
    }
    dd {
      transition: 0.5s;
      font-size: 14px;
      opacity: 0.6;
      display: flex;
      align-items: center;
      padding: 12px 20px;
      i {
        margin-right: 10px;
        font-size: 17px;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
    dd.active {
      background: #2286ff;
      position: relative;
      color: #fff;
      opacity: 1;
    }
  }
}
</style>

<style>
.bottom-btn {
  width: 132px;
  margin-top: 40px;
  height: 42px;
  line-height: 42px;
  background: #2286ff;
  text-align: center;
  border-radius: 2px;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
}
</style>