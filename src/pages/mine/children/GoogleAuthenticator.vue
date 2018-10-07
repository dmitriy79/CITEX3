<template>
<div>
     <div class="title"><span>谷歌验证</span></div>
     <div v-show="show" class="validate">您已绑定过谷歌验证码</div>
     <div class="wrapper" v-show="!show">
       
        <div class="step">第一步: 根据您的手机系统类型，下载并安装谷歌验证器</div>
        <div class="img-wrapper">
           <a class="item" target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2">
               
           </a>
           <a class="item_" target="_blank" href="https://itunes.apple.com/cn/app/google-authenticator/id388497605">
   
           </a>
           
        </div>
       
        <!-- <div id="qrcode"></div> -->
        <div class="step">第二步: 使用谷歌验证APP扫描一下二维码，或添加密文进行手工验证</div>
        <div class="step_">操作方法：在“Google Authenticator (谷歌身份验证器)” App中，点击“添加新账户 (iOS 下是 + 号)”->“扫描条形码”，扫描以下二维码 或 点击“输入提供的密钥”，手动输入以下密钥。</div>
        <!-- <img src="@/assets/images/ewm.png" alt="" class="ewm"> -->
        <div id="qrcode"></div>
       <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    
                    <el-form-item  class="secret-text" >
                     <span class="secret">密文</span> <el-input v-model="this.password" readonly></el-input>  <span class="refresh" @click="refresh">刷新</span>
                    </el-form-item>
                    <div class="step">第三步: 填入手机显示的动态密码以激活谷歌两步验证： </div>
                    <div class="step">谷歌身份验证器配置完成后，会显示一个 6 位数字，每隔 30 秒变化一次。这个数字即为您的谷歌验证码。</div>
                    <el-form-item label="谷歌验证码">
                        <el-input v-model="form.code" placeholder="请输入程序上显示的6位数谷歌验证码" maxlength="6" ></el-input>
                    </el-form-item>
                    <el-form-item label="交易密码">
                        <el-input v-model="form.tradePassword" type="password"></el-input>
                    </el-form-item>
                    <div  class="bottom-btn" @click="open">启用</div>
                </el-form >
                
            </div>
    </div>
    <!-- <div class="wrapper" v-if="show">
       
        
       <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    
                    
                    <el-form-item label="登录密码">
                        <el-input v-model="form.loginPassword" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="谷歌验证码">
                        <el-input v-model="form.code" type="text" placeholder="请输入程序上显示的6位数谷歌验证码"></el-input>
                    </el-form-item>
                    <div  class="bottom-btn" @click="close">停用</div>
                </el-form >
                
            </div>
    </div> -->
</div>
   
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
        show:false,
      ewm: "",
      password:'',
      form: {
       tradePassword:'',
       code:'',
       password:'',
       loginPassword:'',
      }
    };
  },
  mounted() {
   this.getValidateById()
    this.setGooleAutu();

  },
  methods: {
      //停用谷歌验证码
      close(){
        
      },
      //启用谷歌验证码
    open(){
      if(this.password==''){
        this.$message({
          message: "密文不能为空",
          type: "warning"
          }); 
      }
         if(this.form.tradePassword==''){
        this.$message({
          message: "交易密码不能为空",
          type: "warning"
          }); 
      }
        if(this.form.code==''){
        this.$message({
          message: "谷歌验证码不能为空",
          type: "warning"
          }); 
      }
      if(this.password&&this.form.tradePassword&&this.form.code){
         this.$api.enableGooleAutu({secret:this.password,tradePassword:this.form.tradePassword,code:this.form.code}).then(res=>{
     
           if(res.message=='成功'){
                this.$message({
                message: "谷歌验证成功",
                type: "success"
                }); 
                this.show=true
                // this.form.code=''
           }
           else{
                this.$message({
                message: res.message,
                type: "warning"
                });  
           }
           
           console.log(res,'我是启用谷歌验证码')
        })
      }
       
    },
    
    //刷新
    refresh(){
        this.setGooleAutu();
      
    },
    getValidateById(){
        this.$api.getValidateById().then(res=>{
            console.log(res,'ajjajajjajjajj_+++++')
            if(res.datas.google_auth_secret){
                console.log('shsjsjsjj++++++')
                this.show=true
            }
        })
    },
    //获取谷歌验证码
    setGooleAutu() {
      this.$api.setGooleAutu().then(res => {
        var content = decodeURIComponent(res.datas);
        // content.split("|")[0]
        this.password=content.split("|")[0]
        this.ewm = content.split("|")[1];
          document.getElementById('qrcode').innerHTML = '';
        let qrcode = new QRCode("qrcode", {
          width: 150,
          height: 150, // 高度
        //   text: this.ewm, // 二维码内容
        //   render: "table", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
          colorDark : "#000000",
          colorLight : "#ffffff",
        });
        qrcode.clear()
        qrcode.makeCode(this.ewm)
       
      });
    }
  }
};
</script>
<style>
#qrcode img{padding: 20px;background: #fff}
#qrcode canvas{height: 0!important;}
</style>

<style lang="less" scoped>
.validate{margin: 0 20px;}
#qrcode{margin:20px 0;}
.secret-text {
  .secret,
  .refresh {
    background: #181f27;
    text-align: center;
    cursor: pointer;
  }
  .el-input {
    margin-left: -4px;
    width: 40.5% !important;
  }
  .refresh {
    margin-left: -4px;
  }
}
.secret {
  width: 44px;
  display: inline-block;
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.refresh {
  width: 44px;
  display: inline-block;
  margin-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.img-wrapper {
  a {
    margin-right: 20px;
    background: url(../../../assets/images/yza.png);
    display: inline-block;
    width: 145px;
    height: 48px;
  }
  .item {
    background-position: -2px 2px;
  }
  .item_ {
    background-position: -164px 0;
  }
}
.ewm {
  margin: 18px 0;
}
.title {
  height: 40px;
  background: #1b222a;
  margin-bottom: 13px;
  span {
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
.wrapper {
  padding: 0 20px;
}
.step {
  font-size: 15px;
  line-height: 30px;
}
.step_ {
  font-size: 14px;
}
.img-wrapper {
  margin: 10px 0 18px 0;
}
</style>
