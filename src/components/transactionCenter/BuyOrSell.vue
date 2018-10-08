<template>
  <div class="buyOrSell-wrapper" ref="wrapper">
    <div class="title">
       <div class="wrap-img">
         <span class="ico-col" @click="changeType(0)"></span>
         <span class="ico-colsp" @click="changeType(1)"></span>
         <span class="ico-cols" @click="changeType(2)"></span>
       </div>
    </div>
    <div class="top-title list">
      <div class="name">
        <span></span>
        <span>价格（{{zoneName}}）</span>
        <span>数量（{{marketInfo.name}})</span>
        <span>累计（{{marketInfo.name}}）</span>
      </div>
    </div>
    <div v-if="showType != 1" class="list sell-list" :class="{ 'active reverse': showType == 2}">
      <dl v-if="AskList">
        <dd v-for="(item, index) in AskList.slice(0, maxNum)" @click='togglePrice(item.price)'>
          <span>卖{{ index + 1 }}</span>
          <span>{{ item.price }}</span>
          <span>{{ item.count }}</span>
          <span>{{ item.totalCount }}</span>
        </dd>
      </dl>
    </div>
    <div v-if="showType == 0" class="line"></div>
    <div v-if="showType != 2" class="list buy-list" :class="{ active: showType == 1}">
      <dl v-if="BidList">
        <dd v-for="(item, index) in BidList.slice(0, maxNum)" @click='togglePrice(item.price)'>
          <span>买{{ index + 1 }}</span>
          <span>{{ item.price }}</span>
          <span>{{ item.count }}</span>
          <span>{{ item.totalCount }}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      showType: 0, // 默认展示全部, 1: 买单，2: 卖单
      maxNum: 11,
    };
  },
  
  mounted () {
     this.token = localStorage.getItem('token');
     if(this.token !== null){
       this.$refs.wrapper.style.height = '700px'
     }
  },
  watch: {
    showType() {
      this.maxNum = this.showType == 0 ? 11 : 50;
    }
  },
  computed: {
    ...mapState('trading', ['AskList', 'BidList']),
    ...mapState(['zoneName', 'marketInfo'])
  },
  methods: {
    togglePrice(currentPrice) {
      this.$store.dispatch('trading/togglePrice', { currentPrice })
    },
    changeType(showType) {
      this.showType = showType;
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
    height: 42%;
    overflow-y: auto;
    dd {
      span:first-child {
        color: #5dc176;
      }
    }
    &.active {
      height: 90%;
    }
  }
  .sell-list {
    height: 42%;
    overflow-y: auto;
    &.reverse {
      dl {
        flex-direction: column;
      }
    }
    dl {
      display: flex;
      flex-direction: column-reverse;
    }
    dd {
      span:first-child {
        color: #ff7758;
      }
    }
    &.active {
      height: 90%;
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

