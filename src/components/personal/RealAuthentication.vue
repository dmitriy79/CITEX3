<template>
    <div>
        <div class="identity-wrapper">
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
                    
                    <div  class="bottom-btn">确定</div>
                </el-form >
                
            </div>
        </div>
        <div class="upload-wrapper">

        </div>
    </div>
</template>
<style lang="less" scoped>
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
        .form-wrapper{padding: 0 20px;}
</style>
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
