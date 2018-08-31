<template>
    <div>
        <div class="carrycoin-wrapper">
            <div class="title"><span>我要提币</span></div>
            <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="币种转出">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="转出地址">
                        <el-select v-model="form.region" placeholder="选择提现地址">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                     <el-form-item label="转出数量">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="转出手续费">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="身份验证" placeholder="请输入注册时的证件号码后四位">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="交易密码">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="短信验证码" class="message-validate"> 
                        <el-input v-model="form.name"></el-input><span>获取手机验证码</span><i>+86 133****5467（接受验证码）</i>
                    </el-form-item>
                </el-form>
                <div class="bottom-btn">立即转出</div>
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
.carrycoin-wrapper{
    .message-validate{
        i{margin-left: 22px}
        span{margin-left: -140px;width: 140px;text-align: center;    display: inline-block;    background: #181f27;border-top-right-radius:4px;border-bottom-right-radius:4px}
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
    .form-wrapper{padding: 0 20px;
      .bottom-btn{
              width: 132px;margin-top: 40px;
    height: 42px;
    line-height: 42px;
    background: #2286FF;
    text-align: center;
    border-radius: 2px;
    font-size: 16px;
    color: #FFFFFF;
      }
    }
}
</style>
