<template>
    <div class="entrust-wrapper">
        <div class="tabs">
            <span :class="{active:currentTab==='current'}" @click="tab('current')">当前委托</span>
            <span :class="{active:currentTab==='history'}" @click="tab('history')">历史委托</span>
        </div>
        <div class="content">
            <div class="items" v-if="this.currentTab==='current'">
                <div class="condition">
                    <div class="left">
                        方向：<span v-for="(item,index) in conditionList" :class="{active:index==currentIndex}" @click="tabCondition(index)">{{item.name}}</span>
                    </div>
                    <div class="right "><span>交易对：</span>
                     <el-form ref="form" :model="form" label-width="80px" >
                     <el-form-item >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item><span>/</span>
                 
                            <!-- <span class="coin-type" @click="showCoinType">BTC<i class="ico-down"></i></span> -->
                           
                              <el-form-item>
                                  <el-select v-model="form.region" placeholder="BTC">
                                  <el-option label="BTC" value="BTC"></el-option>
                                  <el-option label="ETH" value="ETH"></el-option>
                                  </el-select>
                              </el-form-item>
                            </el-form>
                            
                        </div>
                </div>
                <div class="table-wrapper">
                     <el-table :data="tableData1" style="width: 100%" :row-class-name="setClassName">
                     <el-table-column prop="date" label="委托时间" width="160"></el-table-column>
                    <el-table-column prop="type" label="交易类型" ></el-table-column>
                    <el-table-column prop="group" label="交易对" ></el-table-column>
                    <el-table-column prop="direction" label="方向"></el-table-column>
                    <el-table-column prop="price" label="委托价格"></el-table-column>
                    <el-table-column prop="num" label="委托个数（个）"></el-table-column>
                    <el-table-column prop="duenum" label="已成交"></el-table-column>
                    <el-table-column prop="avarage" label="成交均价"></el-table-column>
                    <el-table-column prop="status" label="状态"></el-table-column>
                     <el-table-column  width="80" label="操作" >
                       
                       <template slot-scope="scope">
                           <span v-if="scope.row.status=='未成交'" class="txt-b">撤销</span>
                           <span v-if="scope.row.status=='部分成交'" class="txt-b" @click="details(scope.row)"> 详情</span>
                           
                        </template>
                        
                  </el-table-column>

        <el-table-column type="expand" >
      <template slot-scope="props">
          <dl>
              <dt>
                  <span>时间</span>
                  <span>价格</span>
                  <span>数量</span>
                  <span>成交额</span>
                  <span>剩余数量</span>
                  <span>手续费</span>
            </dt>
              <dd>
                  <span>2018-09-23 11:00:32</span>
                  <span>0.0000890</span>
                  <span>466.78</span>
                  <span>0.0415434</span>
                  <span>278.98</span>
                  <span>0.9647000YEE</span>
              </dd>
          </dl>
    
      </template>
    </el-table-column>
  </el-table>
                  
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
               
            </div>
            <div class="items" v-if="this.currentTab==='history'">
                 <div class="condition">
                    <div class="left">
                        方向：<span v-for="(item,index) in conditionList" :class="{active:index==currentIndex}" @click="tabCondition(index)">{{item.name}}</span>
                    </div>
                     <div class="right "><span>交易对：</span>
                     <el-form ref="form" :model="form" label-width="80px" >
                     <el-form-item >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item><span>/</span>
                 
                            <!-- <span class="coin-type" @click="showCoinType">BTC<i class="ico-down"></i></span> -->
                           
                              <el-form-item>
                                  <el-select v-model="form.region" placeholder="BTC">
                                  <el-option label="BTC" value="BTC"></el-option>
                                  <el-option label="ETH" value="ETH"></el-option>
                                  </el-select>
                              </el-form-item>
                            </el-form>
                            
                        </div>
                </div>
                                <div class="table-wrapper">
                     <el-table :data="tableData1" style="width: 100%" >
                     <el-table-column prop="date" label="委托时间" width="160"></el-table-column>
                    <el-table-column prop="type" label="交易类型" ></el-table-column>
                    <el-table-column prop="group" label="交易对" ></el-table-column>
                    <el-table-column prop="direction" label="方向"></el-table-column>
                    <el-table-column prop="price" label="委托价格"></el-table-column>
                    <el-table-column prop="num" label="委托个数（个）"></el-table-column>
                    <el-table-column prop="duenum" label="已成交"></el-table-column>
                    <el-table-column prop="avarage" label="成交均价"></el-table-column>
                    <el-table-column prop="status" label="状态"></el-table-column>
                     <el-table-column  width="80" label="操作" >
                       
                       <template slot-scope="scope">
                           <span v-if="scope.row.status=='未成交'" class="txt-b">撤销</span>
                           <span v-if="scope.row.status=='部分成交'" class="txt-b" @click="details(scope.row)"> 详情</span>
                           
                        </template>
                        
                  </el-table-column>

        <el-table-column type="expand" >
      <template slot-scope="props">
          <dl>
              <dt>
                  <span>时间</span>
                  <span>价格</span>
                  <span>数量</span>
                  <span>成交额</span>
   
                  <span>手续费</span>
            </dt>
              <dd>
                  <span>2018-09-23 11:00:32</span>
                  <span>0.0000890</span>
                  <span>466.78</span>
                  <span>0.0415434</span>

                  <span>0.9647000YEE</span>
              </dd>
          </dl>
    
      </template>
    </el-table-column>
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
      showDetails: false, //是否显示交易详情
     form: {
          name: '',
          region: '',
        },
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
    setClassName1({ row, index }) {
      // 通过自己的逻辑返回一个class或者空
      if (row.expand == true) {
        // return row.expand ? 'expand' : '';
        return "row-expand-cover";
      }
    },
    tab(item) {
      this.currentTab = item;
    },
    tabCondition(index) {
      this.currentIndex = index;
    },
    //是否显示交易对
    showCoinType() {
      this.showUl = !this.showUl;
    },
    //查看部分成交详情
    details(row) {
      this.showDetails = !this.showDetails;
    },
    setClassName({ row, index }) {
      if (row.status == "未成交") {
        return "row-expand-cover";
      }
    }
  }
};
</script>
<style>
.el-table__expanded-cell[class*="cell"] {
  padding: 0 10px !important;
}
.el-table__expanded-cell[class*="cell"] dt,
.el-table__expanded-cell[class*="cell"] dd {
  line-height: 40px;
  display: flex;
}
.el-table__expanded-cell[class*="cell"] dt span,
.el-table__expanded-cell[class*="cell"] dd span {
  flex: 1;
}
.el-table__row .el-table__expand-column .cell {
  width: 10px !important;
  margin-left: -40px !important;
}
.el-table__row.row-expand-cover .el-table__expand-column .cell {
  display: none !important;
  padding-left: 0 !important;
}
/* .el-table__row.row-expand-cover .el-table__expand-column .cell .el-icon-arrow-right:before{content: "\e901"!important;;}
.el-table__expand-icon>.el-icon{left:0!important} */
</style>

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
       .el-form{
        display: flex

       }
     .el-input{
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