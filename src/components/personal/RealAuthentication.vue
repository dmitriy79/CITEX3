<template>
    <div>
        <div class="title"  v-if="isShow"><span>身份认证</span></div>
        <div class="title"  v-if="!isShow"><span>证件上传</span></div>
        <div class="identity-wrapper" v-if="isShow">
            
            <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="选择地区" >
                        <el-radio v-model="radio" label="1" @change="selectRegin">中国大陆地区</el-radio>
                        <el-radio v-model="radio" label="2" @change="selectRegin">其他国家及地区</el-radio>
                    </el-form-item>
                    <el-form-item label="姓氏">
                        <el-input v-model="form.surname"></el-input>
                    </el-form-item>
                    <el-form-item label="名字">
                        <el-input v-model="form.name"></el-input>
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
                        <el-input v-model="form.number"></el-input>
                    </el-form-item>
                    <el-form-item label="护照ID" v-if="show">
                        <el-input v-model="form.number"></el-input>
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
        <div class="upload-wrapper" v-if="!isShow">
          
            <div class="mark">注：请确保照片的内容完整并清晰可见，仅支持jpg图片格式。</div>
            <div class="identity-wrapper" v-if="showImg">
                         <div class="content">
                <div  class="content-item">
                    <div class="default-wrapper"><i class="plus-icon"></i><span>身份证正面</span></div>
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="../../assets/images/sfzz.png" alt="">
                    </div>
                </div>
                
            </div>
            <div class="content content_">
                <div  class="content-item">
                     <div  class="default-wrapper"><i class="plus-icon"></i><span>身份证反面</span></div>
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="../../assets/images/sfzf.png" alt="">
                        
                    </div>
                </div>
               
            </div>
            <div class="mark">注：请确保照片的内容完整并清晰可见，仅支持jpg图片格式。</div>
            <div class="content content_">
                <div class="content-item">
                    <div  class="default-wrapper"><i class="plus-icon"></i><span>手持身份证正面和个人签字</span></div>
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="../../assets/images/scsfz.png" alt="">

                    </div>
                </div>
                
            </div>
            </div>
            <div class="passport-wrapper" v-if="!showImg">
              <div class="content">
                <div  class="content-item">
                    <div class="default-wrapper"><i class="plus-icon"></i><span>身份证正面</span></div>
                    <div class="case">示例</div>
                    <div  class="default-wrapper">
                        <img src="../../assets/images/hz.png" alt="">
                    </div>
                </div>
                
            </div>
            </div>
             <div  class="bottom-btn" >确定</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showImg:true,
        radio: '1',
      isShow: true,
      countryType:'',
      reginVal:1,
      type:0,
      realName:'',
      show:false,
      form: {
        number: "",
        surname:'',
        name:'',
      
        country:''
      }
    };
  },
  methods: {
      //选择地区
      selectRegin(val){
        this.reginVal=val
         if(val==1){
          this.show=false
          this.showImg=true
         }
         else{
           this.showImg=true  
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
        console.log(this.type,'type00000')
      var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      
     
      if (!regIdNo.test(this.form.number)) {
        this.$message({
          message: "身份证号填写有误",
          type: "warning"
        });
          if(this.form.number==''){
          this.$message({
          message: "身份证号不能为空",
          type: "warning"
        });
      }
       if(this.form.name==''){
          this.$message({
          message: "名字不能为空",
          type: "warning"
        });
      }
      if(this.form.surname==''){
          this.$message({
          message: "姓氏不能为空",
          type: "warning"
        });
      }
     if(this.countryType==0&&this.reginVal==2){
          this.$message({
          message: "请选择国籍",
          type: "warning"
        });
     }
     
      }
      this.realName=this.form.surname+this.form.name
      if(this.reginVal==1){
        this.countryType=1
        this.type=1
      }
      else{
        this.type=2
      }
      if(this.realName&&this.countryType&&this.form.number&&this.type){
           this.$api.audit(
         {user_real_name:this.realName,country_id:this.countryType,document_id:this.form.number,document_type:this.type}
         ).then(res=>{
             console.log(res,'我是实名认证1111')
              if(res.data.message=='成功'){
                this.$message({
                message: "我是实名认证成功",
                type: "success"
                }); 
                setTimeout(this.isShow=false,1000)
           }
         })
      }
  
      // this.isShow=false
      // this.$refs.title.innerHTML="证件上传"
    }
  }
};
</script>
<style lang="less" scoped>
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