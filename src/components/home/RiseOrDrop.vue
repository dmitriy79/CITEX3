<template>
  <div class="rise">
    <div class="container">
      <div class="rise-list" >
        <div class="title">
          <div>涨幅排行榜</div>
        </div>
        <ul>
      <li v-for="(item,index) in dealOrder.up" v-if="index<10"  @click="jumpToTrade(item)"><i class="ranking" :class="{active:index<=2}">{{index+1}}</i>
            <div class="type">{{item.name}}/{{item.zoneCoinName}}</div>
            <div class="rate green">+{{item.increase_24H | decimal(2)}}%<i class="ico-ups"></i></div>
          </li>
        </ul>
      </div>
      <div class="rise-list">
        <div class="title">
          <div>跌幅排行榜</div>
        </div>
        <ul>
           <li v-for="(item,index) in dealOrder.fall" v-if="index < 10" @click="jumpToTrade(item)"><i class="ranking" :class="{active:index<=2}">{{index+1}}</i>
            <div class="type" >{{item.name}}/{{item.zoneCoinName}}</div>
            <div class="rate red">-{{item.increase_24H | decimal(2)}}%<i class="ico-downs"></i></div>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "RiseOrDrop",
      topList: [],
      websock: null,
      lastList: []
    };
  },
  props: {
    dealOrder: Object
  },
  mounted() {
  },
  methods: {
    jumpToTrade(item) {
      this.$router.push(`/transaction/${item.name}_${item.zoneCoinName}`)
    }
  }
}
</script>
<style lang="less" scoped>
.rise {
  display: flex;
  margin-top: 18px;
  .container {
    display: flex;
    justify-content: space-between;
  }
  &-list {
    width: 48%;
  }
  .ranking {
    &.active {
      color: #fff;
      background: #ff6442;
    }
    background: #fff;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 90px;
    text-align: center;
    margin-right: 8px;
    border: none;
    color: #292f37;
  }
  &-list {
    width: 50%;
    background: #292f37;
    &:first-child {
      margin-right: 20px;
    }
    .title {
      background: #1f252d;
      height: 40px;
      line-height: 40px;
      div {
        width: 120px;
        text-align: center;
        display: block;
        color: #fff;
        font-size: 14px;
        background: #292f37;
      }
    }
    ul {
      overflow: hidden;
      padding: 10px 5px 11px 15px;

      li {
         &:hover{
            background: #1f252d;
      }
        height: 50px;
        width: 48.1%;
        float: left;
        margin: 0 10px 4px 0;
        display: flex;
        align-items: center;
        padding: 0 16px 0 9px;
        font-family: "PingFangSC-Semibold";
        font-size: 14px;
        background: #31373e;
        display: flex;
        align-items: center;
        cursor: pointer;
        .type {
          color: #d4d5d7;
          flex: 1;
        }
        .rate {
          color: #1fc56d;
        }
        .red {
          color: #ff6442;
        }
      }
    }
  }
  .list-drop {
    ul {
      li {
        .rate {
          color: #ef6e59;
        }
      }
    }
  }
}
</style>
<style>
@media only screen and (max-width: 1366px) and (min-width: 1300px) {
  .riseOrDrop .list ul li {
    width: 48% !important;
  }
}

@media only screen and (max-width: 1300px) {
  .riseOrDrop .list ul li {
    width: 47.9% !important;
  }
}
</style>
