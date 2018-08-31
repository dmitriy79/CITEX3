<template>
    <div>
        <div class="identity-wrapper" v-if="isShow">
            <div class="title"><span>身份认证</span></div>
            <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="姓氏">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="名字">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="证件类型">
                        <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="身份证" value="shanghai"></el-option>
                        <el-option label="护照" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                   
                    <el-form-item label="证件号码">
                        <el-input v-model="form.name"></el-input>
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
            <div class="title"><span>证件上传</span></div>
            <div class="mark">注：请确保照片的内容完整并清晰可见，仅支持jpg图片格式。</div>
            <div class="content">
                <div><span>身份证正面</span></div>
                <div>示例</div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.mark{font-size: 13px;
color: #9E9FA6;}
.bottom-btn{
        width: 132px;
    margin-top: 40px;
    height: 42px;
    line-height: 42px;
    background: #2286FF;
    text-align: center;
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;cursor: pointer;
}
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
    .identity-wrapper{position:relative;.tips{position:absolute;right:30px;top: 90px;font-size: 13px;
color: #9E9FA6;}}
        .form-wrapper,.content,.mark{padding: 0 20px;}
        
</style>
<script>
export default {
    data(){
        return{
            isShow:true,
                 form: {
          name: '',
          region: '',
        
        
        }
        }
    },
    methods:{
        next(){
            this.isShow=false
        }
    }
}
</script>
