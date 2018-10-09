<template>
    <div>
        <div class="title"><span>修改登录密码</span></div>
        <div class="wrapper">
            <div class="text-o">为保证您的顺利交易 请牢记登录密码！</div>
                <div class="form-wrapper">
                <el-form ref="form" label-width="80px" >
                    <el-form-item label="原始登录密码">
                        <el-input  v-model="oldPassword" @input="validate" :type="inputType" placeholder="密码为数字和字母组合，不少于6位"></el-input><img src="@/assets/images/show.png" alt="" @click="change">
                        <router-link to='/find-password' class="text-o" >忘记密码</router-link>
                    </el-form-item>
                    <el-form-item label="新登录密码">
                        <el-input  v-model="newPassword" :type="inputType1" @input="validate" placeholder="密码为数字和字母组合，不少于6位"></el-input><img src="@/assets/images/show.png" alt="" @click="change1">
                    </el-form-item>
                     <el-form-item label="再次输入新密码">
                        <el-input ref="confirmPassword" v-model="confirmPassword" :type="inputType2" @input="validate" placeholder="密码为数字和字母组合，不少于6位"></el-input><img src="@/assets/images/show.png" alt="" @click="change2">
                    </el-form-item>
                    <el-form-item label="谷歌验证码">
                        <el-input v-model="code" type="number" placeholder="谷歌验证码为6位纯数字" oninput="if(value.length>6)value=value.slice(0,6)"></el-input>
                    </el-form-item>
                    <div  class="bottom-btn" @click="confirm">确定</div>
                </el-form >
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
      data(){
       return{
           inputType:'password',
           inputType1:'password',
           inputType2:'password',
               oldPassword:'',
               newPassword:'',
               confirmPassword:'',
               code:''
       }
   },

    methods: {
      
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
        validate(x){
            this.$nextTick(x => {
                
                this.oldPassword = this.oldPassword.replace(/\W+/g, '');
               
            })
        },
       //提交修改
       confirm(){
          this.ConfirmPassword()
           var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
            
            if(this.code==''){
                this.$message({
                message: '谷歌验证码不能为空',
                type: 'warning'
                });
            }
             if (!regExp.test(this.newPassword)) {
                this.$message({
                message: '密码是数字和字母组合，不能小于6位',
                type: 'warning'
                });

            }
            if (this.newPassword == '') {
                this.$message({
                message: '新密码不能为空',
                type: 'warning'
                });
            } 
            if (!regExp.test(this.oldPassword)) {
                this.$message({
                message: '密码是数字和字母组合，不能小于6位',
                type: 'warning'
                });

            }
          if (this.oldPassword == '') {
                this.$message({
                message: '原始密码不能为空',
                type: 'warning'
                });
            } 
           if(this.oldPassword&&this.newPassword&&(this.confirmPassword==this.newPassword)&&this.code){
               this.$api.reset({userPassword:this.newPassword,oldUserPassword:this.oldPassword,code:this.code}).then(res=>{
                 if(res.message=='成功'){
                    localStorage.removeItem("token")
                    this.$router.push({path: '/login'});
                     window.location.reload();
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
     
      if (this.confirmPassword == '') {
        this.$message({
          message: '确认密码不能为空',
          type: 'warning'
        });
      } else if ( this.confirmPassword!== this.newPassword) {
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
.wrapper{padding: 0 20px;
img{position: relative;cursor: pointer;
    left: -28px;
    width: 18px;
    top: 3px;}
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
