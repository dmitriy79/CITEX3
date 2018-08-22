<template>
<div>
    <div class="tabs">
       <dl>
            <dt><span></span>账户中心</dt>
            <dd @click="toggleTab('property')" :class="{active:this.currentTab==='property'}">我的资产</dd>
            <dt><span></span>交易记录</dt>
            <dd @click="toggleTab('entrust')"  :class="{active:this.currentTab==='entrust'}">我的委托</dd>
            <dd>交易记录</dd>
            <dd>C2C记录</dd>
            <dt><span></span>财产中心</dt>
            <dd>我要冲币</dd>
            <dd>我要提币</dd>
            <dd>银行卡管理</dd>
            <dd>币账户</dd>
            <dt><span></span>安全中心</dt>
            <dd>安全设置</dd>
            <dd>实名认证</dd>
            <dd>我的消息</dd>
            <dd>谷歌验证</dd>
            <dd>推荐返佣</dd>
            <dd>登录密码</dd>
        </dl>
    </div>
  
    <property :is="currentTab" keep-alive></property>
</div>

</template>
 
<script>
// 引入子组件
import property from "../components/personal/MineProperty";
import entrust from "../components/personal/MineEntrust";

export default {
 name: 'app',
 data () {
  return {
   currentTab: 'property' // currentTab 用于标识当前触发的子组件
  };
 },
 components: { // 声明子组件
    property,
    entrust
 },
 methods: {
  toggleTab: function(tab) {
      console.log(tab)
   this.currentTab = tab; // tab 为当前触发标签页的组件名
  }
 }
}
</script>

<style lang="less" scoped>
.tabs{
    width: 190px;background:#292f37;font-family: PingFangSC-Regular;
font-size: 16px;
    dl{
        dt,dd{
            height: 40px;line-height: 40px;
        }
    }
}
</style>

