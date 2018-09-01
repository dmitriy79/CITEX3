<template>
    <div>
        <div class="title"><span>邮箱认证</span></div>
        <div class="wrapper">
             <div class="text-o">您已绑定邮箱，如果更换邮箱请先绑定现有邮箱！</div>
              <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="已绑定邮箱">
                        <el-input v-model="form.name"></el-input><button class="input-btn" @click="sendEmail" :plain="true" ref="sendEmail">获取邮箱验证码</button>
                    </el-form-item>
                    <el-form-item label="邮箱验证码">
                        <el-input v-model="form.name" type="" class="yzm-input"></el-input>
                    </el-form-item>
                     <el-form-item label="新邮箱">
                        <el-input v-model="form.name" type=""></el-input><button class="input-btn" @click="sendEmail" :plain="true" ref="sendEmail">获取邮箱验证码</button>
                    </el-form-item>
                     <el-form-item label="邮箱验证码">
                        <el-input v-model="form.name" type="" class="yzm-input"></el-input>
                    </el-form-item>
                    <div  class="bottom-btn">确定</div>
                </el-form >
                
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.el-input {
    width: 39.5%!important;
}
.yzm-input{
    width: 50%!important;
}
.input-btn{
    background: #33383f;position: absolute;left: 39.5%;padding: 0 15px;cursor: pointer;    border: none;outline:none;
    height: 40px;
    color: #fff;    width: 114px;
}
.text-o{font-size: 13px;
color: #FF9535;}
.wrapper{padding: 0 20px}
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
<script>
export default {
    data(){
        return{
            form:{
                name:''
            }
        }
    },
    methods:{
        sendEmail(){

        }
        
    }
}
</script>
