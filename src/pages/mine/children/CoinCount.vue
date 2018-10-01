<template>
    <div class="coin-count-wrapper">
         <div class="title"><span>币账户</span></div>
            <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="币种" >
                        <el-select v-model="form.coinType" placeholder="请选择" @change="getCoinId">
                        <el-option v-for="item in allCoin" :label="item.name" :value="[item.id+','+item.name]" :key="item.id"></el-option>
                        
                        </el-select>
                    </el-form-item>
                    <el-form-item label="提币地址">
                        <el-input v-model="form.coinAddress"  onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input v-model="form.mark"></el-input>
                    </el-form-item>
                    <span  class="bottom-btn" @click="add">添加</span>
                </el-form >
                
            </div>
            <div class="table-wrapper">
                 <el-table :data="coinList"  style="width: 100%" :row-class-name="setClassName">
                    <el-table-column prop="coinName" label="币种"  width="180">

                    </el-table-column>
                    
                    <el-table-column prop="withdrawAddress" label="提币地址"></el-table-column>
                      
                    <el-table-column prop="comment" label="备注"></el-table-column>
                    <el-table-column label="操作" width="100">
                         <template slot-scope="scope">
                            <span @click="handleDelete(scope.row)" type="text" size="small" class="scope-btn">删除</span>
                            <span @click="handleUpdate(scope.row)" type="text" size="small" class="scope-btn">修改</span>
                        </template>
                    </el-table-column>
                     <!-- <el-table-column prop="id" label="id" width="10"></el-table-column> -->

                </el-table>
            </div>
           <el-dialog title="修改" :visible.sync="editContent" width="30%">
     <el-form ref="form" :model="form_" label-width="80px" >
                    <el-form-item label="币种">
                        <el-select v-model="form_.coinType" placeholder="请选择" @change="selectCoinId">
                        <el-option v-for="item in allCoin" :label="item.name" :value="item.id" :key="item.coinId"></el-option>
                        
                        </el-select>
                    </el-form-item>
                    <el-form-item label="提币地址">
                        <el-input v-model="form_.coinAddress"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input v-model="form_.mark"></el-input>
                    </el-form-item>
                </el-form >
      <div slot="footer" class="dialog-footer">
        <el-button @click="editContent = false">取 消</el-button>
        <el-button type="primary" @click="update" :plain="true" >确定</el-button>
      </div>
    </el-dialog>     
        </div>        
</template>
<script>
export default {
    data(){
        return{
            editContent:false,
            allCoin:[],//所有币种
            coinList:[],//我的提币列表
            code:'',//谷歌验证码
            coinId:'',
            coinName:'',
            updateCoinId:'',
            addressId:'',
            form:{
                coinType:'',
                coinAddress:'',
                mark:'',
                
                mark_:'',
            },
            form_:{
                  coinType:'',
                coinAddress:'',
                mark:'',
            },
                  tableData1: [{
            date: '2016-05-02',
            type: 'USDT',
            num: '1'
          }],
        }
    },
    mounted () {
       this.getCoin() 
       this.getlistByUserId()
    },
    methods:{
        //根据用户获取提币地址列表
        getlistByUserId(){
            this.$api.walistByUserId().then(res=>{
                console.log(res,'这是我的账户币种地址')
                this.coinList=res.datas
            })
        },
        //查询币种
        getCoin(){
            this.$api.all().then(res=>{
                console.log(res,'查询币种')
               this.allCoin=res.datas
            })
        },
        selectCoinId(val){
            this.updateCoinId=val
            console.log(val,'selectCoinId===.')
        },
        //选择币种
        getCoinId(val){
            var coinInfo=val.toString().split(',')
            this.coinId=coinInfo[0] 
            this.coinName=coinInfo[1]
            console.log(coinInfo[0],coinInfo[1],'999++++++')
        },
        //添加
         add() {
        this.$prompt('请输入谷歌验证码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',//replace(/[^\d]/g,'')
          inputPattern: /^\d{6}$/,
          inputErrorMessage: '请输入6位纯数字谷歌验证码'
        }).then(({ value }) => {
          this.code=value
        //   this.coinList.push(this.coinName)
          this.$api.add({coinId:this.coinId,withdrawAddress:this.form.coinAddress,code:this.code,coinName:this.coinName,comment:this.form.mark}).then(res=>{
              console.log(res,'我是添加的一条')
              if(res.message=="成功"){
                 this.getlistByUserId()
                this.form={
                    coinType:'',
                    coinAddress:'',
                    mark:'',
                }
              }
              else{
                  this.$message({
                    type: 'warning',
                    message: res.message
                });
              }
            //    this.getlistByUserId()

            })
          /*this.$message({
            type: 'success',
            message: '您的谷歌验证码是: ' + value
          });*/
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
 
    },
    //修改
       update(){
           this.$api.update({withdrawAddress:this.form_.coinAddress,id:this.addressId,coinId:this.updateCoinId},'POST').then(res=>{
              if(res.message=='成功'){
                    this.editContent=false
              }
           })
       },
        handleDelete(scope){
            console.log(scope,'9999++++++')
            this.$api.delete({id:scope.id}).then(res=>{
                
                if(res.message=="成功"){
                    console.log(res,'删除一条')
                 this.getlistByUserId()
               
              }
            })
        },
        handleUpdate(scope){
            console.log(scope,'handleUpdate')
           this.addressId= scope.id
            this.editContent=true
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
<style scoped>
/* .el-table_1_column_5{display: none} */

.el-select-dropdown {
    background: #fff!important;
    border: none;
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: #f5f7fa!important;
}
.el-dialog__body{padding: 0 20px }
.el-dialog .el-select,.el-dialog .el-input{width:100%!important;}
.el-dialog .el-select input,.el-dialog .el-input input,.el-select-dropdown__item.selected{color:#606266!important}
.el-message-box__input .el-input__inner{color:grey}
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
   
   
        .el-form-item{display:inline-block;width: 29.4%;margin-right:1.5%;
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
