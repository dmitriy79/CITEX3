<template>
    <div>
        <div class="title"><span>我的消息</span><i class="ico-changecny"></i></div>
        <div class="wrapper">
            <el-button size="small">全部标记为已读</el-button><el-button size="small">删除已读</el-button ><el-button size="small">删除</el-button>
            <div class="table-wrapper">
                <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
   >
    </el-table-column>
    <el-table-column
      label="标题"
     >
      <template slot-scope="scope">{{ scope.row.name }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="内容"
      >
    </el-table-column>
    <el-table-column
      prop="date"
      label="发送时间"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="status"
      label="状态"
      >
    </el-table-column>
  </el-table>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.ico-changecny{    position: absolute;
    right: 20px;
    top: 10px;}
 .title{
        height: 40px;
        background: #1b222a;
            margin-bottom: 13px;
        span{
            background: #292f37;
            font-size: 15px;
            width: 144px;
            display: block;
            height: 40px;
            line-height: 40px;
            color: #ffffff;
            text-align: center;
        }
        
    }
.wrapper{padding: 0 20px;
.table-wrapper{margin-top: 10px}
}
</style>
<script>
export default {
    data(){
        return{
tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'已读'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'未读'
        }],
        multipleSelection: []
        }
    },
     methods: {
    
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>
