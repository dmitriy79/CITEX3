<template>
    <div class="transaction-price" ref="wrapper">
         <div class="list buy-list">
            <div class="title">
                    <span>成交价格(ETH)	</span>
                    <span>数量(IOST)</span>
                    <span>时间</span>
                </div>
            <dl>
                <dd v-for="item in dataList">
                    <span>{{item.dealPrice}}</span>
                    <span>{{item.dealAmount}}</span>
                    <span>{{item.dealTime}}</span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
import date from '../../assets/js/date'
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
    this.getDealOrders()
  },
  methods: {
    getDealOrders(){
      /*this.$api.getDealOrdersByTradeCoinPairId({id:2}).then(res=>{
       console.log(res.data.datas.dealTime, date.timestampToTime(1536305419000),'我是实时交易')
       date.timestampToTime(1536305419000)
       var content=res.data.datas
       content.forEach(element => {
         this.dealTime=date.timestampToTime_(element.dealTime) 
       });
       this.dataList=content
    })*/
     let ws = new WebSocket('ws://47.94.213.6:13080/websocketSSCJ?pairId=10')
         ws.onopen = () => {
            // Web Socket 已连接上，使用 send() 方法发送数据
              ws.send('Holle')
              console.log('数据发送中...')
          }
          ws.onmessage = evt => {
             var content=JSON.parse(evt.data)
             content.forEach(element => {
              element.dealTime=date.timestampToTime_(JSON.parse(element.dealTime))
              // console.log(element.dealTime,'99999999')
             })
            //  console.log(content,'我是content')
             this.dataList=content
             // console.log(this.dataList,'数据已接收...')
          }
          ws.onclose = function () {
            // 关闭 websocket
            console.log('连接已关闭...')
          }
           // 组件销毁时调用，中断websocket链接
          this.over = () => {
            ws.close()
          }
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


