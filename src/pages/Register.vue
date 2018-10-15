<template>
  <div class="register-wrapper">
    <div class="register" ref="content">
      <div class="container">
        <div class="left">
          <div class="title">欢迎注册
           
          </div>
          <div class="input-item">
            <div class="input-wrapper">
              <input type="email" placeholder="请输入邮箱" v-model="email">
              <button class="input-btn" @click="sendEmail" :plain="true" ref="sendEmail">{{content}}</button>
            </div>
            <div class="input-wrapper">
              <input type="text" placeholder="请输入邮箱验证码" v-model="code">
            </div>
            <div class="input-wrapper">
              <input type="password" placeholder="请输入密码" v-model="passWord" >
            </div>
            <div class="input-wrapper">
              <input type="password" placeholder="请输入确认密码" v-model="confirmPassword" >
            </div>
            <div id="register_yanzhengma" class="register-yzm"></div>
          </div>
          <div class="register-btn" @click="register">注册</div>

            <div class="select-wrapper">
              <div>
              <i :class="{active:this.agree}" @click="handleAgree" ref="isAgree"></i>我已仔细阅读并同意<span>《注册协议》</span>
              </div>
               <router-link to="/login" tag="div" class="login-btn">登陆</router-link>
            </div>
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
  data() {
    return {
      email: '',
      code: '',
      passWord: '',
      confirmPassword: '',
      inviteCode: '',
      agree: false,
      wait: "59",
      content: "获取邮箱验证码",
      canClick: true,
      timer: null,
    }
  },
  methods: {
    loadYanzhengma() {
      initNECaptcha({
        captchaId: '1ea48dc26ca240218216696392578acf',
        element: '#register_yanzhengma',
        mode: 'float',
        width: 500,
        onVerify: function(err, ret) {
          if (!err) {
            console.log(ret)
            localStorage.setItem('registerYanzhengma', ret.validate)

            // ret['validate'] 获取二次校验数据
          }
        }
      }, function onload(instance) {
        localStorage.setItem('registerYanzhengma', '')
        // 初始化成功后，用户输入对应用户名和密码，以及完成验证后，直接点击登录按钮即可
      }, function onerror(err) {
        localStorage.setItem('registerYanzhengma', '')
        // 验证码初始化失败处理逻辑，例如：提示用户点击按钮重新初始化
      })

    },
    //是否勾选注册协议
    handleAgree() {
      this.agree = !this.agree
    },
    //邮箱验证
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
              this.$refs.sendEmail.removeAttribute('disabled')
            this.$refs.sendEmail.style.cursor = "pointer"
            }
          }, 1000)
        }
      })

    },

    //密码验证
    blurPassword() {
      let passMsg = valid.isPasswordValid(this.passWord);
      if (passMsg) {
        this.$message({
          message: passMsg,
          type: 'warning'
        });
        return;
      }

    },
    //密码确认验证
    blurConfirmPassword() {
      let passMsg = valid.isPasswordValid(this.passWord);
      if (passMsg) {
        this.$message({
          message: passMsg,
          type: 'warning'
        });
        return;
      }
    },
    //注册
    register() {
      if (this.$refs.isAgree.className == '') {
        this.$message({
          message: '请勾选同意注册协议',
          type: 'warning'
        });
      }

      let msg = valid.isEmailValid(this.email);
      if (msg) {
        this.$message({
          message: msg,
          type: 'warning'
        });
        return;
      }
      if (this.code == '') {
        //    alert("请输入邮箱");
        this.$message({
          message: '邮箱验证码不能为空',
          type: 'warning'
        });
      }

      let passMsg = valid.isPasswordValid(this.passWord);
      if (passMsg) {
        this.$message({
          message: passMsg,
          type: 'warning'
        });
        return;
      }
      if(this.confirmPassword==''){
        this.$message({
          message: '确认密码不能为空',
          type: 'warning'
        });
        return;
      }
      if(this.confirmPassword!==this.passWord){
        this.$message({
          message: '两次输入的密码不一致',
          type: 'warning'
        });
        return;
      }
      this.blurConfirmPassword()
      if(localStorage.getItem('registerYanzhengma')==''){
         this.$message({
          message: '请选择滑动验证码',
          type: 'warning'
        });
      }
      console.log(localStorage.getItem('registerYanzhengma'),'222')
      if(this.email!==''&&this.code!==''&&this.$refs.isAgree.className!==''){
              this.$api.register({email: this.email,
          passWord: this.passWord,
          code: this.code,
          NECaptchaValidate: localStorage.getItem('registerYanzhengma')}).then(res=>{
            var returnData = res.message
             if (returnData == '成功') {
              this.$router.push({ path: "/Login" });
              return
            }
             this.$message({
          message: returnData,
          type: 'warning'
        });
        this.loadYanzhengma()
          })
      }
    }
  },
  mounted() {
    this.loadYanzhengma()
  }
}

</script>
<style lang="less" scoped>
.register-yzm {
  margin-bottom: 20px
}
.login-btn{cursor: pointer;}

.register {
  background: #292f37;
  padding:60px 0;
  display: flex;
  align-items: center;
  .container{
    display:flex;
    align-items:center;
    justify-content: space-between;
  }
}

.left {
  margin-right: 10.4%;
  .title {
    display: flex;
    position: relative;
    cursor: pointer;
    opacity: 0.8;
    font-family: "PingFangSC-Regular";
    font-size: 34px;
    color: #FFFFFF;
    margin-bottom: 40px;
    div {
      font-size: 16px;
      color: #4E9DFC;
      position: absolute;
      left: 160px;
      bottom: 9px;
    }
  }
   .select-wrapper {
      font-size: 14px;
      color: #A6A7AD;
      margin-bottom: 17px;
      display:flex;
      justify-content: space-between;
      align-items:center;
      padding-top:30px;
      i {
        margin-right: 8px;
        display: inline-block;
        width: 14px;
        height: 14px;
        background: #d4d5d7;
        cursor: pointer;
        position: relative;
        &.active::after {
          content: "";
          height: 7px;
          left: 5px;
          position: absolute;
          top: 2px;
          width: 3px;
          border-bottom: 1px solid #2286FF;
          border-right: 1px solid #2286FF;
          transform: rotate(38deg);
        }
      }
      span {
        font-size: 14px;
        cursor: pointer;
        color: #4E9DFC;
      }
    }  
  .input-item {
 
    .input-wrapper {
      width: 500px;
      position: relative;
      margin-bottom: 19px;
      .input-btn {
        background: #33383f;
        position: absolute;
        right: 0;
        padding: 0 15px;
        cursor: pointer;
        border: none;
        outline: none;
        width:120px;
        color: #fff;
        position:absolute;
        right:0;
        top:0;
        bottom:0;
        &:hover{
          background:#2286FF;
          color:#fff;
        }
      }
      input {
        font-size: 14px;
        color: #A6A7AD;
        width: 100%
      }
    }
  }
  .register-btn {
    background: #2286FF;
    cursor: pointer;
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;
    height: 48px;
    line-height: 48px;
    text-align: center
  }
}

.right {
  flex: 1;
  text-align: right;
}

</style>
