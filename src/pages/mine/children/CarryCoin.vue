<template>
    <div>
        <div class="carrycoin-wrapper">
            <div class="title"><span>我要提币</span></div>
            <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                     <el-form-item label="币种转出">
                        <el-select v-model="form.coinType" placeholder="请选择" @change="getCoinId">
                        <el-option v-for="item in allCoin" :label="item.name" :value="[item.id+','+item.name]" :key="item.id"></el-option>
                        
                        </el-select>
                    </el-form-item>
                   
                    <el-form-item label="转出地址">
                        <el-select v-model="form.address" placeholder="请选择提币地址" @change="selectAddress"> 
                            <el-option v-for="item in coinList" :label="item.withdrawAddress" :value="[item.coinId+','+item.withdrawAddress]" :key="item.id"></el-option>
                            <el-option value=""> <span @click="addAddress">添加提币地址</span></el-option> 
                       </el-select>
                        <!-- <el-select v-model="form.address" placeholder="选择提现地址">
                        <el-option v-for="item in coinList" :label="item.withdrawAddress" :value="item.withdrawAddress" :key="item.id"></el-option>
                      
                        </el-select> -->
                    </el-form-item>
                     <el-form-item label="转出数量">
                        <el-input v-model="form.number" type="number"></el-input>
                    </el-form-item>
                     <el-form-item label="转出手续费">
                        <el-input v-model="form.poundage" type="number"></el-input>
                    </el-form-item>
                     <el-form-item label="谷歌验证" placeholder="请输入注册时的证件号码后四位">
                        <el-input v-model="form.code" type="number"></el-input>
                    </el-form-item>
                    <el-form-item label="交易密码">
                        <el-input v-model="form.password" type="password"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="短信验证码" class="message-validate"> 
                        <el-input v-model="form.name"></el-input><span>获取手机验证码</span><i>+86 133****5467（接受验证码）</i>
                    </el-form-item> -->
                </el-form>
                <div class="bottom-btn" @click="carryCoin">立即转出</div>
            </div>
        </div>
          <el-dialog title="提示" :visible.sync="Addressdialog" width="30%">
      <el-form :model="form" class="dialog-wrapper" label-width="120px">
        <el-form-item label="添加提币地址：">
          <el-input v-model="form.address_" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入谷歌验证码：" >
          <el-input v-model="form.code_" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="Addressdialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmAdd" :plain="true" >确定</el-button>
      </div>
    </el-dialog>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            Addressdialog:false,
            coinList:[],
            allCoin:[],//所有币种
            coinId:'',
            coinName:'',
            form: {
                address:'',
                coinType:'',
                number:'',
                poundage:'',
                code:'',
                password:'',
                address_:''
        }
        }
    },
    mounted () {
        this.getCoin()  
        //this.getlistByUserId()
    },
    methods: {
    selectAddress(val){
       var addressInfo=val.toString().split(',')
      this.form.address=addressInfo[1]
    },
    //添加提币地址
    addAddress(){
        if(this.form.coinType==''){
            this.$message({
              message: "请选择提币地址",
              type: "warning"
            });
        }
        else{
             this.Addressdialog=true
        }
      console.log("add Addressdialog")
     
    },
    //确认添加提币地址
    confirmAdd(){
        this.coinList.push({
          withdrawAddress:this.form.address_
        })
        console.log(this.coin_Id,'this.coin_Id')
        this.$api.add({coinId:this.coinId,withdrawAddress:this.form.address_,coinName:this.coinName,code:this.form.code_}).then(res=>{
          console.log(res,'confirmAdd data')
          if(res.status==200){
             this.$message({
              message: "提币地址添加成功",
              type: "success"
            });
            this.Addressdialog=false
            return
          }
           this.$message({
              message:res.message,
              type: "warning"
            });
        })
        // this.Addressdialog=false
    },
         //选择币种
        getCoinId(val){
            this.form.address=''
            var coinInfo=val.toString().split(',')
            this.coinId=coinInfo[0] 
            this.coinName=coinInfo[1]
            console.log(this.coinName,'999++++++')
            this.$api.walistByUserId({coinKey:this.coinName}).then(res=>{
                console.log(res,'这是我的账户币种地址++++++000000')
               this.coinList=res.datas
               
            })
        },
         //根据用户获取提币地址列表
        getlistByUserId(){
            this.$api.listByUserId({coinKey:'TEST'}).then(res=>{
                console.log(res,'这是我的账户币种地址++++++')
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
       //转出
       carryCoin(){
           this.$api.withdraw({coin_id:this.coinId,code:this.form.code,tradePassword:this.form.password,to:this.form.address,amount:this.form.number}).then(res=>{
               console.log(res,'88888++++++转出')
               if(res.message=='成功'){
                  this.$router.push({ path: "/personal" });
               }
               else{
                   this.$message({
					          message: res.message,
					          type: 'warning'
		        		});
               }
           })
       }
    }
}
</script>

<style>
.carrycoin-wrapper .el-select {
    width: 50%!important;
}
.carrycoin-wrapper .dialog-wrapper .el-input{width: 100%}
</style>

<style lang="less" scoped>
.carrycoin-wrapper{
    .message-validate{
        i{margin-left: 22px}
        span{margin-left: -140px;width: 140px;text-align: center;    display: inline-block;    background: #181f27;border-top-right-radius:4px;border-bottom-right-radius:4px}
    }
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
    //   .bottom-btn{
    //           width: 132px;margin-top: 40px;
    // height: 42px;
    // line-height: 42px;
    // background: #2286FF;
    // text-align: center;
    // border-radius: 2px;
    // font-size: 16px;
    // color: #FFFFFF;
    //   }
    }
}
</style>
