<template>
    <div>
        <div class="title"><span>修改登录密码</span></div>
        <div class="wrapper">
            <div class="text-o">为保证您的顺利交易 请牢记登录密码！</div>
                <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="原始登录密码">
                        <el-input v-model="form.oldPassword" type="text"></el-input>
                    </el-form-item>
                    <el-form-item label="新登录密码">
                        <el-input v-model="form.newPassword" type="text"></el-input>
                    </el-form-item>
                     <el-form-item label="再次输入新密码">
                        <el-input v-model="form.confirmPassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="谷歌验证码">
                        <el-input v-model="form.code" type="text"></el-input>
                    </el-form-item>
                    <div  class="bottom-btn" @click="confirm">确定</div>
                </el-form >
                
            </div>
        </div>
    </div>
</template>
<script>
import validate  from '@/assets/js/validate'

export default{
   data(){
       return{
           form:{
               oldPassword:'',
               newPassword:'',
               confirmPassword:'',
               code:''
           }
       }
   },
   methods: {
       //提交修改
       confirm(){
          this.ConfirmPassword()
           var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
            
            if(this.form.code==''){
                this.$message({
                message: '谷歌验证码不能为空',
                type: 'warning'
                });
            }
             if (!regExp.test(this.form.newPassword)) {
                this.$message({
                message: '密码是数字和字母组合，不能小于6位',
                type: 'warning'
                });

            }
            if (this.form.newPassword == '') {
                this.$message({
                message: '新密码不能为空',
                type: 'warning'
                });
            } 
            if (!regExp.test(this.form.oldPassword)) {
                this.$message({
                message: '密码是数字和字母组合，不能小于6位',
                type: 'warning'
                });

            }
          if (this.form.oldPassword == '') {
                this.$message({
                message: '原始密码不能为空',
                type: 'warning'
                });
            } 
           if(this.form.oldPassword&&this.form.newPassword&&(this.form.confirmPassword==this.form.newPassword)&&this.form.code){
               this.$api.reset({userPassword:this.form.newPassword,oldUserPassword:this.form.oldPassword,code:this.form.code}).then(res=>{
                 if(res.message=='成功'){
                    localStorage.removeItem("token")
                    this.$router.push({path: '/login'});
                }  
                else{
                      this.$message({
                message: res.message,
                type: "warning"
                });  
                }
               })
           }
       },
       //确认密码
       ConfirmPassword() {
      var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
     
      if (this.form.confirmPassword == '') {
        this.$message({
          message: '确认密码不能为空',
          type: 'warning'
        });
      } else if ( this.form.confirmPassword!== this.form.newPassword) {
        this.$message({
          message: '两次密码不匹配',
          type: 'warning'
        });
      }
    },
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
