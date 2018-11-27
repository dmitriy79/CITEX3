<template>
    <div class="transaction-price" ref="wrapper">
         <div class="list buy-list">
            <div class="title">
                    <span class="dealPrice">成交价格({{zoneName}})</span>
                    <span class="direction">方向</span>
                    <span>数量({{marketInfo.name}})</span>
                    <span>时间</span>
                </div>
            <dl v-if="historyList">
                <dd v-for="item in historyList" :class="'color' + item.bidAsk">
                    <span class="dealPrice">{{item.dealPrice}}</span>
                    <span class="direction">{{item.bidAsk == 1 ? '买' : '卖'}}</span>
                    <span>{{item.dealAmount}}</span>
                    <span>{{item.dealTime | time-format}}</span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      name: "TransactionPrice",
      dataList:[],
      websock: null,
      dealTime:''
    };
  },

  mounted () {
     this.token = localStorage.getItem("token")
     if(this.token!==null){
       this.$refs.wrapper.style.height='700px'
     }
  },

  methods: {
  },
  computed: {
    ...mapState('trading',['historyList']),
    ...mapState(["zoneName", 'marketInfo'])
  },
};
</script>
<style lang="less" scoped>
.transaction-price {
  background: #292f37;
     height: 695px;
  margin-left: 12px;

  span {
    flex: 1;
  }
  
  // span:last-child {
  //   padding-right: 26px;
  // }
  dl{    overflow-y: auto;
    max-height: 667px;
    &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
}
&::-webkit-scrollbar-thumb {
    width: 10px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.05);
    background-color:#3B4249
}
    }
  dd {
    display: flex;
    color: #9e9fa6;
    &.color2 {
      // 卖
      color: #ff7758;
    }
    &.color1 {
      // 买
      color: #5dc176;
    }
    span {
      font-size: 12px;
      height: 26px;
      line-height: 26px;
    }
    .dealPrice{flex: 1.5}
    .direction{flex: 0.5;margin-right: 20px}

    span:first-child {
      padding-left: 16px;
    }
    span:last-child{
      // text-align: right
    }
  }
  .title {
    height: 33px;
    background: #181f27;
    font-size: 12px;
    color: #e4e5e7;
    padding-left: 16px;
    display: flex;
    align-items: center;
    span {
      cursor: pointer;
      flex: 1;
    }
    span:last-child{
      text-align: right;
          padding-right: 40px;
    }
    .direction{flex: 0.5;margin-right: 20px}
    .dealPrice{flex: 1.5}
  }
}
</style>


