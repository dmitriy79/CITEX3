<template>
<div class="contanier">
    <v-header></v-header>
    <div class="personal-wrapper">
    <div class="tabs">
       <dl>
            <dt><span></span>账户中心</dt>
            <dd @click="toggleTab('property')" :class="{active:this.currentTab==='property'}" class="border-bottom">我的资产</dd>
            <dt><span></span>交易记录</dt>
            <dd @click="toggleTab('entrust')"  :class="{active:this.currentTab==='entrust'}">我的委托</dd>
            <dd @click="toggleTab('record')"  :class="{active:this.currentTab==='record'}">交易记录</dd>
            <dd class="border-bottom">C2C记录</dd>
            <dt><span></span>财产中心</dt>
            <dd @click="toggleTab('full-coin')"  :class="{active:this.currentTab==='full-coin'}">我要冲币</dd>
            <dd @click="toggleTab('carry-coin')"  :class="{active:this.currentTab==='carry-coin'}">我要提币</dd>
            <dd @click="toggleTab('bank-card')"  :class="{active:this.currentTab==='bank-card'}">银行卡管理</dd>
            <dd @click="toggleTab('coin-count')"  :class="{active:this.currentTab==='coin-count'}"  class="border-bottom">币账户</dd>
            <dt><span></span>安全中心</dt>
            <dd @click="toggleTab('phone-authentication')"  :class="{active:this.currentTab==='phone-authentication'}" >手机认证</dd>
            <dd @click="toggleTab('email-authenticator')"  :class="{active:this.currentTab==='email-authenticator'}">邮箱认证</dd>

            <dd @click="toggleTab('real-authentication')"  :class="{active:this.currentTab==='real-authentication'}">实名认证</dd>
            <dd @click="toggleTab('mine-info')"  :class="{active:this.currentTab==='mine-info'}">我的消息</dd>
            <dd @click="toggleTab('google-authenticator')"  :class="{active:this.currentTab==='google-authenticator'}">谷歌验证</dd>
            <dd @click="toggleTab('recommed')"  :class="{active:this.currentTab==='recommed'}">推荐返佣</dd>
            <dd  @click="toggleTab('modify-password')"  :class="{active:this.currentTab==='modify-password'}">登录密码</dd>
        </dl>
    </div>
    <div class="content">
        <property :is="currentTab" keep-alive ></property>
    </div>
    
</div>
<v-footer></v-footer>
</div>


</template>
 
<script>
// 引入子组件
import VHeader from "../components/Header";
import VFooter from "../components/Footer";
import Property from "../components/personal/MineProperty";
import Entrust from "../components/personal/MineEntrust";
import Record from "../components/personal/TransactionRecord";
import FullCoin from "../components/personal/FullCoin";
import CarryCoin from "../components/personal/CarryCoin";
import BankCard from "../components/personal/BankCardManage";
import CoinCount from "../components/personal/CoinCount";
import PhoneAuthentication from "../components/personal/PhoneAuthentication";
import RealAuthentication from "../components/personal/RealAuthentication";
import GoogleAuthenticator from "../components/personal/GoogleAuthenticator";
import Recommed from "../components/personal/Recommed";
import ModifyPassword from "../components/personal/ModifyPassword";
import MineInfo from "../components/personal/MineInfo";
import EmailAuthenticator from "../components/personal/EmailAuthenticator";


export default {
 name: 'app',
 data () {
  return {
   currentTab: 'property', // currentTab 用于标识当前触发的子组件
    showList:false
  };
 },
 components: { // 声明子组件
    Property,
    Entrust,
   Record,
   FullCoin,
   CarryCoin,
   BankCard,
   CoinCount,
   PhoneAuthentication,
   RealAuthentication,
   GoogleAuthenticator,
   EmailAuthenticator,
   ModifyPassword,
   Recommed,
   MineInfo,
    VHeader,
    VFooter
 },
 methods: {
  toggleTab: function(tab) {

        this.currentTab = tab;
   
    // tab 为当前触发标签页的组件名

  },

 }
}
</script>


<style lang="less" scoped>
.contanier{background: #3b4249;
.personal-wrapper{overflow: hidden;    width: 1200px;
    margin: 47px auto;
.tabs{border-radius: 4px;color: #fff;    height: 920px;
    width: 190px;background:#292f37;font-family:"PingFangSC-Regular" ;
font-size: 16px;float: left;text-align:center;
    dl{    padding-bottom: 200px;
        dt,dd{cursor: pointer;
            height: 40px;line-height: 40px;
        }
        dt{font-size: 14px;}
        .border-bottom{border-bottom:#3b4148 1px solid}
        dd.active{background: #2286FF;position: relative;
color: #FFFFFF;
            &::after{
                 border: solid transparent;
                content: ' ';
                height: 0;
                left: 100%;    
                position: absolute;
                width: 0;
                 border-width: 10px;
            border-left-color: #2286FF;
            top: 10px;
            }
        }
    }
}
.content{position: relative;margin-left: 200px;background: #292f37;height: 920px;}
}
}


</style>

<style>
.bottom-btn{
        width: 132px;
    margin-top: 40px;
    height: 42px;
    line-height: 42px;
    background: #2286FF;
    text-align: center;
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;cursor: pointer;display: inline-block;
}
</style>