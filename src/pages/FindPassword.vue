<template>
  <div class="login-wrapper">
    <div class="findpassword">
      <div class="container" ref="content">
        <div class="left">
          <div class="title">找回密码</div>
          <div class="input-item">
              <div class="input-wrapper">
                   <input type="text" placeholder="请输入邮箱" v-model="email" v-on:blur="blurUserName">
              </div>
              <div class="input-wrapper">
                   <input type="text" placeholder="请输入邮箱验证码" v-model="code" v-on:blur="blurUserName"><button class="input-btn"  @click="sendEmail" :plain="true" ref="sendEmail">{{content}}</button>
              </div>
             <div class="input-wrapper">
                 <input type="password" placeholder="重置密码（英文+中文不少于6位）" v-model="passWord" v-on:blur="blurPassword">
             </div>
               <div class="input-wrapper">
                 <input type="password" placeholder="确认密码" v-model="confirmPassword" v-on:blur="blurConfirmPassword">
             </div>
          </div>
          <div class="button" @click="reset">重置</div>
        </div>
        <div class="right">
          <img src="../assets/images/login-bg.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import valid from '@/utils/valid';
  export default {
    data(){
        return{
            clientHeight:'',
            email:'',
            code:'',
            passWord:'',
            confirmPassword:'',
            wait: "59",
            content: "获取邮箱验证码",
            canClick: true,
            timer: null,

        }
    },
    mounted() {
  
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`          //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    },
     watch: {
     // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
   methods:{
       //获取邮箱验证码
    sendEmail() {
      let msg = valid.isEmailValid(this.email);
      if (msg) {
        this.$message({
          message: msg,
          type: 'warning'
        });
        return;
      }

      this.$refs.sendEmail.setAttribute('disabled', 'disabled')
      this.$refs.sendEmail.style.cursor = "not-allowed"
              this.$api.emailCode({email: this.email}).then(res=>{
         if (res.message == '成功') {
          //  this.$refs.sendEmail.innerHTML='邮件发送，注意查收'
          if (!this.canClick) return
          this.canClick = false
          this.content = this.wait + 's后重新发送' //这里解决60秒不见了的问题
          let clock = window.setInterval(() => {
            this.wait--
              this.content = this.wait + 's后重新发送'
            if (this.wait < 0) { //当倒计时小于0时清除定时器
              window.clearInterval(clock)
              this.content = '获取邮箱验证码'
              this.wait = 60
              this.canClick = true
            }
          }, 1000)
        }
      })

    },
    //邮箱验证
    blurUserName(){
      let msg = valid.isEmailValid(this.email);
      if (msg) {
        this.$message({
          message: msg,
          type: 'warning'
        });
      }
    },
     //密码验证
    blurPassword() {
      let msg = valid.isPasswordValid(this.passWord);
      if (msg) {
        this.$message({
          message: msg,
          type: 'warning'
        });
      }

    },
    //密码确认验证
    blurConfirmPassword() {
      if (this.confirmPassword == '') {
        this.$message({
          message: '确认密码不能为空',
          type: 'warning'
        });
      } else if (this.passWord !== this.confirmPassword) {
        this.$message({
          message: '两次密码不匹配',
          type: 'warning'
        });
      }
    },

    changeFixed(clientHeight){                        //动态修改样式
      this.$refs.content.style.height = (clientHeight)+'px';

    },
    //重置密码
    reset(){
      let msg = valid.isEmailValid(this.email);
      if (msg) {
        this.$message({
          message: msg,
          type: 'warning'
        });
        return;
      }
      if(this.code==''){
          this.$message({
          message: '邮箱验证码不能为空',
          type: 'warning'
        });
        return;
      }
      let passMsg = valid.isPasswordValid(this.passWord);
      if (passMsg) {
        this.$message({
          message: passMsg,
          type: 'warning'
        });
        return;
      }

      this.blurConfirmPassword()
      if(this.email&&this.passWord&&this.code){
         this.$api.forgetPassword({email: this.email,
        passWord: this.passWord,
        code: this.code,
      }).then(res=>{
        var returnData = res.message
        if (returnData == '成功') {
          this.$router.push({ path: "/Login" });
        }
        else{
           this.$message({
          message: returnData,
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
.register-yzm{
margin-bottom: 20px
}
.findpassword{
      padding: 60px 0;
    background-color: #292f37 !important;display:flex;
    .button{width:100%}
  }  
.input-btn{
    background: #33383f;
    padding: 0 15px;
    cursor: pointer;
    border: none;
    outline: none;
    width: 120px;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
}
.container{ 
   
    display: flex;

    align-items: center;
    padding: 40px 0;

    justify-content: space-between;
    
    .left{       margin-right: 10.4%;
        .title{
            display: flex;position: relative;cursor: pointer;
            opacity: 0.8;
            font-family: "PingFangSC-Regular";
            font-size: 34px;
            color: #FFFFFF;
            margin-bottom: 40px;
            div{font-size: 16px;color: #4E9DFC;    position: absolute;
    left: 160px;
    bottom: 9px;}
        }
        .input-item{
            .input-wrapper{width: 500px;position: relative;

border-radius: 2px;    margin: 20px 0;

    input{
        font-size: 14px;
color: #A6A7AD;width:100%;
    }
}     
        }
        .reset-btn{background: #2286FF;cursor: pointer;
border-radius: 2px;font-size: 16px;
color: #FFFFFF;height: 48px;line-height: 48px;text-align: center}
.find-password{text-align: right;font-size: 16px;
color: #4E9DFC;
margin-top: 15px;cursor: pointer;}
    }
    .right{    flex: 1;
    text-align: right;}
}

</style>

