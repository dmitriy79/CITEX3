<template>
    <div class="entrust-wrapper">
        <ul class="tab-nav">
            <li v-for="(item,index) of navs"  :class="{active:active==index}" @click="tabs(index)">{{item.name}}</li>
        </ul>
        <div class="entrust-list" >
            <dl class="entrust-panel" style="display:block" v-if="this.token">
                <dt>
                    <span>日期</span>
                    <span>类型</span>
                    <span>价格（BTC）</span>
                    <span>挂单（ADA）</span>
                    <span>操作</span>
                </dt>
                
                <dd> 
                    <span>1</span>
                    <span>3</span>
                    <span>4</span>
                    <span>3</span>
                    <span>5</span>
                </dd>
                <dd> 
                    <span>1</span>
                    <span>3</span>
                    <span>4</span>
                    <span>3</span>
                    <span>5</span>
                </dd>
                <dd> 
                    <span>1</span>
                    <span>3</span>
                    <span>4</span>
                    <span>3</span>
                    <span>5</span>
                </dd>
                <dd> 
                    <span>1</span>
                    <span>3</span>
                    <span>4</span>
                    <span>3</span>
                    <span>5</span>
                </dd>
            </dl>
            <dl class="entrust-panel" v-if="this.token">
                <dt>
                    <span>日期</span>
                    <span>类型</span>
                    <span>价格（BTC）</span>
                    <span>成交量（ADA）</span>
                </dt>
                <dd> 
                    <span>1</span>
                    <span>3</span>
                    <span>4</span>
                    <span>3</span>
                    <span>5</span>
                </dd>
                <dd> 
                    <span>1</span>
                    <span>3</span>
                    <span>4</span>
                    <span>3</span>
                    <span>5</span>
                </dd>
                <dd> 
                    <span>1</span>
                    <span>3</span>
                    <span>4</span>
                    <span>3</span>
                    <span>5</span>
                </dd>

            </dl>
            <dl class="entrust-panel" v-if="this.token">
                <dt>
                    <span>日期</span>
                    <span>类型</span>
                    <span>价格（BTC）</span>
                    <span>挂单（ADA）</span>
                    <span>操作</span>
                </dt>
                <dd>
                    <span>1</span>
                    <span>3</span>
                    <span>4</span>
                    <span>3</span>
                    <span>5</span>
                </dd>
               
            </dl>
           <div class="noData" v-if="!this.token">
                <span>暂无记录</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Entrust",
      active: 0,
      token:'',
      navs: [
        { id: 1, name: "当前委托" },
        { id: 2, name: "历史委托" },
        { id: 3, name: "成交历史" }
      ]
    };
  },
  methods: {
    tabs(index) {
      var tabCollection = document.querySelectorAll(".entrust-panel"),
        len = tabCollection.length;
      for (var i = 0; i < len; i++) {
        tabCollection[i].style.display = "none";
      }
      this.active = index;
      tabCollection[index].style.display = "block";
    },
    //获取当前历史委托
    getEntrust(){

    this.$api.listBidOrders({type:1,pageNum:1,pageSize:100,bidOrAsk:0}).then(res=>{
      console.log(res,'历史委托')
    })
    }
  },
  mounted() {
        this.token = localStorage.getItem("token")
    this.getEntrust()
  }
};
</script>

<style lang="less" scoped>
.entrust-wrapper {
  background: #292f37;
  .entrust-list {
    padding: 0 10px;
    position: relative;
        background: #292f37;    height: 293px;
    .noData {
      background: url("~@/assets/images/icon-nodata.png") no-repeat center
        center;
      position: absolute;
      text-align: center;
      top: 25px;
      right: 0;
      left: 0;
      bottom: 0;
      span {
        margin-top: 160px;
        display: block;
        font-size: 13px;
        color: #8d9398;
      }
    }
  }
}
.tab-nav {
  height: 30px;
  background: #181f27;
  display: flex;
  margin-bottom: 6px;
  li {
    line-height: 30px;
    padding: 0 13px;
    font-size: 12px;
    color: #999ea4;
    cursor: pointer;

    &.active {
      background: #292f37;
      color: #ffffff;
    }
  }
}
.entrust-panel {
  display: none;
  height: 294px;
  tr {
    width: 100%;
  }
  .header {
    opacity: 0.5;
    background: #181f27;
    th {
      font-size: 12px;
      color: #8d9398;
    }
  }
  dt {
    opacity: 0.5;
    background: #181f27;
    height: 25px;
    line-height: 25px;
    display:flex;
  }
  dd {
    height: 25px;
    line-height: 25px;
        display: flex;
  }
  dt,
  dd {
    span {
      width: 19.3%;
      display: inline-block;
      font-size: 12px;
      padding-left: 20px;
      color: #8d9398;
    }
  }
}
</style>

