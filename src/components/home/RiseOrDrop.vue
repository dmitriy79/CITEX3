<template>
  <div class="rise">
    <div class="container">
      <div class="rise-list">
        <div class="title">
          <div>涨幅排行榜</div>
        </div>
        <ul>
          <li v-for="(item,index) in topList"><i class="ranking" :class="{active:index<=2}">{{index+1}}</i>
            <div class="type">{{item.name}}</div>
            <div class="rate">{{item.rate}}%<i class="ico-uos"></i></div>
          </li>
        </ul>
      </div>
      <div class="rise-list">
        <div class="title">
          <div>跌幅排行榜</div>
        </div>
        <ul>
           <li v-for="(item,index) in lastList"><i class="ranking" :class="{active:index<=2}">{{index+1}}</i>
            <div class="type">{{item.name}}</div>
            <div class="rate red">{{item.rate}}%<i class="ico-downs"></i></div>
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
      name: 'RiseOrDrop',
      topList:[],
       websock: null,
      lastList:[]
    }
  },
  mounted () {
    this.getRankingList()
    // this.getDealOrderUpDownTen()
    //  window.InitSetInterval = setInterval(this.getDealOrderUpDownTen,2000)
  } ,
  destroyed(){
   // clearInterval(window.InitSetInterval)
  },
 
  methods: {
   getDealOrderUpDownTen(){
      this.$api.getDealOrderUpDownTen().then(res=>{
        if(res.data.message="success"){
           this.topList=res.data.datas.top
        this.lastList=res.data.datas.last
        }
        console.log(res,'涨跌幅排行榜')
       
      })
    },
    getRankingList(){
      let ws = new WebSocket('ws://47.93.194.146:13080/websocketRankingList')
     var _this = this;
     console.log(ws.readyState,'99999000000+++++++')
         ws.onopen = () => {
            // Web Socket 已连接上，使用 send() 方法发送数据
              ws.send('Holle')
              console.log('数据发送中...')
          }
          ws.onmessage = evt => {
             clearInterval(window.InitSetInterval)
             var content=JSON.parse(evt.data)
            
             console.log(content,'我是content')
             
              console.log('数据已接收...')
          }
          ws.onclose = function () {
            // 关闭 websocket
            console.log('连接已关闭...')
            
            window.InitSetInterval=_this.getDealOrderUpDownTen()
            setInterval(_this.getDealOrderUpDownTen,20000)
          }
           // 组件销毁时调用，中断websocket链接
          this.over = () => {
            ws.close()
          }
      
    }
   
  }
}

</script>
<style lang="less" scoped>
.rise {
  display: flex;
  margin-top: 33px;
  .container {
    display: flex;
    justify-content: space-between;
  }
  &-list {
    width: 48%;
  }
  .ranking {
    &.active{
      color: #2286ff
    }
    background: #d4d5d7;
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 2px;
    text-align: center;
    margin-right: 4px;
  }
  &-list {
    width: 50%;
    background: #292F37;
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
        ;
        color: #fff;
        font-size: 14px;
        background: #292F37;
      }
    }
    ul {
      overflow: hidden;
      padding: 10px 5px 11px 15px;

      li {
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
        .type {
          color: #d4d5d7;
          flex: 1;
        }
        .rate {
          color: #1FC56D;
        }
        .red{
              color: #FF6442;
        }
      }
    }
  }
  .list-drop {
    ul {
      li {
        .rate {
          color: #EF6E59;
        }
      }
    }
  }
}

</style>
<style>
@media only screen and (max-width: 1366px) and (min-width: 1300px) {
  .riseOrDrop .list ul li {
    width: 48%!important
  }
}

@media only screen and (max-width: 1300px) {
  .riseOrDrop .list ul li {
    width: 47.9%!important
  }
}

</style>
