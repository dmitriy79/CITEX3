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
                        <el-select v-model="form.address" placeholder="选择提现地址">
                        <el-option v-for="item in coinList" :label="item.withdrawAddress" :value="item.withdrawAddress" :key="item.id"></el-option>
                      
                        </el-select>
                    </el-form-item>
                     <el-form-item label="转出数量">
                        <el-input v-model="form.number"></el-input>
                    </el-form-item>
                     <el-form-item label="转出手续费">
                        <el-input v-model="form.poundage"></el-input>
                    </el-form-item>
                     <el-form-item label="谷歌验证" placeholder="请输入注册时的证件号码后四位">
                        <el-input v-model="form.code"></el-input>
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
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            
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
                password:''
        }
        }
    },
    mounted () {
        this.getCoin()  
        //this.getlistByUserId()
    },
    methods: {
         //选择币种
        getCoinId(val){
            this.form.address=''
            var coinInfo=val.toString().split(',')
            this.coinId=coinInfo[0] 
            this.coinName=coinInfo[1]
            console.log(this.coinName,'999++++++')
            this.$api.listByUserId({coinKey:this.coinName}).then(res=>{
                console.log(res,'这是我的账户币种地址++++++000000')
               this.coinList=res.data.datas
               
            })
        },
         //根据用户获取提币地址列表
        getlistByUserId(){
            this.$api.listByUserId({coinKey:'TEST'}).then(res=>{
                console.log(res,'这是我的账户币种地址++++++')
                this.coinList=res.data.datas
            })
        },
        //查询币种
        getCoin(){
            this.$api.all().then(res=>{
                console.log(res,'查询币种')
               this.allCoin=res.data.datas
            })
        },
       //转出
       carryCoin(){
           this.$api.withdraw({coin_id:this.coinId,code:this.form.code,tradePassword:this.form.password,to:this.form.address,amount:this.form.number}).then(res=>{
               console.log(res,'88888++++++转出')
               if(res.data.message=='成功'){
                  this.$router.push({ path: "/personal" });
               }
               else{
                   this.$message({
					          message: res.data.message,
					          type: 'warning'
		        		});
               }
           })
       }
    }
}
</script>


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
