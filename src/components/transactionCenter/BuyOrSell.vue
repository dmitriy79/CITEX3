<template>
    <div class="buyOrSell-wrapper">
        <div class="title">
                   <div class="wrap-img">
                       <img src="../../assets/images/icon-line.png" alt="" @click="showAll">
                       <img src="../../assets/images/icon-line2.png" alt="" @click="showBuy">
                       <img src="../../assets/images/icon-line1.png" alt="" @click="showSell">
                   </div>
                   <div class="concat-deep-wrap">
                       <div class="concat-deep" @click="showDeep">合并深度<span>{{currentDeep}}</span><i  :class="{active:isActive}"></i></div>
                       <transition name="fade">
                            <div class="dropdown" v-if="isShow">
                            <div @click="changeDeep">0.000001</div>
                            <div @click="changeDeep">0.00001</div>
                            <div @click="changeDeep">0.0001</div>
                            </div>
                        </transition>
                   </div>
            </div>
        <div class="list buy-list" v-if="buyList">
            
            <dl>
                
                <dt class="name">
                    <span></span>
                    <span>价格（ETH）</span>
                    <span>数量（IOST)</span>
                    <span>累计（IOST）</span>
                </dt>
                <dd>
                    <span>买1</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>买2</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>买3</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>买4</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
            </dl>
        </div>
          <div class="list sell-list" v-if="sellList">
            <dl>
                <dd>
                    <span>卖1</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>卖2</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>卖3</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
            </dl>
        </div>
        <div class="list-bottom">
            <span class="left">0.1009447</span><span class="right">&nbsp;≈&nbsp;<i>8000.12 </i>CNY</span>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "BuySell",
      isShow: false,
      isActive: false,
      sellList:true,
      buyList:true,
      currentDeep: 0.000001
    };
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
    showAll(){
        this.buyList=true
        this.sellList=true
    },
    showBuy(){
        this.buyList=true
        this.sellList=false
    },
    showSell(){
        this.buyList=false
        this.sellList=true
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
.buyOrSell-wrapper {
  height: 664px;
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
        img {
          margin-right: 7px;
          cursor: pointer;
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
      span{
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
  .buy-list {
    dd {
      span:first-child {
        color: #5dc176;
      }
    }
  }
  .sell-list {
    dd {
      span:first-child {
        color: #ff7758;
      }
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

