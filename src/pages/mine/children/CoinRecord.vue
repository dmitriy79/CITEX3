<template>
  <div class="carry-full-coin">
    <div class="tabs">
        <span @click="tabRecord('full')" :class="{active:this.current==='full'}">充币记录</span>
        <span @click="tabRecord('carry')" :class="{active:this.current==='carry'}">提币记录</span>
        <div @click="goback">返回</div>
    </div>
    <div class="content">
        <div class="full-coin-wrapper" v-if="this.current==='full'">
             <el-table :data="fullcoinList"  style="width: 100%">
                
                <el-table-column  label="时间" width="">
                  <template slot-scope="scope">
                           <span>{{scope.row.createTime | dateTime-format}}</span>
                        </template>
                </el-table-column>
                <el-table-column prop="coinSymbol" label="币种" width="">
                    <template slot-scope="scope">
                        <!-- <span class="coinimg-wrapper"><img :src="@/assets/images/hours.png" alt=""></span> -->
                        
                        <span style="margin-left: 10px">{{ scope.row.coinSymbol }}</span>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="address" label="类型"></el-table-column> -->
                <el-table-column prop="amount" label="数量"></el-table-column>
                <el-table-column prop="state" label="状态"></el-table-column>
            </el-table>
            <el-pagination v-show="fullcoinTotal || fullcoinTotal>0"	@current-change="handleCurrentChange" :current-page.sync="pageIndex"
       		 :page-size="pageSize" :total="fullcoinTotal"  background layout="total,prev, pager, next" >	</el-pagination>
        </div>
        </div>
        <div class="carry-coin-wrapper" v-if="this.current==='carry'">
            <el-table :data="carrycoinList"  style="width: 100%">
               <el-table-column  label="时间" width="">
                  <template slot-scope="scope">
                           <span>{{scope.row.createTime | dateTime-format}}</span>
                        </template>
                </el-table-column>
                <el-table-column prop="coinSymbol" label="币种" width="">
                    <template slot-scope="scope">
                        <!-- <span class="coinimg-wrapper"><img src="@/assets/images/hours.png" alt=""></span> -->
                        
                        <span style="margin-left: 10px">{{ scope.row.coinSymbol }}</span>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="address" label="类型"></el-table-column> -->
                <el-table-column prop="amount" label="数量"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
            </el-table>
            <!-- <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination> -->
         <el-pagination v-show="carrycoinTotal || carrycoinTotal>0"	@current-change="carrycoinChange" :current-page.sync="pageIndex_"
       		 :page-size="pageSize" :total="carrycoinTotal"  background layout="total,prev, pager, next" >	</el-pagination>
        </div>
    </div>
</div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "coin-record",
  data() {
    return {
         current:'full',
         pageIndex:1,
         pageIndex_:1,//提币
         	pageSize:12,
    };
  },
  created() {
     this.$store.dispatch("assets/fullcoinRecord",this.pageIndex)
  },
 
  methods: {
    handleCurrentChange(value){
			this.pageIndex = value
			 this.$store.dispatch("assets/fullcoinRecord",this.pageIndex)
    },
    //提币分页
    carrycoinChange(value){
        this.pageIndex_ = value
                 this.$store.dispatch("assets/carrycoinRecord",this.pageIndex_)
    },
    goback() {
      history.go(-1);
    },
    //充币记录,提币记录
    tabRecord(tab) {
      if (tab == "full") {

      } else {
         this.$store.dispatch("assets/carrycoinRecord",this.pageIndex_)
      }
      this.current = tab;
    }
  },
   computed: {
    ...mapState('assets',['fullcoinList','fullcoinTotal','carrycoinList','carrycoinTotal'])

  },
};

</script>
<style  lang="less" scoped>
.carry-coin-wrapper{
   div {
      padding: 0 20px 50px;
    }
}
.carry-full-coin {
  height: 920px;
  .content {
    div {
      padding: 0 10px 50px;
    }
  }
  .tabs {
    height: 40px;
    margin-bottom: 23px;
    background: #1b222a;
    div {
      text-align: right;
      flex: 1;
      padding-right: 20px;
    }
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
}
</style>