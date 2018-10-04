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
                        方向：<span v-for="(item,index) in conditionList" :class="{active:index==bidOrAsk}" @click="tabCondition(index)">{{item.name}}</span>
                    </div>
                    <div class="right "><span>交易对：</span>
                     <el-form ref="form" :model="form" label-width="80px" size="small">
                     <el-form-item >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item><span class="devide">/</span>
                 
                            <!-- <span class="coin-type" @click="showCoinType">BTC<i class="ico-down"></i></span> -->
                         
                              <el-form-item>
                                  <el-select v-model="form.region" placeholder="ETH" @change="selectCoin">
                             <el-option v-for="item in coinList" :label="item.zoneName"  :value="item.tradeCoinId" 
     :key="item.tradeCoinId"></el-option> 
                                  </el-select>
                              </el-form-item>
                            </el-form>
                            <div class="button button-min search" @click="searchCoin">搜索</div>
                        </div>
                </div>
                <div class="table-wrapper">
                     <el-table :data="currentEntrust" style="width: 100%" :row-class-name="setClassName">
                     <el-table-column  label="委托时间" width="170">
                       <template slot-scope="scope">
                           <span>{{scope.row.createTime | dateTime-format}}</span>
                        </template>

                     </el-table-column>
                    <!-- <el-table-column prop="type" label="交易类型" ></el-table-column> -->
                    <el-table-column  label="交易对" >
                       <template slot-scope="scope">
                           <span>{{scope.row.tradeCoinNameShort}}/{{scope.row.unitCoinNameShort}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="bidOrSell" label="方向">
                         <template slot-scope="scope">
                           <span>{{scope.row.bidOrSell==1?'买':'卖'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" label="委托价格"></el-table-column>
                    <el-table-column prop="amount" label="委托个数（个）" width="160"></el-table-column>
                    <el-table-column prop="dealAmount" label="已成交">
                       <template slot-scope="scope">
                           <span>{{scope.row.amount-scope.row.leftAmount}}</span>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column prop="avarage" label="成交均价"></el-table-column> -->
                    <el-table-column label="状态" prop="matchStatus">
                      <!-- 未成交 部分成交 完全成交 用户撤单 系统撤单 -->
                        <template slot-scope="scope">
                             <span >{{status[scope.row.matchStatus]}}</span>
                        </template>
                    </el-table-column>
                     <el-table-column  width="80" label="操作" >
   
                       <template slot-scope="scope">
                           <span v-if="scope.row.matchStatus==0||scope.row.matchStatus==1" class="txt-b" @click="cancel(scope.row.id,scope.row.bidOrSell)">撤销</span>
                           <span v-if="scope.row.matchStatus==2||scope.row.matchStatus==3||scope.row.matchStatus==4" class="txt-b" @click="details(scope.row)"> 详情</span>
                           
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
                  <span>{{props.row.createTime|dateTime-format}}</span>
                  <span>{{props.row.price}}</span>
                  <span>{{props.row.amount}}</span>
                  <span>{{(props.row.amount-props.row.leftAmount)*props.row.price}}</span>
                  <span>{{props.row.leftAmount}}</span>
                  <span>{{(props.row.amount-props.row.leftAmount)*props.row.rate+''+props.row.tradeCoinNameShort}}</span>
              </dd>
          </dl>
    
      </template>
    </el-table-column>
  </el-table>
                <el-pagination v-show="currentTotal || currentTotal>0"	@current-change="Changepage" :current-page.sync="pageIndex"
       		 :page-size="pageSize" :total="currentTotal"  background layout="total,prev, pager, next" >	</el-pagination>
                </div>
               
            </div>
            <div class="items" v-if="this.currentTab==='history'">
                         <div class="condition">
                    <div class="left">
                        方向：<span v-for="(item,index) in conditionList" :class="{active:index==bidOrAsk_}" @click="tabCondition_(index)">{{item.name}}</span>
                    </div>
                    <div class="right "><span>交易对：</span>
                     <el-form ref="form" :model="form" label-width="80px" size="small">
                     <el-form-item >
                        <el-input v-model="form.name"></el-input>
                    </el-form-item><span class="devide">/</span>
                 
                            <!-- <span class="coin-type" @click="showCoinType">BTC<i class="ico-down"></i></span> -->
                         
                              <el-form-item>
                                  <el-select v-model="form.region" placeholder="ETH" @change="selectCoin">
                             <el-option v-for="item in coinList" :label="item.zoneName"  :value="item.tradeCoinId" 
     :key="item.tradeCoinId"></el-option> 
                                  </el-select>
                              </el-form-item>
                            </el-form>
                            <div class="button button-min search" @click="searchCoin">搜索</div>
                        </div>
                </div>
                           <div class="table-wrapper">
                     <el-table :data="historyEntrust" style="width: 100%" :row-class-name="setClassName">
                     <el-table-column  label="委托时间" width="170">
                       <template slot-scope="scope">
                           <span>{{scope.row.createTime | dateTime-format}}</span>
                        </template>

                     </el-table-column>
                    <!-- <el-table-column prop="type" label="交易类型" ></el-table-column> -->
                    <el-table-column  label="交易对" >
                       <template slot-scope="scope">
                           <span>{{scope.row.tradeCoinNameShort}}/{{scope.row.unitCoinNameShort}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="bidOrSell" label="方向">
                         <template slot-scope="scope">
                           <span>{{scope.row.bidOrSell==1?scope.row.bidOrSell='卖':scope.row.bidOrSell='买'}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" label="委托价格"></el-table-column>
                    <el-table-column prop="amount" label="委托个数（个）"></el-table-column>
                    <el-table-column prop="dealAmount" label="已成交">
                       <template slot-scope="scope">
                           <span>{{scope.row.amount-scope.row.leftAmount}}</span>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column prop="avarage" label="成交均价"></el-table-column> -->
                    <el-table-column label="状态" >
                        <template slot-scope="scope">
                           <span >{{status[scope.row.matchStatus]}}</span>
                        </template>
                    </el-table-column>
                     <el-table-column  width="80" label="操作" >
   
                       <template slot-scope="scope">
                           <span v-if="scope.row.matchStatus==0||scope.row.matchStatus==1" class="txt-b" @click="cancel(scope.row.id,scope.row.bidOrSell)">撤销</span>
                           <span v-if="scope.row.matchStatus==2||scope.row.matchStatus==3||scope.row.matchStatus==4" class="txt-b" @click="details(scope.row)"> 详情</span>
                           
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
                  <span>{{props.row.createTime|dateTime-format}}</span>
                  <span>{{props.row.price}}</span>
                  <span>{{props.row.amount}}</span>
                  <span>{{(props.row.amount-props.row.leftAmount)*props.row.price}}</span>
                  <span>{{props.row.leftAmount}}</span>
                  <span>{{(props.row.amount-props.row.leftAmount)*props.row.rate+''+props.row.tradeCoinNameShort}}</span>
              </dd>
          </dl>
    
      </template>
    </el-table-column>
  </el-table>
                <el-pagination v-show="currentTotal || currentTotal>0"	@current-change="Changepage" :current-page.sync="pageIndex"
       		 :page-size="pageSize" :total="currentTotal"  background layout="total,prev, pager, next" >	</el-pagination>
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
      pageIndex: 1,
      tradeCoinPairId:1,
      pageIndex_:1,//历史委托默认显示页数
      historyTotal:0,
      currentTotal: 0, //当前委托分页总数
      currentIndex: 1, //当前委托 还是历史委托
    bidOrAsk_:0,//当前方向 买或者卖 历史委托
      bidOrAsk:0,//当前方向 买或者卖 当前委托
      showUl: false,
      pageSize:10,
      showDetails: false, //是否显示交易详情
      form: {
        name: "",
   
      },
      conditionList: [{ name: "全部" }, { name: "买" }, { name: "卖" }],
      currentEntrust: [],
      historyEntrust: [],
      coinList:[],
      status:[
        "未成交",
        "部分成交",
        "完全成交",
        "用户撤单”",
        "系统撤单",
      ]
    };
  },
  computed: {
    
  },
  mounted() {
    this.getInfo();
    this.classificationList()
  },
  methods: {
    //撤销买卖单
    cancel(id,direction){
      if(direction== 1){
        this.$api.cancelBuy({bidOrderId:id},'POST').then(res=>{
          console.log(res,'cancelBuy')
          if(res.message='成功'){
             this.$message({
                message: '撤销成功',
                type: 'success'
                });
              this.getInfo()
          }
         
        })
      }
      else{
        this.$api.cancelSell({askOrderId:id},'POST').then(res=>{
          if(res.message='成功'){
             this.$message({
                message: '撤销成功',
                type: 'success'
                });
                 this.getInfo()
          }
        })
      }
      console.log(id,direction,'direction')
    },
      //下拉选择币种
        selectCoin(val){
          this.tradeCoinPairId=val
          
        },
        //搜索
        searchCoin(){
          if(this.currentIndex==1){
        this.bidOrAsk=this.bidOrAsk
      }
      else{
        this.bidOrAsk=this.bidOrAsk_
      }
      this.$api
        .listBidOrders({ type: this.currentIndex, pageNum: this.pageIndex, pageSize: 10,bidOrAsk:this.bidOrAsk,unCoinId:this.tradeCoinPairId ,tradeCoinNameShort:this.form.name})
        .then(res => {
            var EntrustList = res.datas.list;
          this.currentTotal=EntrustList.total
          this.currentEntrust = res.datas.list;
            this.historyEntrust=res.datas.list;
          this.currentTotal = res.datas.total;
          console.log(res, "我的委托");
        });
        },
    //获取交易区
    classificationList(){
      this.$api.classificationList().then(res=>{
        console.log(res,'classificationList')
        this.coinList=res.datas
      })
    },
    //当前委托分页
    Changepage(val) {
         this.pageIndex = val
         this.getInfo()
    },
    Changepage_(val){
      this.pageIndex_ = val
         this.getInfo()
    },
    //我的委托记录
    getInfo() {
      if(this.currentIndex==1){
        this.bidOrAsk=this.bidOrAsk
      }
      else{
        this.bidOrAsk=this.bidOrAsk_
      }
      this.$api
        .listBidOrders({ type: this.currentIndex, pageNum: this.pageIndex, pageSize: 10,bidOrAsk:this.bidOrAsk })
        .then(res => {
          var EntrustList = res.datas.list;
          this.currentTotal=EntrustList.total
          this.currentEntrust = res.datas.list;
          this.historyEntrust=res.datas.list;
          this.currentTotal = res.datas.total;
          console.log(res, "我的委托");
        });
    },
    setClassName1({ row, index }) {
      // 通过自己的逻辑返回一个class或者空
      if (row.expand == true) {
        // return row.expand ? 'expand' : '';
        return "row-expand-cover";
      }
    },
    tab(item) { 
      if (item == "current") {
        this.currentIndex=1
        this.getInfo()
      }
      else{
        this.currentIndex=2
        this.getInfo()

      }
      this.currentTab = item;
    },
    tabCondition(index) {
      
      this.bidOrAsk=index
      this.getInfo()
    },
    //历史委托
     tabCondition_(index) {
      console.log(index,'index tabCondition_')
      this.bidOrAsk_=index
      this.getInfo()
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
      if (row.matchStatus == 0||row.matchStatus==1) {
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
.txt-b{cursor: pointer;}
.entrust-wrapper{height: 1000px;;}
.search{    margin-left: 10px;}
.devide{
      height: 32px;
    line-height: 32px;
    padding: 0 5px;
}
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
          height: 32px;
    line-height: 32px;
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