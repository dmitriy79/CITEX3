<template>
    <div>
         <div class="title"><span>手机认证</span></div>
          <div class="warm-tips">您尚未绑定手机，请先绑定手机！</div>
          <div class="tips">账户手机短信验证为您的账号资金带来第二重保护，登录、提现等操作时使用</div>
            <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="国家">
                        <el-select v-model="form.region" placeholder="中国大陆（China）+86">
                        <el-option label="BTC" value="shanghai"></el-option>
                        <el-option label="OKEX" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="手机号码" class="phone-number">
                       <span>+86</span> <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="资金密码">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="短信验证码" class="message-validate" >
                        <el-input v-model="form.name"></el-input><span @click="getMessage">{{content}}</span>
                    </el-form-item>
                    <div  class="bottom-btn">确定</div>
                </el-form >
                
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
                       wait:"59",
content:"获取短信验证码",
canClick: true,
   timer: null,
                  form: {
          name: '',
          region: '',
     
        
        }
        }
    },
    methods:{
        getMessage(){
            console.log("1")
            if(!this.canClick) return
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
                    },1000)
        }
    }
}
</script>

<style lang="less" scoped>
// .bottom-btn{
//         width: 132px;
//     margin-top: 40px;
//     height: 42px;
//     line-height: 42px;
//     background: #2286FF;
//     text-align: center;
//     border-radius: 2px;
//     font-size: 16px;
//     color: #FFFFFF;cursor: pointer;
// }
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
    .form-wrapper{padding: 0 20px;
   .message-validate,.phone-number{ 
        span{

    text-align: center;
    display: inline-block;
    background: #181f27;
    
   }  
    }
    .message-validate{
        .el-input{
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            width:37.5%!important;margin-left:-5px;
        }
        span{

    width: 140px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
        }
    }
    .phone-number{
        span{
            width: 60px;
            margin-left: 0;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        .el-input{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            width: 44%!important;margin-left:-5px;
        }
    }
    }
    .warm-tips{font-size: 16px;margin-bottom: 13px;padding: 0 20px;
color: #FF9535;}
.tips{
    font-size: 14px;padding: 0 20px;
color: #9E9FA6;
}
</style>
