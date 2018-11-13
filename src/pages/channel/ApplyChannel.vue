<template>
    <div>
        <v-header></v-header>
        <div class="apply-channel">
        <div class="wrapper container">
            <div class="title">申请成为渠道商</div>
            <div class="top-info">
                <p>FBEx平台渠道商申请条件、渠道商协议、渠道商权益：</p>
                <p>特别声明：FBEx平台不接受任何涉及非法行为的渠道商申请，最终解释权归FBEx所有</p>
            </div>
            <dl class="apply-info">
                <dt>一、申请条件</dt>
                <dd>为了渠道商申请效率，杜绝人为干预因素，推出渠道商申请平台，让渠道商通过平台第一时间了解审核进展，加快进程，审核过程中FBEx将对渠道进行评估，所有渠道商需要满足如下条件，包含但不限于：</dd>
                <dd>1、渠道申请提交信息齐全且准确</dd>
                <dd>2、通过FBEx平台的渠道商申请审核</dd>
                <dd>3、强有力的团队或社区维护</dd>
                <dd>4、渠道质量达到专业和合规要求</dd>
            </dl>
            <dl class="apply-info">
                <dt>二、渠道商协议</dt>
                <dd>为构建健康、和谐、安全的平台环境，请您务必遵守《渠道商协议》，协议包含但不限于：</dd>
                <dd>1、渠道商承诺提供渠道合法合规</dd>
                <dd>2、本平台作为服务的提供方，有义务对平台的规则及服务进行完善， 但本站并无触犯相关法律的动机和事实，对使用者的行为不承担任何连带责任。</dd>
                <dd>3、当有权机关出示相应的调查文件要求本平台配合对指定用户进行调查时， 本平台将按照有权机关的要求协助提供相应的用户数据，或进行相应的操作。 因此而造成的用户隐私泄露、账户不能操作及因此所造成的损失等，本平台不承担任何责任。</dd>
            </dl>
            <dl class="apply-info">
                <dt>三、渠道商权益</dt>
                <dd>1、成为平台渠道商后可在平台上币申请审核通过的情况下申请免费上币</dd>
            </dl>
            <div class="bottom">申请成为渠道商</div>
        </div>
    </div>
    <v-footer></v-footer>
    </div>
    
</template>
<script>
import VHeader from "../../components/Header";
import VFooter from "../../components/Footer";
export default {
    data(){
        return{
            
        }
    },
    components: {
        VHeader,
        VFooter,
    }
}
</script>
<style lang="less" scoped>
.apply-channel{background:#3b4249;padding:60px 0 87px;
    .wrapper{
        background: #292F37;
        padding: 50px;
        .title{
            font-size: 28px;
            color: #FFFFFF;
            margin-bottom: 38px;
        }
        .apply-info,.top-info{
            font-size: 14px;
            line-height: 26px;
            margin-bottom: 20px;
            color:#d3d5d6;
            font-family:"PingFangSC-Regular" ;
        }
        .bottom{margin-top: 50px;
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;background: #42a2fc;width: 200px;height: 40px;line-height: 40px}
    }
}
</style>

