<template>
<div>
     <div class="title"><span>谷歌验证</span></div>
     <div class="wrapper">
       
        <div class="step">第一步: 根据您的手机系统类型，下载并安装谷歌验证器</div>
        <div class="img-wrapper">
            <img src="../../assets/images/yz.png" alt=""><img src="../../assets/images/yz.png" alt="">
        </div>
        <div class="step">第二步: 使用谷歌验证APP扫描一下二维码，或添加密文进行手工验证</div>
        <div class="step_">操作方法：在“Google Authenticator (谷歌身份验证器)” App中，点击“添加新账户 (iOS 下是 + 号)”->“扫描条形码”，扫描以下二维码 或 点击“输入提供的密钥”，手动输入以下密钥。</div>
        <img src="../../assets/images/ewm.png" alt="" class="ewm">
       <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    
                    <el-form-item  class="secret-text" >
                       <span class="secret">密文</span> <el-input v-model="form.name"></el-input>  <span class="refresh">刷新</span>
                    </el-form-item>
                    <div class="step">第三步: 填入手机显示的动态密码以激活谷歌两步验证： </div>
                    <div class="step">谷歌身份验证器配置完成后，会显示一个 6 位数字，每隔 30 秒变化一次。这个数字即为您的谷歌验证码。</div>
                    <el-form-item label="谷歌验证码">
                        <el-input v-model="form.name" placeholder="请输入程序上显示的6位数谷歌验证码"></el-input>
                    </el-form-item>
                    <el-form-item label="资金密码">
                        <el-input v-model="form.name" type="password"></el-input>
                    </el-form-item>
                    <div  class="bottom-btn">启用</div>
                </el-form >
                
            </div>
    </div>
</div>
   
</template>
<script>
export default {
    data(){
        return{
         form: {
          name: '',
          region: '',
        }
        }
    }
}
</script>
<style lang="less" scoped>
.secret-text {
   .secret,.refresh{ background: #181f27;text-align: center;cursor: pointer;}
   .el-input{margin-left: -4px;width: 40.5%!important}
    .refresh{    margin-left: -4px;}
}
.secret{
        width: 44px;display: inline-block;
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.refresh{
      width: 44px;display: inline-block;
    margin-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.img-wrapper{
    img{margin-right: 20px}
}
.ewm{margin: 18px 0}
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
    .wrapper{padding: 0 20px}
    .step{font-size: 15px;
line-height: 30px;}
.step_{font-size: 14px;}
.img-wrapper{margin: 10px 0 18px 0;}
</style>
