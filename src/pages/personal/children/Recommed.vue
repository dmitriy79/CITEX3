<template>
    <div>
        <div class="title"><span>推荐返佣</span></div>
        <div class="wrapper">
            <div class="item">已推荐好友:<span class="number">5</span></div>
            <div class="item">
                <span>返佣记录: <i class="text-b">ef82ba3200444a6494af10c56b54e967</i></span>
                <span>邀请链接: <i >https://www.oex.cn/regcode/ef82ba3200444a6494af10c56b54e967</i></span>
            </div>
             <div class="table-wrapper">
                     <el-table :data="tableData1" style="width: 100%" >
                       
                        <el-table-column prop="type" label="被推荐人" ></el-table-column>
                        <el-table-column prop="type" label="推荐返佣金额" ></el-table-column>
                        <el-table-column prop="price" label="币种单位">
                             <template slot-scope="scope">
                            <span class="coinimg-wrapper"><img src="@/assets/images/hours.png" alt=""></span>
                            
                            <span style="margin-left: 10px">{{ scope.row.type }}</span>
                        </template>
                        </el-table-column>
                       
                    </el-table>
                  
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData1: [
        {
          
          type: "币币交易",
          group: "YEE/BTC",
          direction: "买入",
          price: "0.00000890",
       
        },]
        }
    }
}
</script>
<style lang="less" scoped>
.table-wrapper{
    div{margin-bottom: 50px;}
   
}
.wrapper{padding: 0 20px}
.item{font-size: 14px;    padding-left: 10px;
color: #fff;
line-height: 30px;
span{margin-right: 20px}
}
.text-b{color: #2286FF ;}
 .number{font-size: 26px;color: #2286FF;margin-left: 5px }
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
</style>


