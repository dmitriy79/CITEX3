<template>
    <div class="record-wrapper">
        <div class="tabs">
            <span class="active" >交易记录</span>
        </div>
        <div class="content">
            <div class="items" v-if="this.currentTab==='current'">
                <div class="condition">
                    <div class="left">
                        类型：<span v-for="(item,index) in conditionList" :class="{active:index==currentIndex}" @click="tabCondition(index)">{{item.name}}</span>
                    </div>
                    <div class="right">交易对：<input type="text">&nbsp;/&nbsp;
                        <div>
                            <span class="coin-type" @click="showCoinType">BTC<i class="ico-down"></i></span>
                            <ul v-if="showUl">
                                <li>BTC</li>
                                <li>ETH</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="table-wrapper">
                     <el-table :data="tableData1" style="width: 100%" >
                        <el-table-column prop="date" label="交易时间" width="160"></el-table-column>
                        <el-table-column prop="type" label="方向" ></el-table-column>
                        <el-table-column prop="type" label="交易币种" ></el-table-column>
                        <el-table-column prop="price" label="单价"></el-table-column>
                        <el-table-column prop="price" label="数量（个）"></el-table-column>
                        <el-table-column prop="num" label="金额"></el-table-column>
                        <el-table-column prop="duenum" label="手续费单位"></el-table-column>
                        <el-table-column prop="avarage" label="手续费"></el-table-column>
                    </el-table>
                  
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
               
            </div>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentTab: "current",
      currentIndex: 0, //当前方向
      showUl: false,

      conditionList: [{ name: "全部" }, { name: "买" }, { name: "卖" }],
      tableData1: [
        {
          date: "2016-05-02 11:00:09",
          type: "币币交易",
          group: "YEE/BTC",
          direction: "买入",
          price: "0.00000890",
          num: "466.79",
          duenum: "466.79",
          avarage: "0.00000890",
          status: "未成交"
        },
        {
          date: "2016-05-02 11:00:09",
          type: "币币交易",
          group: "YEE/BTC",
          direction: "卖出",
          price: "0.00000890",
          num: "466.79",
          duenum: "466.79",
          avarage: "0.00000890",
          status: "部分成交"
        }
      ]
    };
  },
  methods: {
    tab(item) {
      this.currentTab = item;
    },
    tabCondition(index) {
      this.currentIndex = index;
    },
    //是否显示交易对
    showCoinType() {
      this.showUl = !this.showUl;
    }
  }
};
</script>


<style lang="less" scoped>
.tabs {
  height: 40px;
  margin-bottom: 23px;
  color: #fff;
  background: #1b222a;
  cursor: pointer;
  line-height: 40px;
  display: flex;
  span {
    display: block;
    text-align: center;
    font-size: 15px;
    width: 144px;
  }
  span.active {
    background: #292f37;
  }
}
.content {
  .items {
    .condition {
      padding: 0 30px;
      font-size: 14px;
      color: #fff;
      display: flex;
      .left {
        span {
          padding: 3px 4px;
          border-radius: 2px;
          cursor: pointer;
          margin: 0 2px;
          &.active {
            background: #2286ff;
          }
        }
      }
      .right {
        margin-left: 30px;
        display: flex;
        ul {
          li {
            line-height: 24px;
            padding-left: 5px;
          }
        }
        .coin-type {
          position: relative;
          cursor: pointer;

          border: 1px solid #3b4148;
          width: 70px;
          display: inline-block;
          height: 26px;
          padding: 0 0 0 5px;
          line-height: 26px;
          i {
            position: absolute;
            right: 5px;
            top: 5px;
          }
        }
        input {
          width: 80px;
          height: 26px;
          line-height: 26px;
          display: inline-block;
          border: 1px solid #3b4148;
        }
      }
    }

    .table-wrapper {
      padding: 0 10px 50px;
      div {
        padding: 0 10px 50px;
      }
    }
  }
}
</style>

