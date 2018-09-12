<template>
    <div>
        <div class="title"><span>修改登录密码</span></div>
        <div class="wrapper">
            <div class="text-o">为保证您的顺利交易 请牢记登录密码！</div>
                <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="原始登录密码">
                        <el-input v-model="form.name" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="新登录密码">
                        <el-input v-model="form.name" type="password"></el-input>
                    </el-form-item>
                     <el-form-item label="再次输入新密码">
                        <el-input v-model="form.name" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="谷歌验证码">
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
.wrapper{padding: 0 20px}
.text-o{font-size: 13px;
color: #FF9535;}
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
</style>
