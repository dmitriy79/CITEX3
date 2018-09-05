<template>
    <div class="coin-tab">
        <div class="search-wrap">
              <input type="text" placeholder="查询" class="search"><div class="ico-search"></div>
              <span class="change" :class="{active:isShow}" @click="changeType"><b class="ico-changecny"></b><i>CNY</i></span>
        </div>
        <ul class="nav-bar">
            <li v-for="(item,index) of navs" :class="{active:active==index}" @click="tabs(index)"><span class="ico-star-fill" v-if="index==3"></span>{{item.name}}</li>
          
        </ul>
        <div class="coin-list-wrap">
            <div class="title">
                <span class="coin-type">币种</span>
                <span class="price">价格<b><i class="up" @click="priceUp" :class="{active:isActive}"></i><i class="down" @click="priceDown"  :class="{active:isActive}"></i></b></span>
                <span class="rate">涨幅<b><i class="up" @click="rateUp" :class="{active:isActive1}"></i><i class="down" @click="rateDown"  :class="{active:isActive1}"></i></b></span>
                <span class="num">24h交易量<b><i class="up" @click="numUp" :class="{active:isActive2}"></i><i class="down" @click="numDown"  :class="{active:isActive2}"></i></b></span>
            </div>
            <div class="coin-list" v-for="(item,index) of coinList" v-show=" index == num">
                <span class="coin-type">{{item.type}}</span>
                <span class="price">{{item.price}}</span>
                <span class="rate" >{{item.rate}}</span>
                <span class="num">{{item.num}}</span>
                <span class="ico-star" @click="checkCoin" v-if="!isSelect"></span>
                <span class="ico-star-fill" @click="checkCoin" v-if="isSelect">
             

                </span>
            </div>
        </div>
        <div class="tab-content">

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      num: 0,
      isActive: false,
      isActive1: false,
      isActive2: false,
      isSelect: false,
      isShow:false,
      navs: [
        { id: 1, name: "ETH交易" },
        { id: 2, name: "IT交易" },
        { id: 3, name: "BTC交易" },
        { id: 4, name: "自选" }
      ],
      coinList: [
        { id: 1, type: "TRUE", price: "400.12", rate: "-10%", num: 90012112 },
        { id: 2, type: "EOS", price: "123.12", rate: "+59%", num: 9002 },
        { id: 3, type: "BCH", price: "5000.12", rate: "-19%", num: 90202 },
        { id: 4, type: "BTC", price: "5000.12", rate: "-19%", num: 90202 }
      ]
    };
  },
  methods: {
    changeType(){
 
      this.isShow=!this.isShow
    },
    tabs(index) {
      this.num = index;
      this.active = index;
    },
    checkCoin() {
      this.isSelect = !this.isSelect;
    },
    priceUp() {
      this.isActive = true;
    },
    priceDown() {
      this.isActive = false;
    },
    rateUp() {
      this.isActive1 = true;
    },
    rateDown() {
      this.isActive1 = false;
    },
    numUp() {
      this.isActive2 = true;
    },
    numDown() {
      this.isActive2 = false;
    }
  }
};
</script>


<style lang="less" scoped>
.coin-tab {
  .ico-star-fill{font-size:17px;}
  background: #161c24;
  margin: 0 9px 0 12px;
  .search-wrap {   position: relative;
    input {
      width: 67.5%;
      background: #3b4249;
      border-radius: 2px;
      padding: 6px 0 6px 7px;
      margin: 21px 0 21px 13px;
      font-size: 13px;
      color: #b6b7b7;
      text-indent: 30px;
      &:focus{
         border-color:#1fc56d;
      }
    }
    i {
      padding-left: 15%;
    }
   .active{color:#1fc56d }
    .ico-search{
      position: absolute;
      left: 23px;
      top: 30px;
          font-size: 14px;
    }
    .change{margin-left: 5px;cursor: pointer;}
    .ico-changecny {
      font-size: 15px;
      cursor: pointer;
    }
    span {
      background: #292f37;
      border-radius: 2px;
      padding: 5px 10px;
      font-family: PingFangSC-Semibold;
      font-size: 13px;
      width: 24%;
      display: inline-block;
    }
  }
  .coin-list-wrap {
    background: #292f37;
    height: 561px;
    padding: 0 16px 0 14px;
    span {
      &:first-child {
        padding-left: 1%;
      }
    }
    .title {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      color: #9e9fa6;
      border-bottom: 1px solid #3f4449;
      display: flex;
      span {
        position: relative;
        display: inline-block;
        cursor: pointer;

        b {
          height: 14px;
          width: 14px;
          display: inline-block;
          margin-left: 10px;
          position: relative;
          i {
            position: absolute;
          }
        }
      }
      .up {
        &::before {
          position: absolute;
          top: 4px;
          right: -10px;
          width: 0;
          height: 0;
          border-width: 0 4px 4px;
          border-style: solid;
          border-color: transparent transparent #696d73; /*透明 透明  灰*/
          content: " ";
        }
      }

      .down {
        &::after {
          content: " ";
          position: absolute;
          top: 10px;
          right: -10px;
          width: 0;
          height: 0;
          border-width: 4px 4px 0;
          border-style: solid;
          border-color: #fff transparent transparent;
        }
      }
      .down.active {
        &::after {
          content: " ";
          position: absolute;
          top: 10px;
          right: -10px;
          width: 0;
          height: 0;
          border-width: 4px 4px 0;
          border-style: solid;
          border-color: #696d73 transparent transparent;
        }
      }
      .up.active {
        &::before {
          position: absolute;
          top: 4px;
          right: -10px;
          width: 0;
          height: 0;
          border-width: 0 4px 4px;
          border-style: solid;
          border-color: transparent transparent #fff; /*透明 透明  灰*/
          content: " ";
        }
      }
    }
    .coin-type {
      width: 15.7%;
      margin-right: 5.3%;
    }
    .price {
      width: 16.7%;
      margin-right: 7.4%;
    }
    .rate {
      // width: 8.9%;
      margin-right: 8.4%;
    }
    .num {
      width: 28%;
      text-align: right;
    }
    .coin-list {
      color: #e7e7e7;
      font-size: 0;
      height: 35px;
      border-bottom: 1px solid #3f4449;
      line-height: 35px;
      span {
        display: inline-block;
        font-size: 11px;
      }
      .ico-star,.ico-star-fill {
       font-size: 16px;
        margin-left: 2%;
        cursor: pointer;
      }
      .select.icon-save {
        background: url("~@/assets/images/star.png") no-repeat center center;
      }
      .num {
        padding-right: 7px;
      }
    }
    .coin-list:hover {
      background: #181f27;
      cursor: pointer;
    }
  }
  .nav-bar {
    overflow: hidden;
    li {
      float: left;
      font-family: PingFangTC-Semibold;
      font-size: 12px;
      color: #999EA4;;
      padding: 6.5px 5%;
      cursor: pointer;
      height:30px;
      &.active {
        background: #292f37;
           color: #1fc56d;
      }
      &:last-child{float:right}
    }
    .fr {
      float: right;
      font-size: 0;
      height: 30px;
      .check {
        font-size: 12px;
        margin-left: 3.7px;
        color: #9E9FA6;
      }
      .ico-star-fill{font-size: 15px;color:#65696e}
    }
  }
}
</style>

<style>
@media only screen and (max-width: 1920px) and (min-width: 1400px) {
  .transaction-wrap .transaction-top div.left {
    width: 72%;
  }
  #app .transaction-wrap .transaction-top .right {
    width: 27%;
  }
}
</style>