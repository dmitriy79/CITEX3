<template>
    <div>
        <v-header></v-header>
        <div class="apply-mount-coin">
            <div class="wrapper">
                <div class="title">上线币种说明及申请</div>
                <div class="top-info">
                    <p>IB.TOP上币规则</p>
                    <p>为保护投资者的利益，IB.TOP平台对上币申请作出如下说明，所有上线的币种将通过IB.TOP的基本信息审核，申请信息越详细充分，越有助于您的申请成功，且需要满足但不限于以下条件：</p>
                    <p>特别声明：IB.TOP平台不接受任何涉及非法行为的上币申请，最终解释权归IB.TOP所有</p>
                </div>
                <dl class="apply-info">
                    <dt>一、上币条件：</dt>
                    <dd>1、申请者为平台渠道商。 <router-link to="/ApplyChannelText" tag="span" class="link">申请渠道商</router-link></dd>
                    <dd>2、通过IB.TOP平台的基础信息审核。</dd>
                    <dd>3、完整的团队及社区。</dd>
                    <dd>4、有实际技术支撑或应用。</dd>
                    <dd>5、无政策风险，达到专业及合规要求</dd>
                    <dd>6、真实及时的披露项目进展。</dd>
                    <dd>7、IB.TOP平台上线币种的其他要求。</dd>
                </dl>
                <dl class="apply-info">
                    <dt>二、流程说明：</dt>
                    <dd>在申请者为渠道商的基础上：</dd>
                    <dd>1、申请：完整填写申请上币基本信息，包括：项目基本信息、代币基本信息。</dd>
                    <dd>2、审核：IB.TOP对项目基本信息进行审核，审核结果会邮件通知项目方，审核维度会由专业小组多个角度审核，审核时间：1-7个工作日。</dd>
                    <dd>3、验证用户：上传新用户账号，检测有效性，有效性包括：注册时间、平台币持有量、账号是否存在、账号是否为机器人。</dd>
                    <dd>4、查看上币指数：平台根据项目情况给出相应上币指数，判断是否符合上币资质。</dd>
                    <dd>5、检测活跃度：项目在申请初期，基本信息通过审核后，平台会在留言区上架项目，新用户需要对项目进行达标的留言评论。</dd>
                    <dd>6、上币：审核通过的项目将排期进入ETH交易市场。</dd>
                </dl>
                <dl class="apply-info">
                    <dt>三、币种下线说明</dt>
                    <dd>为保护投资者利益，IB.TOP平台保留项目下线或继续支持项目在平台上交易的权利，项目方如果触犯如下条件，我们会公告通知交易下线，包含但不限于：</dd>
                    <dd>1、项目团队解散</dd>
                    <dd>2、项目方面临重大法律问题</dd>
                    <dd>3、由于战略调整和发展需要，项目运营团队主动要求下线</dd>
                    <dd>4、严重的技术或安全问题没有及时得到解决</dd>
                    <dd>5、连续5个交易日出现零成交</dd>
                    <dd>6、信息披露出现重大偏差</dd>
                    <dd>7、突然出现分叉</dd>
                    <dd>8、不满足继续交易的其他事项；</dd>
                    <dd>IB.TOP平台会对决定下线的项目提前5天发出下线公告 ，用户有30天的期限从钱包中移出资产。</dd>
                    <dd>我承诺已了解B.TOP平台项目申请上币条件的规则说明，同意并接受此方案</dd>
                </dl>
                <div class="bottom-btn"><router-link to="/BasicInfo" tag="span" >申请上币</router-link></div>
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
        VFooter
    }
}
</script>
<style lang="less" scoped>
.apply-mount-coin{background:#3b4249;padding:60px 0 87px;
    .wrapper{
        width: 86%;
        margin: 0 7% 0;
        padding: 50px;
         background: #292F37;
    }
       
        
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
        .link{color: #3CA0FF;cursor: pointer;text-decoration: underline}
        .bottom-btn{    margin: 50px auto 0;text-align:center;
        span{
            font-size: 16px;
        color: #FFFFFF;display: inline-block;
        text-align: center;background: #42a2fc;width: 200px;height: 40px;line-height: 40px;cursor: pointer;
        }
        }
}
</style>

