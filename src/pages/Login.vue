<template>
    <div class="login-wrapper">
        <v-header></v-header>
        <div class="content" ref="content">
            <div class="left">
                <div class="title">欢迎登录<router-link to="/register" tag="div">注册</router-link></div>
                <div class="input-item">
                    <div class="input-wrapper">
                         <input type="text" placeholder="请输入邮箱" v-model="userName" v-on:blur="blurUserName">
                    </div>
                   <div class="input-wrapper">
                       <input type="password" placeholder="请输入密码" v-model="passWord" >
                   </div>
                    <div id="register_yanzhengma" class="register-yzm"></div>
                </div>
                <div class="login-btn" @click="login">登录</div>
                <div class="find-password">忘记密码</div>
            </div>
            <div class="right">
                <img src="../assets/images/login-bg.png" alt="">
            </div>
        </div>
        <div class="footer">
             <v-footer></v-footer>
        </div>
       
    </div>
</template>
<script>
import VHeader from "../components/Header";
import VFooter from "../components/Footer";
export default {
    data(){
        return{
            clientHeight:'',
            userName:'',
            passWord:''
        }
    },
    mounted() {
          this.loadYanzhengma()
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
       //邮箱验证
       blurUserName(){
           var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if(this.userName==''){
                //    alert("请输入邮箱");
                   this.$message({
                    message: '请输入邮箱',
                    type: 'warning'
                    });
                }else if(!regEmail.test(this.userName)){
                    // alert("邮箱格式不正确");
                    this.$message({
                    message: '请输入正确的邮箱',
                    type: 'warning'
                    });
                }
       },
        //密码验证
        /*    blurPassword(){
               var  regExp=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
               
                 if(this.passWord==''){
                     this.$message({
                    message: '密码不能为空',
                    type: 'warning'
                    });
                 }
                 else if(!regExp.test(this.passWord)){
                        this.$message({
                    message: '密码是数字和字母组合，不能小于6位',
                    type: 'warning'
                    });
                    
                }
              
            },*/
       //登陆滑动验证码
                 loadYanzhengma() {
                initNECaptcha({
                    captchaId: '1ea48dc26ca240218216696392578acf',
                    element: '#register_yanzhengma',
                    mode: 'float',
                    width: 510,
                    onVerify: function (err, ret) {
                            if (!err) {
                                console.log(ret)
                            localStorage.setItem('registerYanzhengma', ret.validate)
                        
                            // ret['validate'] 获取二次校验数据
                            }
                    }
                    }, function onload (instance) {
                        localStorage.setItem('registerYanzhengma', '')
                    // 初始化成功后，用户输入对应用户名和密码，以及完成验证后，直接点击登录按钮即可
                    }, function onerror (err) {
                        
                        localStorage.setItem('registerYanzhengma', '')
                    // 验证码初始化失败处理逻辑，例如：提示用户点击按钮重新初始化
                    })

                },
      changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight,'w9999999');
        this.$refs.content.style.height = (clientHeight-311)+'px';

      },
      //登陆
      login(){
          var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if(this.userName==''){
            //    alert("请输入邮箱");
                this.$message({
                message: '邮箱不能为空',
                type: 'warning'
                });
                return
            }
            if(!regEmail.test(this.userName)){
                // alert("邮箱格式不正确");
                this.$message({
                message: '请输入正确的邮箱',
                type: 'warning'
                });
                return
            }
        
             var  regExp=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
               
                 if(this.passWord==''){
                     this.$message({
                    message: '密码不能为空',
                    type: 'warning'
                    });
                         return
                 }
                if(!regExp.test(this.passWord)){
                        this.$message({
                    message: '密码是数字和字母组合，不能小于6位',
                    type: 'warning'
                    });
                        return 
                }
            var url=`/api/user/login`
            this.$http.get(url,{
                     params: {
                        userName: this.userName,
                        passWord:this.passWord,
                         NECaptchaValidate:localStorage.getItem('registerYanzhengma'),
                    }
                },
            {
		      headers:{"Content-Type": "application/json"}}).then(res => {
                  console.log(res)
                 var returnData= res.data.message
                let token = JSON.stringify(res.data.datas)
                localStorage.setItem("token",token)
                localStorage.setItem("userName",this.userName)
                if(returnData!=='成功'){
                       this.$message({
                    message: returnData,
                    type: 'warning'
                    });
                    this.loadYanzhengma()
                }
             
                if(returnData=='成功'){
                    this.$router.push({path:"/"});
                }
                
                
            })
      }
    },
    components: {
        VHeader,
        VFooter,
    }
}
</script>
<style lang="less" scoped>
.register-yzm{
margin-bottom: 20px
}
.content{
    background: #292f37;
    padding: 0 20% 0 15%;
    display: flex;
    align-items: center;
//    background:#292f37 url("~@/assets/images/login-bg.png") no-repeat 74% center;
    .left{margin-right: 10.4%;
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
            .input-wrapper{width: 510px;height: 48px;background: rgba(25,31,39,0.80);
box-shadow: inset 0 1px 3px 0 rgba(34,134,255,0.10);line-height: 48px;padding-left: 8px;
border-radius: 2px;margin-bottom: 19px;

    input{
        font-size: 14px;
color: #A6A7AD;width:100%;
    }
}     
        }
        .login-btn{background: #2286FF;cursor: pointer;
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

