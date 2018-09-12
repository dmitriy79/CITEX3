<template>
    <div>
        <div class="title"><span>交易密码</span></div>
        <div class="wrapper">
                <div class="form-wrapper" v-if="!show">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="登录密码">
                        <el-input v-model="form.loginPassword" type="password"></el-input>
                    </el-form-item>
                     <el-form-item label="设置交易密码">
                        <el-input v-model="form.tranPassword"  type="password"></el-input>
                    </el-form-item>
                     <el-form-item label="确认交易密码">
                        <el-input v-model="form.confirmPassword"  type="password"></el-input>
                    </el-form-item>
                    
                    <div  class="bottom-btn" @click="setTradePassword">确定</div>
                </el-form >
                
            </div>
              <div class="form-wrapper" v-if="show">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="新密码">
                        <el-input v-model="form.newPassword" type="password"></el-input>
                    </el-form-item>
                     <el-form-item label="确认新密码">
                        <el-input v-model="form.confirmPassword" type="password"></el-input>
                    </el-form-item>
                     <el-form-item label="谷歌验证码">
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    
                    <div  class="bottom-btn" @click="reset">确定</div>
                </el-form >
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:false,
            tradePassword:'',
            loginPassword:'',
            
form: {
          tranPassword:'',
          loginPassword:'',
          confirmPassword:'',
          confirmNewPassword:'',
          newPassword:'',
          code:''
        }
        }
    },
    mounted () {
        this.getUserInfo()
       this.loginPassword=localStorage.getItem('loginPassword') 
    },
    methods: {
        getUserInfo(){
            this.$api.getValidateById().then(res=>{
                console.log(res,'我是用户信息')
                var content =res.data.datas
                this.tradePassword=content.user_password;
                if( this.tradePassword==''){
                    this.show=false
                }
                else{
                   this.show=true 
                }
                if(res.data.message=='成功'){
                    
                }
            })
        },
         //密码确认验证
    ConfirmPassword() {
      var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;

      if (this.form.confirmPassword == '') {
        this.$message({
          message: '确认密码不能为空',
          type: 'warning'
        });
      } else if ( this.form.confirmPassword!== this.form.tranPassword) {
        this.$message({
          message: '两次密码不匹配',
          type: 'warning'
        });
      }
    },
        //提交交易密码
        setTradePassword(){
              this.ConfirmPassword()
             var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
            if (!regExp.test(this.form.tranPassword)) {
                this.$message({
                message: '密码是数字和字母组合，不能小于6位',
                type: 'warning'
                });

            }
             if (this.form.tranPassword == '') {
                this.$message({
                message: '交易密码不能为空',
                type: 'warning'
                });
            } 
            if(this.form.loginPassword!==this.loginPassword){
                 this.$message({
                    message: '登录密码不正确',
                    type: 'warning'
                    });
            }
            if(this.form.loginPassword==''){
                   this.$message({
                    message: '登录密码不能为空',
                    type: 'warning'
                    }); 
            }
          
           

           
            
            this.$api.setTradePassword({userPassword:this.form.loginPassword,tradePassword:this.form.tranPassword}).then(res=>{
                console.log(res,'交易密码')
            })
        },
        //重置交易密码
        reset(){
                this.ConfirmPassword()
            var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
            if (!regExp.test(this.form.newPassword)) {
                this.$message({
                message: '密码是数字和字母组合，不能小于6位',
                type: 'warning'
                });

            }
             if (this.form.newPassword == '') {
                this.$message({
                message: '密码不能为空',
                type: 'warning'
                });
            } 
           
            this.$api.reset({tradePassword:this.form.newPassword,code:this.form.code}).then(res=>{
                console.log(res,'我是修改后的交易密码')
            })
        }
    }
}
</script>
<style lang="less" scoped>
.wrapper{padding: 0 20px}
.text-o{font-size: 13px;
color: #FF9535;}
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

