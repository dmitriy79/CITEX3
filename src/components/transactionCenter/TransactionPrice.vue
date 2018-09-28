<template>
    <div class="transaction-price" ref="wrapper">
         <div class="list buy-list">
            <div class="title">
                    <span>成交价格(ETH)	</span>
                    <span>数量(IOST)</span>
                    <span>时间</span>
                </div>
            <dl v-if="historyList">
                <dd v-for="item in historyList">
                    <span>{{item.dealPrice}}</span>
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
    ...mapState("trading", ["historyList"]),
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
  span:last-child {
    padding-right: 26px;
  }
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
    span {
      font-size: 12px;
      color: #9e9fa6;
      height: 26px;
      line-height: 26px;
    }
    span:first-child {
      padding-left: 16px;
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
  }
}
</style>


