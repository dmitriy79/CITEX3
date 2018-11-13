<template>
    <div>
        <div class="title"  v-if="isShow"><span>身份认证</span></div>
        <div class="title"  v-if="isShow1"><span>证件上传</span></div>
        <div v-if="isAssess">
          <div class="identity-wrapper" v-if="isShow"> 
            <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="选择地区" >
                        <el-radio v-model="radio" label="1" @change="selectRegin">中国大陆地区</el-radio>
                        <el-radio v-model="radio" label="2" @change="selectRegin">其他国家及地区</el-radio>
                    </el-form-item>
                    <el-form-item label="姓氏">
                        <el-input v-model="form.surname" maxlength="20" ></el-input>
                    </el-form-item>
                    <el-form-item label="名字">
                        <el-input v-model="form.name" maxlength="40" ></el-input>
                    </el-form-item>
                    <el-form-item label="国籍" v-if="show">
                        <el-select v-model="form.country" placeholder="请选择" @change="selectCountry" >
                        <!-- <el-option label="中国" value="1"></el-option> -->
                        <el-option label="新加坡" value="2"></el-option>
                        <el-option label="美国" value="3"></el-option>
                        <el-option label="印度" value="4"></el-option>
                        <el-option label="德国" value="5"></el-option>
                        <el-option label="韩国" value="6"></el-option>
                        <el-option label="日本" value="7"></el-option>
                        <el-option label="巴西" value="8"></el-option>
                        <el-option label="越南" value="9"></el-option>
                        <el-option label="巴基斯坦" value="10"></el-option>
                        <el-option label="其他" value="11"></el-option>
                        </el-select>
                    </el-form-item>

                    <!-- <el-form-item label="证件类型"  v-if="show">
                        <el-select v-model="form.type" placeholder="请选择" @change="selectType">
                        <el-option label="身份证" value="1"></el-option>
                        <el-option label="护照" value="2"></el-option>
                        </el-select>
                    </el-form-item> -->
                   
                    <el-form-item label="证件号码" v-if="!show">
                        <el-input v-model="form.number" @keyup.native="proving" maxlength="18" ></el-input>
                    </el-form-item>
                    <el-form-item label="护照ID" v-if="show">
                        <el-input v-model="form.passportId" @keyup.native="proving" maxlength="20" ></el-input>
                    </el-form-item>
                    <div  class="bottom-btn" @click="next">下一步</div>
                </el-form >
                
            </div>
            <div class="tips">
                <p>注：实名认证分为两步</p>
                <p>第一步：身份认证，请保持您使用本人的真实身份进行验证,我们会保护您的个人信息安全</p>
                <p>第二步：证件上传，请准备身份证正反面照片以及手持身份证正面照和个人签字照</p>
            </div>
        </div>

               <div class="upload-wrapper" v-if="isShow1"><!--v-if="!isShow"-->
          
            <div class="mark">注：请确保照片的内容完整并清晰可见，支持jpg，JPEG，png图片格式。</div>
            <div class="identity-wrapper" v-if="showImg">  <!-- v-if="showImg"-->
              <div class="content" >
                <div  class="content-item">
                    <div class="default-wrapper" >
                     <!-- 
                        <i class="plus-icon"  v-if="!file" ></i><span>身份证正面</span>
                        <input type="file" class="file" @change="uploadChange"/> -->
                      <el-upload 
                        class="avatar-uploader"
                        action="/user/oss/upload"
                        :show-file-list="false"
                        :on-success="handleSuccess1"
                        :before-upload="() => {}">
                        <img v-if="imgUrl1" :src="imgUrl1" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i><span>身份证正面</span>
                      </el-upload>
                      
                    </div>
                    
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="@/assets/images/sfzz.png" alt="">
                    </div>
                </div>
                

                <!-- <div v-if="!file">
			  			<img src="../../../static/images/add-logo.png"/>
			  		</div>
			  		<div v-else>
			  			<img :src="imgUrl"/>
			  		</div>
          	<input type="file" class="file" @change="uploadChange"/> -->
            </div>
            <div class="content content_">
                <div  class="content-item">
                     <div  class="default-wrapper">
                   
                        <el-upload
                        class="avatar-uploader"
                        action="/user/oss/upload"
                        :show-file-list="false"
                        :on-success="handleSuccess2"
                        :before-upload="() => {}">
                        <img v-if="imgUrl2" :src="imgUrl2" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i><span>身份证反面</span>
                      </el-upload>
                    </div>
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="@/assets/images/sfzf.png" alt="">
                        
                    </div>
                </div>
               
            </div>
           
            <div class="content content_">
                <div class="content-item">
                    <div  class="default-wrapper">
                      <el-upload
                        class="avatar-uploader"
                        action="/user/oss/upload"
                        :show-file-list="false"
                        :on-success="handleSuccess3"
                        :before-upload="() => {}">
                        <img v-if="imgUrl3" :src="imgUrl3" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i><span>手持身份证正面和个人签字</span>
                      </el-upload>
                      
                    </div>
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="@/assets/images/scsfz.png" alt="">

                    </div>
                </div>
                
            </div>
            </div>
            <div class="passport-wrapper" v-if="!showImg">
              <div class="content">
                <div  class="content-item">
                    <div class="default-wrapper">
                      <el-upload
                        class="avatar-uploader"
                        action="/user/oss/upload"
                        :show-file-list="false"
                        :on-success="handleSuccess4"
                        :before-upload="() => {}">
                        <img v-if="imgUrl4" :src="imgUrl4" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i><span>护照正面</span>
                      </el-upload>
                      
                      </div>
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="@/assets/images/hz.png" alt="">
                    </div>
                </div>
                
            </div>
            <div class="content">
                <div  class="content-item">
                    <div class="default-wrapper">
                       <el-upload
                        class="avatar-uploader"
                        action="/user/oss/upload"
                        :show-file-list="false"
                        :on-success="handleSuccess5"
                        :before-upload="() => {}">
                        <img v-if="imgUrl5" :src="imgUrl5" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i><span>护照反面</span>
                      </el-upload>
                      </div>
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="@/assets/images/sfzf.png" alt="">
                    </div>
                </div>
                
            </div>
            <div class="content content_">
                <div class="content-item">
                    <div  class="default-wrapper">
                      <el-upload
                        class="avatar-uploader"
                        action="/user/oss/upload"
                        :show-file-list="false"
                        :on-success="handleSuccess6"
                        :before-upload="() => {}">
                        <img v-if="imgUrl6" :src="imgUrl6" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i><span>手持护照正面和个人签字</span>
                      </el-upload>
                  
                    </div>
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="@/assets/images/scsfz.png" alt="">

                    </div>
                </div>
                
            </div>
            </div>
             <div  class="bottom-btn"  @click="confirm">确定</div>
        </div>
        </div>

      <div  class="wrapper" v-if="assess">
         <img src="@/assets/images/assess.png" alt="">
          <div class="text-o">
            <span>您提交的个人信息已经通过审核</span> 
            <div class="tips">您已成功成为ib.top交易平台的实名认证，并拥有平台提币的资质。为构建健康、和谐、安全的平台环境，请您务必遵守《ibtop.com渠道服务商服务协议》</div>
          <div  class="bottom-btn" ><router-link to="/transaction" tag="div">去交易</router-link></div>

          </div>
          
           <!-- <el-form ref="form" :model="form" label-width="80px" >
              <el-form-item label="姓名" >
                  <el-input v-model="form.cardName" disabled ></el-input>
              </el-form-item>
              <el-form-item label="证件类型" >
                  <el-select v-model="form.cardType"  disabled>
                  <el-option label="身份证" value="1"></el-option>
                  <el-option label="护照" value="2"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="证件号码" >
                  <el-input v-model="form.cardNum" disabled></el-input>
              </el-form-item>
           </el-form> -->
      </div>
       <div  class="wrapper" v-if="assessing">
         <img src="@/assets/images/assessing.png" alt="">
          <div class="text-o">
            <span>您的实名认证申请正在审核中</span> 
            <div class="tips">您提供的实名认证信息需人工审核，正在审核中，请您耐心等待</div>
          </div>
      </div>
      <div  class="wrapper" v-if="noAssess">
         <img src="@/assets/images/no-assess.png" alt="">
          <div class="text-o">
            <span>很遗憾，您的实名认证申请未通过审核</span> 
            <div class="tips">由于您提供的申请信息不符合实际，实名认证申请未通过审核，请核实信息后重新提交申请。</div>
          <div  class="bottom-btn" @click="resubmit">重新提交申请</div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      assess:false,//实名认证是通过
      fontAddress:'',//正面照片
      backAddress:'',//反面照片
      handAddress:'',//手持
      imgUrl1:'',
      imgUrl2:'',
       imgUrl3:'',
      imgUrl4:'',
      imgUrl5:'',
      imgUrl6:'',
      	file:'',
      showImg:true,
        radio: '1',
      isShow: true,
      isShow1: false,
      countryType:'',
      reginVal:1,
      type:0,
      realName:'',
      show:false,
      isAssess:true,
      assessing:false,
      noAssess:false,
      imgData: {
            accept: 'image/gif, image/jpeg, image/png, image/jpg',
       },
      form: {
         cardName:'',
        number: "",
        surname:'',
        cardNum:'',
        name:'',
      passportId:'',
        country:'',
       
      }
    };
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    resubmit(){
      this.isShow=true
    },
     handleSuccess1(file){
      this.imgUrl1=file.datas
    },
      handleSuccess2(file){
      this.imgUrl2=file.datas
    },
       handleSuccess3(file){
      this.imgUrl3=file.datas
    },
       handleSuccess4(file){
      this.imgUrl4=file.datas
    },
       handleSuccess5(file){
      this.imgUrl5=file.datas
    },
       handleSuccess6(file){
      this.imgUrl6=file.datas
    },

    //获取用户信息
      getUserInfo(){
            this.$api.getValidateById().then(res=>{
                console.log(res,'我是用户信息')
                var content =res.datas
             this.form.cardName=content.user_real_name
             this.form.cardNum=content.document_id
             console.log(content.validate,'content.validate')
             if(content.document_type==1){
               this.form.cardType='身份证'
             }
             if(content.document_type==2){
               this.form.cardType='护照'
             }
             if(content.validate==0){
               this.noAssess=true
                this.isShow=false
                this.isShow1=false
             }
             if(content.validate==1){
               this.assess=true
                this.isShow=false
                this.isShow1=false
             }
             if(content.validate==2){
                this.isShow=false
                this.isShow1=false
               this.assessing=true
             }
            if(content.validate==null){
               this.isShow=true
                this.isShow=true
                this.isShow1=false
             }
            
            //  this.form.cardType=
            /*    if(content.validate==1){
                    this.isAssess=false
                }
                else{
                   this.isAssess=true 
                }*/
               
            })
        },
//      验证只能输入数字
      proving(){
        this.form.passportId=this.form.passportId.replace(/[^\d]/g,'');
        
      },
      //选择地区
      selectRegin(val){
        console.log(val,'地区')
        this.reginVal=val
         if(val==1){
          this.show=false
          this.showImg=true
         }
         else{
           this.showImg=false  
   this.show=true
         }
      },
      //选择国籍
      selectCountry(val){
          this.countryType=val
       console.log(val)

      },
    //选择证件类型
    selectType(val){
       this.type=val
       console.log(val)
    },
    next() {
      var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if(this.show){
        if(this.form.passportId==''){
          this.$message({
          message: "护照不能为空",
          type: "warning"
        });
        return
      }
      }
       
     
      if (!regIdNo.test(this.form.number)&&this.reginVal==1) {
        this.$message({
          message: "身份证号填写有误",
          type: "warning"
        });
        return
      }
          if(this.form.number==''&&this.reginVal==1){
          this.$message({
          message: "身份证号不能为空",
          type: "warning"
        });
        return
      }
       if(this.form.name==''){
          this.$message({
          message: "名字不能为空",
          type: "warning"
        });
        return
      }
      if(this.form.surname==''){
          this.$message({
          message: "姓氏不能为空",
          type: "warning"
        });
        return
      }
     if(this.countryType==0&&this.reginVal==2){
          this.$message({
          message: "请选择国籍",
          type: "warning"
        });
        return
     }
     
     
      this.realName=this.form.surname+this.form.name
      if(this.reginVal==1){
        this.countryType=1
        this.type=1
      }
      else{
        this.type=2
      }
      if(this.reginVal==1){
         if(this.form.name&&this.form.surname&&this.countryType&&this.form.number&&this.type){
           this.$api.audit(
         {user_real_name:this.realName,country_id:this.countryType,document_id:this.form.number,document_type:this.type}
         ).then(res=>{
              if(res.message=='成功'){
                this.$message({
                message: "提交成功",
                type: "success"
                }); 
               this.isShow=false
               this.isShow1=true
           }
           else{
              this.$message({
                message: res.message,
                type: "warning"
                }); 
           }
         })
      }
      }
      else{
         if(this.realName&&this.countryType&&this.form.passportId&&this.type){
           this.$api.audit(
         {user_real_name:this.realName,country_id:this.countryType,document_id:this.form.passportId,document_type:this.type}
         ).then(res=>{
              if(res.message=='成功'){
                this.$message({
                message: "提交成功",
                type: "success"
                }); 
               this.isShow=false
               this.isShow1=true
           }
         })
      }
      }
     
  
      // this.isShow=false
      // this.$refs.title.innerHTML="证件上传"
    },
    //确认上传图片
    confirm(){
      console.log(this.imgUrl1,'this.imgUrl1')
      if(this.reginVal==1){
        this.fontAddress=this.imgUrl1
        this.backAddress=this.imgUrl2
        this.handAddress=this.imgUrl3
        this.countryType=1
        this.document_id=this.form.number
        this.document_type=1
        if(this.fontAddress==''){
        this.$message({
                message: '请上传身份证正面图片',
                type: "warning"
                }); 
      }
       if(this.backAddress==''){
        this.$message({
                message: '请上传身份证反面图片',
                type: "warning"
                }); 
      }
      if(this.backAddress==''){
        this.$message({
                message: '请上传手持身份证图片',
                type: "warning"
                }); 
      }
      }
      else{
        this.fontAddress=this.imgUrl4
        this.backAddress=this.imgUrl5
        this.handAddress=this.imgUrl6
        this.document_id=this.form.passportId
        this.document_type=2
        if(this.fontAddress==''){
        this.$message({
                message: '请上传护照正面图片',
                type: "warning"
                }); 
      }
       if(this.backAddress==''){
        this.$message({
                message: '请上传护照反面图片',
                type: "warning"
                }); 
      }
      if(this.handAddress==''){
        this.$message({
                message: '请上传手持护照图片',
                type: "warning"
                }); 
      }
      }
      if(this.fontAddress&&this.backAddress&&this.handAddress){
        this.$api.saveIdtyImage({
        id_card_front:this.fontAddress,
        id_card_back:this.backAddress,
        id_card_hand:this.handAddress,
        user_real_name:this.realName,
        country_id:this.countryType,
        document_id:this.document_id,
        document_type:this.document_type,
        }).then(res=>{
          if(res.message=='success'){
            this.isShow1=false
            this.assessing=true
          }
          else{
                  this.$message({
                message: res.message,
                type: "warning"
                }); 
          }
      })
      }
      
    }
  }
};
</script>
<style>
.el-select {
    width: 50%!important;
}
.el-upload.el-upload--text,.avatar-uploader{height: 100%;    width: 100%;}
</style>

<style lang="less" scoped>
.el-icon-plus{    font-size: 25px;
    color: #fff;
    line-height: 200px;}
 .file{width: 100%;position:absolute;left: 0;top: 0;bottom: 0;opacity: 0;}
.wrapper{    display: flex;
    align-items: center;
    justify-content: center;
    height: 900px;
    .tips{font-size: 12px;
    color: #FFFFFF;
    line-height: 28px;
    opacity: 0.5;}
    .bottom-btn{
background: #54585e;height: 40px;    font-size: 14px;}
   
    .text-o{    width: 453px;
    margin-left: 105px;
     span{    font-size: 20px;
    margin-bottom: 13px;
    display: block;}}
    }
.plus-icon {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  background: #fff;
  margin-top: -11px;
  height: 22px;

  width: 2px;
}
.plus-icon:after {
  background: #fff;
  content: "";
  height: 22px;
  left: 0;
  position: absolute;
  top: 0;
  width: 2px;
  transform: rotateZ(90deg);
}
.mark {
  font-size: 13px;
  margin-bottom: 18px;
  color: #9e9fa6;
}
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
.identity-wrapper {
  position: relative;
  .tips {
    position: absolute;
    right: 2%;
    top: 40px;
    font-size: 13px;
    width: 46%;
    color: #9e9fa6;
  }
}
.form-wrapper,
.upload-wrapper {
  padding: 0 20px;
}
.content-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 40px;
  color: #40434f;
  .ico-hours {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 26px;
    margin-left: -13px;
    margin-top: -13px;
    cursor: pointer;
  }
  span {
    position: absolute;
    height: 30px;
    line-height: 30px;
    bottom: 0;
    text-align: center;
    left: 0;
    right: 0;
    background: #9e9fa6;
    color: #fff;
  }
}
.content_ {
  .content-item {
    margin-bottom: 18px;
  }
}
.default-wrapper {
  border: 1px solid #9e9fa6;
  width: 348px;
  height: 198px;
  position: relative;
  border-radius: 2px;
  img {
    width: 100%;
    height: 100%;
  }
}
.case {
  margin: 0 19px;
  color: #fff;
}
</style>