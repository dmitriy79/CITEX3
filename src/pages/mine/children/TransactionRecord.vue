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
                    <div class="right "><span>交易对：</span>
                     <el-form ref="form" :model="form" label-width="80px" size="small">
                     <el-form-item >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item><span>/</span>
                              <el-form-item>
                                  <el-select v-model="form.region" placeholder="BTC">
                                  <el-option label="BTC" value="BTC"></el-option>
                                  <el-option label="ETH" value="ETH"></el-option>
                                  </el-select>
                              </el-form-item>
                            </el-form>
                            
                        </div>
                    </div>
                </div>
                <div class="table-wrapper">
                     <el-table :data="recordList" style="width: 100%"   height="750">
                        <el-table-column prop="dealTime" label="交易时间" width="165"></el-table-column>
                        <el-table-column prop="direction" label="方向" ></el-table-column>
                        <el-table-column prop="tradeCoinShortName" label="交易币种" ></el-table-column>
                        <el-table-column prop="dealPrice" label="单价"></el-table-column>
                        <el-table-column prop="dealAmount" label="数量（个）"></el-table-column>
                        <el-table-column prop="dealTotal" label="金额"></el-table-column>
                        
                        <el-table-column prop="askRateAmountString" label="手续费"></el-table-column>
                    </el-table>
                     <el-pagination v-show="total || total>0"	@current-change="Change" :current-page.sync="pageNum"
       		 :page-size="pageSize" :total="total"  background layout="total,prev, pager, next" >	</el-pagination>
                </div>
            </div>
        </div>
</template>
<script>
import date from "@/assets/js/date";
export default {
  data() {
    return {
      currentTab: "current",
      currentIndex: 0, //当前方向
      showUl: false,
      recordList: [],
      total:0,
      form: {
        name: "",
        region: ""
      },
      pageNum:1,
      pageSize:14,
      conditionList: [{ name: "全部" }, { name: "买" }, { name: "卖" }]
    };
  },
  created() {
    this.getUserTransactionRecord();
  },
  methods: {
    //获取交易记录
    getUserTransactionRecord() {
      this.$api.getUserTransactionRecord({pageNum:this.pageNum,pageSize:14,type:this.currentIndex}).then(res => {
        console.log(res, "交易记录9999");
        if (res.message == "success") {
          var content = res.datas.list;
          this.total=res.datas.total
          this.recordList = content;
        }
      });
    },
    //Change 切换分页
    Change(val){
      this.pageNum=val
      this.getUserTransactionRecord()
    },
    tab(item) {
      this.currentTab = item;
    },
    tabCondition(index) {
      this.currentIndex = index;
      this.getUserTransactionRecord()
      // this.$api.getUserTransactionRecord({ type: index }).then(res => {
      //   console.log(res, "交易记录9999");
      //   if (res.message == "success") {
      //     var content = res.datas;
      //     content.forEach(element => {
      //       element.dealTime = date.timestampToTimeAll(element.dealTime);
      //     });
      //     this.recordList = content;
      //   }
      // });
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
   .table-wrapper {
      padding: 0 10px 50px;

      div {
        padding: 0 10px 50px;
      }
    }
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
        .el-form {
          display: flex;
        }
        .el-input {
          width: 100% !important;
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
          // border: 1px solid #3b4148;
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

