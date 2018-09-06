<template>
    <div class="transaction-price" ref="wrapper">
         <div class="list buy-list">
            <dl>
                <dt class="title">
                    <span>成交价格(ETH)	</span>
                    <span>数量(IOST)</span>
                    <span>时间</span>
                </dt>
                <dd>
                    <span>0.005469</span>
                    <span>192.898131</span>
                    <span>12:12:11</span>
                </dd>
                <dd>
                    <span>7342.62</span>
                    <span>192.898131</span>
                    <span>12:12:11</span>
                </dd>
                <dd>
                    <span>7342.62</span>
                    <span>192.898131</span>
                    <span>12:12:11</span>
                </dd>
                <dd>
                    <span>7342.62</span>
                    <span>192.898131</span>
                    <span>12:12:11</span>
                </dd>
            </dl>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "TransactionPrice"
    };
  },
  mounted () {
     this.token = localStorage.getItem("token")
     if(this.token!==null){
       this.$refs.wrapper.style.height='664px'
     }
    this.getDealOrders()
  },
  methods: {
    getDealOrders(){
      this.$api.getDealOrdersByTradeCoinPairId({id:6}).then(res=>{
       console.log(res,'我是')
    })
    }
    
  }
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


