<template>
    <div>
        <div class="title"><span>交易密码</span></div>
        <div class="wrapper">
                <div class="form-wrapper" v-if="!show">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="登录密码">
                        <el-input @input="validate" v-model="form.loginPassword" :type="inputType"></el-input><img src="@/assets/images/show.png" alt="" @click="change">
                    </el-form-item>
                     <el-form-item label="设置交易密码">
                        <el-input @input="validate" v-model="form.tranPassword"  :type="inputType1"></el-input><img src="@/assets/images/show.png" alt="" @click="change1">
                    </el-form-item>
                     <el-form-item label="确认交易密码">
                        <el-input @input="validate" v-model="form.confirmPassword"  :type="inputType2"></el-input><img src="@/assets/images/show.png" alt="" @click="change2">
                    </el-form-item>
                    
                    <div  class="bottom-btn" @click="setTradePassword">确定</div>
                </el-form >
                
            </div>
              <div class="form-wrapper" v-if="show">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="新密码">
                        <el-input @input="validate" v-model="form.newPassword" :type="inputType" ></el-input><img src="@/assets/images/show.png" alt="" @click="change">
                    </el-form-item>
                     <el-form-item label="确认新密码">
                        <el-input @input="validate" v-model="form.confirmPassword_" :type="inputType1"></el-input><img src="@/assets/images/show.png" alt="" @click="change1">
                    </el-form-item>
                     <el-form-item label="谷歌验证码">
                        <el-input v-model="form.code" placeholder="谷歌验证码为6位纯数字" type="number"  oninput="if(value.length>6)value=value.slice(0,6)"></el-input>
                    </el-form-item>
                    
                    <div  class="bottom-btn" @click="reset">确定</div>
                  
                </el-form >
                
            </div>
        </div>
            <el-dialog title="提示" :visible.sync="tradeDialog" width="30%">
                <div class="txt-c">交易密码设置成功,为了您的账号安全</div>
                <div class="txt-c">及找回请设置谷歌验证码</div>
             
      <div slot="footer" class="dialog-footer">
        <el-button type="primary"> <router-link to="/mine/google-authenticator">  设置谷歌验证码</router-link> </el-button>
        <el-button  @click="tradeConfirm" :plain="true" >暂不设置</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<script>
import validate  from '@/assets/js/validate'

export default {
    data(){
        return{
            tradeDialog:false,
               inputType:'password',
               inputType1:'password',
            inputType2:'password',
            show:false,
            tradePassword:'',
            loginPassword:'',
            
form: {
          tranPassword:'',
          loginPassword:'',
          confirmPassword:'',
          confirmNewPassword:'',
          confirmPassword_:'',
          newPassword:'',
          code:''
        }
        }
    },
    mounted () {
        this.getUserInfo()
    //    this.loginPassword=localStorage.getItem('loginPassword') 
    },
    methods: {
        tradeConfirm(){
            this.tradeDialog=false
            this.show=true
        },
                validate(x){
            this.$nextTick(x => {
                this.form.tranPassword = this.form.tranPassword.replace(/\W+/g, '');
                this.form.loginPassword = this.form.loginPassword.replace(/\W+/g, '');
                this.form.confirmPassword = this.form.confirmPassword.replace(/\W+/g, '');
                this.form.tranPassword = this.form.tranPassword.replace(/\W+/g, '');
                this.form.confirmPassword_ = this.form.confirmPassword_.replace(/\W+/g, '');
                this.form.newPassword = this.form.newPassword.replace(/\W+/g, '');
               
            })
        },
        change(){
             if(this.inputType=='password'){
                this.inputType='text'
                return 
            }
            this.inputType='password'
        },
         change1(){
             if(this.inputType1=='password'){
                this.inputType1='text'
                return 
            }
            this.inputType1='password'
        },
          change2(){
             if(this.inputType2=='password'){
                this.inputType2='text'
                return 
            }
            this.inputType2='password'
        },
        getUserInfo(){
            this.$api.getValidateById().then(res=>{
                console.log(res,'我是用户信息')
                var content =res.datas
                // this.tradePassword=content.user_password;
             
                if(!content.trade_password){
                    this.show=false
                }
                else{
                   this.show=true 
                }
               
            })
        },
      validatePassword(ele){
            var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
            if(!regExp.test(ele)){ 
            this.prototype.$message({
                message: '密码是数字和字母组合，不能小于6位',
                type: 'warning'
            });

            }
            else{
                this.prototype.$message({
                    message: '密码不能为空',
                    type: 'warning'
                });   
            }
    },
        confirmPassword_(){
        var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;

            if (this.form.confirmPassword_ == '') {
                this.$message({
                message: '确认密码不能为空',
                type: 'warning'
                });
            } else if ( this.form.confirmPassword_!== this.form.newPassword) {
                this.$message({
                message: '两次密码不匹配',
                type: 'warning'
                });
            }
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
            if (!regExp.test(this.form.loginPassword)) {
                this.$message({
                message: '密码是数字和字母组合，不能小于6位',
                type: 'warning'
                });

            }
            if(this.form.loginPassword==''){
                   this.$message({
                    message: '登录密码不能为空',
                    type: 'warning'
                    }); 
            }

           
            if(this.form.loginPassword&&this.form.tranPassword&&(this.form.confirmPassword==this.form.tranPassword)){
                    this.$api.setTradePassword({userPassword:this.form.loginPassword,tradePassword:this.form.tranPassword}).then(res=>{
                if(res.message=='成功'){
                    this.tradeDialog=true
                    // this.$message({
                    // message: res.message,
                    // type: 'success'
                    // });
                    // if(!this.tradeDialog){
                    //     this.show=true
                    // }

                
                }
                else{
                    this.$message({
                    message: res.message,
                    type: 'warning'
                    });
                }
            })
            }
        
        },
        //重置交易密码
        reset(){
            this.confirmPassword_()
          
           if (this.form.code == '') {
                this.$message({
                message: '谷歌验证码不能为空',
                type: 'warning'
                });
            } 
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
            if(this.form.newPassword&&(this.form.newPassword==this.form.confirmPassword_)){
                this.$api.reset({tradePassword:this.form.newPassword,code:this.form.code}).then(res=>{
                console.log(res,'我是修改后的交易密码')
                if(res.message=='成功'){
                   this.$message({
                message: '交易密码修改成功',
                type: 'success'
                }); 
               
                this.form={
                    newPassword:'',
                    confirmPassword_:'',
                    code:''
                }
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
}
</script>
<style lang="less" scoped>
.dialog-footer,.txt-c{text-align: center}
.txt-c{line-height: 25px}
.wrapper{padding: 0 20px;
img{position: relative;cursor: pointer;
    left: -28px;
    width: 18px;
    top: 3px;
}
}
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

