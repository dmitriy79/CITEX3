<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="container">
        <div class="login-form">

          <h1>欢迎登录</h1>
          <div class="input-wrapper">
            <input type="text" placeholder="请输入邮箱" v-model="userName" v-on:blur="blurUserName">
          </div>
          <div class="input-wrapper">
            <input type="password" placeholder="请输入密码" v-model="passWord">
          </div>
          <div id="register_yanzhengma" class="register-yzm"></div>

      <div class="input-bar">
            <!-- <a class="find-password">忘记密码？</a> -->
             <router-link to="/find-password" tag="a" class="find-password">忘记密码？</router-link>
            <router-link to="/register" tag="a">注册</router-link>
          </div>          
          <div class="button" @click="login">登录</div>
    
        </div>
        <div class="login-img">
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
        clientHeight: '',
        userName: '',
        passWord: ''
      }
    },
    mounted() {
      this.loadYanzhengma()
      // 获取浏览器可视区域高度
      this.clientHeight = `${document.documentElement.clientHeight}` //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    },
    watch: {
    },
    methods: {
      //邮箱验证
      blurUserName() {
        let msg = valid.isEmailValid(this.userName);
        if (msg) {
          this.$message({
            message: msg,
            type: 'warning'
          });
        }
      },
      //登陆滑动验证码
      loadYanzhengma() {
        initNECaptcha({
          captchaId: '1ea48dc26ca240218216696392578acf',
          element: '#register_yanzhengma',
          mode: 'float',
          width: 400,
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
      //登陆
      login() {
        let msg = valid.isEmailValid(this.userName);
        if (msg) {
          this.$message({
            message: msg,
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
        // var url = `/api/user/login`
        this.$api.login({
          userName: this.userName,
          passWord: this.passWord,
          NECaptchaValidate: localStorage.getItem('registerYanzhengma')
        }).then(res => {
          var returnData = res.message
          var datasList = res.datas.split("|")
          var token = datasList[0];
          localStorage.setItem("token", token)
          localStorage.setItem("userName", this.userName)
          localStorage.setItem("loginPassword", this.passWord)
          if (returnData !== '成功') {
            this.$message({
              message: returnData,
              type: 'warning'
            });
            this.loadYanzhengma()
          }

          if (returnData == '成功') {
            this.$router.push({
              path: "/"
            });
            window.location.reload();
          }
        })
      }
    }
  }

</script>
<style lang="less" scoped>
html,body{
  
}
.register-yzm {
  margin-bottom: 20px
}

.login {
  background-color:#292f37 !important;
    padding:60px 0;
  .button {
    width: 100%;
  }
  &-logo {
    font-size:32px;
    color: #fff;
    margin-bottom: 40px;
  }
  &-form {
    width: 400px;
    h1{
      color:lighten(#292F37,80%);
      font-size:34px;
      color:#fff;
      opacity: 0.8;
      margin-bottom: 40px
    }
    input {
      width: 100%;
    }
  }
}

.input {
  &-wrapper {
    margin: 20px 0;
      input {
        font-size: 14px !important;
      }
  }
  &-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>a {
      font-size: 12px;
      padding: 20px 0;
      font-size:12px;
      cursor:pointer;
      &:hover{
        color:#fff;
      }
    }
  }
}

.container {
  display: flex;
  // align-items: center;

  justify-content: space-between;
}


.yidun{
  &_tips{
    background:#333;
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
  .input-item {
    .input-wrapper {
      width: 510px;
      height: 48px;

      line-height: 48px;
      padding-left: 8px;
      border-radius: 2px;
      margin-bottom: 19px;

      input {
        font-size: 14px;
        color: #A6A7AD;
        width: 100%;
      }
    }
  }
  .login-btn {
    background: #2286FF;
    cursor: pointer;
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;
    height: 48px;
    line-height: 48px;
    text-align: center
  }
  .find-password {
    text-align: right;
    font-size: 16px;
    color: #4E9DFC;
    margin-top: 15px;
    cursor: pointer;
  }
}

.right {
  flex: 1;
  text-align: right;
}

</style>
