<template>
    <div class="entrust-wrapper">
        <div class="tab-nav">
          <ul>
              <li v-for="(item,index) of navs"  :class="{active:active==index}" @click="toggleOrder(index)">{{item.name}}</li>
          </ul>
          <a class="more" href="/#/mine/entrust">更多委托</a>
        </div>
        <div class="entrust-list" >
            <dl class="entrust-panel" style="display:block" v-if="this.token">
                <table>
                  <tr>
                      <th>时间</th>
                      <th>方向</th>
                      <th>买单状态</th>
                      <th>价格（{{zoneName}}）</th>
                      <th>数量（{{marketInfo.name}}）</th>
                      <th>未成交数量</th>
                      <th v-if="this.active==0">操作</th>
                    </tr>
                    <tr v-for='item of orderData.list'>
                      <td>{{item.updateTime | dateTime-format }}</td>
                      <!-- <td>{{isBuy(item.userId) ? '买入' : '卖出'}}</td> -->
                      <td>{{item.bidOrSell==0?'卖':'买'}}</td>
                      <td>{{status[item.matchStatus]}}</td>
                      <td>{{item.price}}</td>
                      <td>{{item.amount}}</td>
                      <td>{{item.leftAmount}}</td>
                      <td v-if="active==0">
                        <span class="button-min" @click='cancelOrder(item.id, item.bidOrSell)'>撤单</span>
                      </td>
                    </tr>
                </table>
                
            </dl>
           <div class="noData" v-if="!this.token">
                <span>暂无记录</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
export default {
  data() {
    return {
      name: "Entrust",
      active: 0,
      token:'',
      navs: [
        { id: 1, name: "当前委托" },
        { id: 2, name: "历史委托" },
        // { id: 3, name: "成交历史" }
      ],
      status:[
        "未成交",
        "部分成交",
        "完全成交",
        "用户撤单",
        "系统撤单",
      ]
    };
  },
  methods: {
    toggleOrder(index){
      this.active = index;
      this.$store.dispatch('trading/toggleOrder', {
        type: index + 1,
        size: index == 0 ? 50 : 10
      });
    },
    cancelOrder(id, direction) {
      if (direction == 1) {
        this.$api.cancelBuy({ bidOrderId: id }, 'POST').then(res => {
          if (res.message == '成功') {
            this.$message({
              message: '撤销成功',
              type: 'success'
            });
            this.toggleOrder(this.active);
          } else {
            this.$message({
              message: res.message,
              type: 'error'
            });
          }
        });
      } else {
        this.$api.cancelSell({askOrderId:id},'POST').then(res=>{
          if (res.message == '成功') {
            this.$message({
              message: '撤销成功',
              type: 'success'
            });
            this.toggleOrder(this.active);
          } else {
            this.$message({
              message: res.message,
              type: 'error'
            });
          }
        })
      }
    }
  },
  created(){
    this.token = localStorage.getItem("token")
  },
  computed:{
    // ...mapState(['token']),
    ...mapState('trading',['orderData']),
    ...mapState(["zoneName", 'marketInfo'])
  }
}
</script>

<style lang="less" scoped>
table{
  tr{
    th{
      text-align:left;
      font-size:12px;
      background:lighten(#181f27,2%);
      padding:5px 8px;
    }
  }
  td{
    font-size:12px;
    padding:8px;
    border-bottom:1px solid rgba(255, 255, 255, .1);
  }
}
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
  ul {
    display: flex;
    flex: 1;
  }
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
  .more {
    font-size: 12px;
    line-height: 30px;
    margin-right: 10px;
    &:hover {
      color: #fff;
    }
  }
}
.entrust-panel {
  display: none;
  height: 294px;
  overflow-y: auto;
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
  .button-min {
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
}
</style>

