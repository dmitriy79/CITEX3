<template>
    <div class="login-wrapper">
        <v-header></v-header>
        <div class="content" ref="content">
            <div class="left">
                <div class="title">欢迎登录<router-link to="/register" tag="div">注册</router-link></div>
                <div class="input-item">
                    <div class="input-wrapper">
                         <input type="text" placeholder="请输入邮箱">
                    </div>
                   <div class="input-wrapper">
                       <input type="text" placeholder="请输入密码">
                   </div>
                    
                </div>
                <div class="login-btn">登录</div>
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
      changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight,'w9999999');
        this.$refs.content.style.height = (clientHeight-311)+'px';

      },
    },
    components: {
        VHeader,
        VFooter,
    }
}
</script>
<style lang="less" scoped>
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
color: #A6A7AD;
    }
}     
        }
        .login-btn{background: #2286FF;
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

