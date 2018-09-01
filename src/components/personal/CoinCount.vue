<template>
    <div class="coin-count-wrapper">
         <div class="title"><span>币账户</span></div>
            <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="币种">
                        <el-select v-model="form.region" placeholder="">
                        <el-option label="BTC" value="shanghai"></el-option>
                        <el-option label="OKEX" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="提币地址">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <span  class="bottom-btn">添加</span>
                </el-form >
                
            </div>
            <div class="table-wrapper">
                 <el-table :data="tableData1"  style="width: 100%" :row-class-name="setClassName">
                    <el-table-column prop="date" label="币种" >

                    </el-table-column>
                    
                    <el-table-column prop="num" label="提币地址"></el-table-column>
                    <el-table-column prop="num" label="备注"></el-table-column>
                    <el-table-column prop="num" label="操作" width="100">
                         <template slot-scope="scope">
                            <span @click="handleEdit(scope.row)" type="text" size="small" class="scope-btn">删除</span>
                            <span type="text" size="small" class="scope-btn">修改</span>
                        </template>
                    </el-table-column>
                 <el-table-column type="expand" >
      <template slot-scope="props">
         <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="币种" >
                        <el-select v-model="form.region" placeholder="">
                        <el-option label="BTC" value="shanghai"></el-option>
                        <el-option label="OKEX" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="提币地址">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <span  class="bottom-btn">确定</span>
                </el-form >
    
      </template>
    </el-table-column>
                </el-table>
            </div>
                
        </div>        
</template>
<script>
export default {
    data(){
        return{
            form:{
                name:'',
                region:''
            },
                  tableData1: [{
            date: '2016-05-02',
            type: 'USDT',
            num: '1'
          }],
        }
    },
    methods:{
        handleEdit(){

        },
        setClassName({ row, index }) {
      // 通过自己的逻辑返回一个class或者空
      if (row.expand == true) {
        // return row.expand ? 'expand' : '';
        return "row-expand-cover";
      }
    },
    }
}
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
  margin-left: -25px !important;
}
.el-table__row.row-expand-cover .el-table__expand-column .cell {
  display: none !important;
  padding-left: 0 !important;
}
</style>
<style lang="less" scoped>
.coin-count-wrapper{
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
    .form-wrapper{padding: 0 20px;
   
   
        .el-form-item{display:inline-block;width: 29.4%;margin-right:2%;
        &:first-child{width: 20%}
            .el-input,.el-select{width: 100%!important}
        }
    }
    .table-wrapper{    padding: 0 20px 50px;
       .el-form-item{width:28.7%;display: inline-block;margin-right:2%;
        .el-input,.el-select{width: 100%!important}
        &:first-child{width: 21%}
       }
          .scope-btn,.scope-btn:hover{cursor: pointer;}
    }
}
//  .bottom-btn{
//         width: 132px;margin-top: 40px;
//     height: 42px;
//     line-height: 42px;
//     background: #2286FF;
//     text-align: center;
//     border-radius: 2px;
//     font-size: 16px;
//     color: #FFFFFF;
//     display: inline-block;
//     }
</style>
