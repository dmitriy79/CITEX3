<template>
    <div class="buyOrSell-wrapper" ref="wrapper">
        <div class="title">
                   <div class="wrap-img">
                       <!-- <img src="../../assets/images/icon-line.png" alt="" > -->
                       <span class="ico-col" @click="showAll"></span>
                       <span class="ico-colsp" @click="showBuy"></span>
                       <span class="ico-cols" @click="showSell"></span>
                       <!-- <img src="../../assets/images/icon-line2.png" alt="" @click="showBuy">
                       <img src="../../assets/images/icon-line1.png" alt="" @click="showSell"> -->
                   </div>
                   <div class="concat-deep-wrap">
                       <!-- <div class="concat-deep" @click="showDeep">合并深度<span>{{currentDeep}}</span><i  :class="{active:isActive}"></i></div> -->
                       <transition name="fade">
                            <div class="dropdown" v-if="isShow">
                            <div @click="changeDeep">0.000001</div>
                            <div @click="changeDeep">0.00001</div>
                            <div @click="changeDeep">0.0001</div>
                            </div>
                        </transition>
                   </div>
            </div>
            <div class="top-title list">
              <div class="name">
                    <span></span>
                    <span>价格（ETH）</span>
                    <span>数量（IOST)</span>
                    <span>累计（IOST）</span>
                </div>
            </div>
        <div class="list buy-list" v-if="buyList" ref="buyList" :class="{active:isSelect}">
            
            <dl v-if="BidList">
                <dd  v-for="(item,index) in BidList.slice(0,11)" @click='$store.dispatch("trading/togglePrice", {currentPrice:item.price})'>
                    <span>买{{index+1}}</span>
                    <span>{{item.price}}</span>
                    <span>{{item.count}}</span>
                    <span>{{item.totalCount}}</span>
                </dd>
            </dl>
        </div>
        <div class="line" v-if="isShowLine"></div>
          <div class="list sell-list" v-if="sellList" ref="sellList" :class="{active:isSelect_}">
            <dl v-if="AskList">
                <dd  v-for="(item,index) in AskList.slice(0,11)">
                    <span>卖{{index+1}}</span>
                    <span>{{item.price}}</span>
                    <span>{{item.count}}</span>
                    <span>{{item.totalCount}}</span>
                </dd>
                
            </dl>
        </div>
        <div class="list-bottom">
           <span :class="{'ico-uos':isShow,'ico-downs':isShow1}"></span> <span class="left" :class="{red:isShow1,green:isShow}">0.1009447</span><span class="right" >&nbsp;≈&nbsp;<i>8000.12 </i>CNY</span><span></span>
           <router-link to="/BuyOrSellDetail" tag="span" class="more">更多</router-link>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
         websock: null,
      name: "BuySell",
      isShow: false,
      isActive: false,
      isSelect:false,
      isSelect_:false,
      sellList:true,
      buyList:true,
      currentDeep: 0.000001,
      isShow:false,
      isShow1:false,
      buyLists:[],
      sellLists:[],
      buyListsAll:[],
      sellListsAll:[],
      isShowLine:true
    };
  },
  
  mounted () {
    // console.log(this.$store.state.tradingList,'+++++(((((9999999h哈哈哈哈哈哈我是99999')
     this.token = localStorage.getItem("token")
     if(this.token!==null){
       this.$refs.wrapper.style.height='700px'
     }
  },
   computed: {
    ...mapState("trading", ["AskList","BidList"])
  },
  methods: {

    showDeep() {
      this.isShow = !this.isShow;
      this.isActive = !this.isActive;
    },
    changeDeep(e) {
      this.currentDeep = e.target.innerText;
      this.isShow = false;
    },
        showBuy(){
          console.log(this.buyLists,'999990000000')
  
        this.buyList=true
        this.sellList=false
        this.isSelect=true

        this.buyLists=this.buyListsAll.slice(0,23)
        this.isShow1=false
        this.isShowLine=false
    },
    showSell(){
     this.sellLists=this.sellListsAll.slice(0,23)
        this.buyList=false
        this.sellList=true
        this.isSelect_=true
        this.isShow1=true
        this.isShowLine=false
    },
    showAll(){
      this.isSelect=false
      this.isSelect_=false
       this.sellLists=this.sellListsAll.slice(0,11)
             this.buyLists=this.buyListsAll.slice(0,11)
        this.buyList=true
        this.sellList=true
        this.isShowLine=true

    },
  }
}
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
.more {
  float: right;
  padding-right: 10px;
  font-size: 13px;
  cursor: pointer;
}
.ico-uos {
  color: #1fc56d;
}
.ico-downs,
.red {
  color: #ef6e59 !important;
}
.line {
  border-bottom: 1px solid #3f4449;
  margin: 10px 14px;
}
.buyOrSell-wrapper {
  height: 695px;
  position: relative;
  background: #292f37;
  .title {
    height: 33px;
    background: #181f27;
    font-size: 12px;
    color: #e4e5e7;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .concat-deep-wrap {
      position: relative;
      .dropdown {
        position: absolute;
        top: 25px;
        left: 0;
        right: 0;
        z-index: 10;
        background: #1e2130;
        div {
          line-height: 25px;
          padding-left: 5px;
          cursor: pointer;
        }
      }
    }
    .concat-deep {
      padding-right: 35px;
      span {
        width: 60px !important;
        display: inline-block;
        padding-left: 6px;
      }
      i {
        position: absolute;
        top: 7px;
        right: 20px;
        width: 0;
        height: 0;
        border-width: 4px 4px 0;
        border-style: solid;
        border-color: #fff transparent transparent;
      }
      i.active {
        transform: rotate(180deg);
      }
    }
    .wrap-img {
      flex: 1;
      line-height: 33px;
      .ico-colsp {
        color: #1fc56d;
      }
      .ico-cols {
        color: #ef6e59;
      }
      span {
        font-size: 18px;
        margin-right: 7px;
        cursor: pointer;
        font-weight: bold;
      }
    }
    span {
      cursor: pointer;
    }
  }
  .list {
    margin-bottom: 25px;

    .name {
      color: #e4e5e7;
      span {
        height: 26px;
        line-height: 26px;
      }
    }
    dd,
    dt {
      display: flex;
      padding-left: 16px;
    }
    dd {
      &:hover{
      background: #181f27;
      cursor: pointer;
      }
      span {
        height: 26px;
        line-height: 26px;
      }
    }
    span {
      display: inline-block;
      font-size: 12px;
      align-items: center;
      &:first-child {
        width: 15% !important;
      }
      &:not(:first-child) {
        flex: 1;
      }
    }
  }
  .top-title {
    margin-bottom: 0;
    div {
      display: flex;
      padding-left: 16px;
    }
  }
  .buy-list {
    height: 40%;
    dd {
      span:first-child {
        color: #5dc176;
      }
    }
    &.active {
      height: 84%;
    }
  }
  .sell-list {
    height: 40%;
    dd {
      span:first-child {
        color: #ff7758;
      }
    }
    &.active {
      height: 84%;
    }
  }
  .list-bottom {
    background: #181f27;
    height: 33px;
    line-height: 33px;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 14px;
    .left {
      color: #1fc56d;
    }
    .right {
      color: #fcfcfc;
    }
  }
}
</style>

