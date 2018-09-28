<template>
  <div class="carry-full-coin">
    <div class="tabs">
        <span @click="tabRecord('full')" :class="{active:this.current==='full'}">充币记录</span>
        <span @click="tabRecord('carry')" :class="{active:this.current==='carry'}">提币记录</span>
        <div @click="goback">返回</div>
    </div>
    <div class="content">
        <div class="full-coin-wrapper" v-if="this.current==='full'">
             <el-table :data="fullCoinRecord"  style="width: 100%">
                <el-table-column prop="createTime" label="时间" width=""></el-table-column>
                <el-table-column prop="name" label="币种" width="">
                    <template slot-scope="scope">
                        <span class="coinimg-wrapper"><img src="@/assets/images/hours.png" alt=""></span>
                        
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="类型"></el-table-column>
                <el-table-column prop="address" label="数量"></el-table-column>
                <el-table-column prop="address" label="状态"></el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
        <div class="carry-coin-wrapper" v-if="this.current==='carry'">
            <el-table :data="tableData2"  style="width: 100%">
                <el-table-column prop="date" label="时间" width=""></el-table-column>
                <el-table-column prop="name" label="币种" width="">
                    <template slot-scope="scope">
                        <span class="coinimg-wrapper"><img src="@/assets/images/hours.png" alt=""></span>
                        
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="类型"></el-table-column>
                <el-table-column prop="address" label="数量"></el-table-column>
                <el-table-column prop="address" label="状态"></el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
         
        </div>
    </div>
</div>
</template>
<script>

export default {
  name: "coin-record",
  data() {
    return {
    };
  },
  methods: {
    goback() {
      history.go(-1);
    },
    //充币记录,提币记录
    tabRecord(tab) {
      if (tab == "full") {
      } else {
      }
      this.current = tab;
    }
  }
};

</script>
<style>
  
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