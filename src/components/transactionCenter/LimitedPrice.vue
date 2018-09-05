<template>
    <div class="limit-price">
        <div class="title">
            <div class="left">限价</div>
            <div class="right"><span class="type">ETH</span>可用 <span class="available">192321.92</span> / 冻结<span class="frozen">921111.00</span></div>
        </div>
        <div class="penel">
          <div class="buy-panel">
            <div class="input-text">
               <p class="islogin"  v-if="!this.token"> <router-link tag="a" to="/login" class="green">登录</router-link> 或  <router-link tag="a" to="/register" class="green">注册</router-link> 开始交易</p>
                <span class="label">买入<i >IOST</i></span>
                <div class="buy-price">
                    <span class="name">价格</span>
                    <input type="text">
                    <span class="unit">ETH</span>
                </div>
               <div class="buy-num">
                    <span class="name">数量</span>
                    <input type="text">
                    <span class="unit">IOST</span>
                </div>
                <div class="buy-rate">
                    <button :class="{active:isActive1==index,Allowed:isAllowed}" v-for="(item,index) in buttons" @click="tabRate1(index)" :disabled="isDisabled">{{item.value}}</button>
                  
                </div>
                <div class="total-price">
                    <span class="name">金额</span>
                    <input type="text">
                    <span class="unit">ETH</span>
                </div>
                <button class="buy-button transaction-btn" :class="{Allowed:isAllowed}" :disabled="isDisabled">买入<span>IOST</span></button> 
            </div>
        </div>
        <div class="sell-panel">
            <div class="input-text">
               <p class="islogin"   v-if="!this.token"> <router-link tag="a" to="/login" class="green">登录</router-link> 或  <router-link tag="a" to="/register" class="green">注册</router-link> 开始交易</p>
                <span class="label">卖出<i>IOST</i></span>
                <div class="buy-price">
                    <span  class="name">价格</span>
                    <input type="text">
                    <span class="unit">ETH</span>
                </div>
                <div class="buy-num">
                    <span  class="name">数量</span>
                    <input type="text">
                    <span class="unit">IOST</span>
                </div>
                <div class="buy-rate">
                    <button :class="{active:isActive==index,Allowed:isAllowed1}" v-for="(item,index) in buttons" @click="tabRate(index)" ref="rateBtn" :disabled="isDisabled">{{item.value}}</button>
                    
                </div>
                <div class="total-price">
                    <span  class="name">金额</span>
                    <input type="text">
                    <span class="unit">ETH</span>
                </div>
                <div class="sell-button transaction-btn" :class="{Allowed:isAllowed}" :disabled="isDisabled">卖出<span>IOST</span></div>
            </div>
        </div>
        </div>
  
    </div>
</template>
<script>
export default {
  name: "LimitedPrice",
  data(){
    return{
      isActive:0,
      isActive1:0,
      token:'',
      isAllowed:false,
      isAllowed1:false,
      isDisabled:false,
      buttons:[{value:'25%'},{value:'50%'},{value:'75%'},{value:'100%'}]
    }
  },
  mounted () {
    this.token = localStorage.getItem("token")
    
    if(this.token==null){
       this.isAllowed=true
       this.isAllowed1=true
       this.isDisabled=true
    }
    else{
      this.isAllowed=false
       this.isAllowed1=false
       this.isDisabled=false
    }
  },
  methods: {
    tabRate(index){
      this.isActive=index
    },
    tabRate1(index){
      this.isActive1=index
    }
  }
};
</script>
<style lang="less" scoped>
.Allowed{cursor: not-allowed!important;}
.islogin{margin-top: 10px}
.buy-price,.buy-num,.total-price{position: relative;
  .name{position: absolute;left: 0px;}
  .unit{position: absolute;right: 10px;top: 0}
  input{
    &:focus{
            border-color:#1fc56d;
          }
  }
}
.sell-panel{
  input{
     &:focus{
     border-color:#ef6e59}
  }
}
.limit-price {
  margin-bottom: 8px;
  background: #292f37;

  .title {
    padding: 0 28px 0 22px;
    height: 30px;
    background: #181f27;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Semibold;
    font-size: 13px;
    color: #ffffff;
    .left {
      flex: 1;
    }
  }
  .penel {
    padding-left: 22px;
    display: flex;
    .buy-panel {
      width: 48%;
      margin-right: 5.7%;
      .active {
        background: #1fc56d!important;
      }
    }
    .sell-panel {
      width: 48%;
      margin-right: 3.1%;
      .active {
        background: #ef6e59!important;
      }
    }
    .input-text {
      .label {
        font-family: PingFangSC-Semibold;
        padding: 13px 0;
        font-size: 15px;
        color: #ebebeb;
        display: block;
        i {
          font-style: normal;
        }
      }
      input {
        width: 100%;
        height: 32px;
            text-indent: 30px;
        font-size: 14px;
        color: #ffffff;
      }
      span {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999ea4;
        padding-left: 8px;
      }
      div {
        margin-bottom: 19px;
        height: 32px;
        line-height: 32px;
      }
      
      .buy-num,
      .total-price {
        background: #3b4249;
        // display:flex;
        align-items: center;
        input{
          // padding:4px 0;
          // font-size:12px;
          // &:focus{
          //   border-color:transparent;
          // }
        }
      }
      .buy-rate {
        display: flex;
        margin: 0 -2% 19px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        button {
          width: 24%;
          margin: 0 2%;
          border: 1px dashed #999ea4;
          font-size: 12px;
          color: #999ea4;
          background: transparent;
          cursor: pointer;
              border-radius: 2px;
          &.active {
            color: #ffffff;
            border: none;
          }
        }
      }
      .transaction-btn {
        text-align: center;
        font-size: 14px;
        color: #ffffff;
        width: 100%;
        height: 32px;line-height: 32px;
        span {
          color: #fff;
          padding: 0;
        }
      }
      .buy-button {
        background: #1fc56d;border-radius: 2px;

      }
      .sell-button {
        background: #ef6e59;border-radius: 2px;
   
      }
    }
  }
}
</style>


