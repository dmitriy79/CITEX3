<template>
    <div class="register-wrapper">
        <v-header></v-header>
        <div class="content" ref="content">
            <div class="left">
                <div class="title">欢迎注册<router-link to="/login" tag="div">登陆</router-link></div>
                <div class="input-item">
                    <div class="input-wrapper">
                         <input type="text" placeholder="请输入邮箱"><span class="input-btn">获取邮箱验证码</span>
                    </div>
                     <div class="input-wrapper">
                       <input type="text" placeholder="请输入邮箱验证码">
                   </div>
                   <div class="input-wrapper">
                       <input type="text" placeholder="请输入密码">
                   </div>
                    <div class="input-wrapper">
                       <input type="text" placeholder="请输入确认密码">
                   </div>
                   <div class="input-wrapper">
                       <input type="text" placeholder="请输入密码"><span class="input-btn">2359</span>
                   </div>
                   <div class="input-wrapper">
                       <input type="text" placeholder="邀请码（非必填）">
                   </div>
                   <div class="select-wrapper">
                      <i></i>我已仔细阅读并同意<span>《注册协议》</span>
                   </div>
                </div>
                <div class="register-btn">注册</div>
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
           
        }
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
    padding: 180px 20% 158px 15%;
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
            .select-wrapper{font-size: 14px;
color: #A6A7AD;margin-bottom:17px;
                i{margin-right: 8px;
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    background:#d4d5d7;
                    cursor: pointer;position: relative;
                    &::after{
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
                span{font-size: 14px;cursor: pointer;
color: #4E9DFC;}
            }
            .input-wrapper{width: 510px;height: 48px;background: rgba(25,31,39,0.80);position: relative;
box-shadow: inset 0 1px 3px 0 rgba(34,134,255,0.10);line-height: 48px;padding-left: 8px;
border-radius: 2px;margin-bottom: 19px;
.input-btn{
    background: #33383f;position: absolute;right: 0;padding: 0 15px;cursor: pointer;
}
    input{
        font-size: 14px;
color: #A6A7AD;
    }
}     
        }
        .register-btn{background: #2286FF;
border-radius: 2px;font-size: 16px;
color: #FFFFFF;height: 48px;line-height: 48px;text-align: center}
    }
    .right{    flex: 1;
    text-align: right;}
}

</style>

