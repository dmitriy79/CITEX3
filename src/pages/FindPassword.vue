<template>
    <div class="login-wrapper">
        <v-header></v-header>
        <div class="findpassword">
            <div class="container" ref="content">
            <div class="left">
                <div class="title">找回密码</div>
                <div class="input-item">
                    <div class="input-wrapper">
                         <input type="text" placeholder="请输入邮箱" v-model="userName" v-on:blur="blurUserName">
                    </div>
                    <div class="input-wrapper">
                         <input type="text" placeholder="请输入邮箱验证码" v-model="userName" v-on:blur="blurUserName"><button class="input-btn"  :plain="true" ref="sendEmail">获取验证码</button>
                    </div>
                   <div class="input-wrapper">
                       <input type="password" placeholder="重置密码（英文+中文不少于6位）" v-model="passWord" >
                   </div>
                     <div class="input-wrapper">
                       <input type="password" placeholder="确认密码" v-model="passWord" >
                   </div>
                </div>
                <div class="button" >重置</div>
               
            </div>
            <div class="right">
                <img src="../assets/images/login-bg.png" alt="">
            </div>
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
  
      changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight,'w9999999');
        this.$refs.content.style.height = (clientHeight-480)+'px';

      },

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

