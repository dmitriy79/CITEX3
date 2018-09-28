<template>
    <div>
        <v-header></v-header>
        <div class="apply-channel-text">
        <div class="wrapper">
             <div class="title">
                申请成为渠道商
            </div>
            <div class="top-title">
                <p>所有基本信息务必准确填写，否则会影响渠道审核通过。审核为后台审核，需要处理时间，审核成功系统回进行通知。</p>
                <p>请列出在下述社交媒体平台上获得关注的人数及相关社交媒体平台地址或入群方式。</p>
            </div>
                  
        <div class="text-wrapper">
            <div class="item">
                <label><i class="mark">*</i>您是项目方还是推荐人</label>
                <div class="check-wrapper">
                    <span class="check-info" :class="{checked:!this.checked}">
                        <i></i> <span>项目方</span>
                    </span>
                     <span class="check-info" :class="{checked:this.checked}">
                        <i></i> <span>推荐人</span>
                    </span>
                </div>
            </div>
            <div class="item">
                <label><i class="mark">*</i>国籍</label>
                <div class="text-info">
                    <input type="text">
                </div>
            </div>
             <div class="item">
                <label><i class="mark">*</i>姓名</label>
                <div class="text-info">
                    <input type="text">
                </div>
            </div>
            <div class="item">
                <label><i class="mark">*</i>手机号/邮箱</label>
                <div class="text-info">
                    <input type="text">
                </div>
            </div>
            <div class="item">
                <label><i></i>Telegram</label>
                <div class="text-info">
                    <input type="text">
                </div>
            </div>
             <div class="item">
                <label><i></i>微信群</label>
                <div class="text-info">
                    <input type="text">
                    <span class="upload-btn">上传微信群二维码</span>
                </div>
            </div>
             <div class="item">
                <label><i></i>QQ群</label>
                <div class="text-info">
                    <input type="text">
                    <span class="upload-btn">上传QQ群二维码</span>
                </div>
            </div>
            <div class="item">
                <label><i></i>其他（微博、Fackbook、Twitter、Instagram...必填一项）请注明平台：</label>
                <div class="text-info">
                    <input type="text">
                </div>
            </div>
        </div>
        <div class="bottom-btn">提交申请</div>
        </div>
 
    </div>
      <v-footer></v-footer>
    </div>
   
</template>
<script>
import VHeader from "../../components/Header";
import VFooter from "../../components/Footer";
export default {
  data() {
    return {
        checked:false
    };
  },
  components: {
    VHeader,
    VFooter
  }
};
</script>
<style lang="less" scoped>
.apply-channel-text{
background:#3b4249;padding:60px 0 87px;
    .wrapper{
        background: #292F37;
        width: 86%;
        margin: 0 7% 0;
        padding: 50px;
        .title{
            font-size: 24px;
            color: #FFFFFF;
            margin-bottom: 17px;
        }
        .top-title{
            line-height: 28px;
            font-size: 12px;
            color:#ebecec;
            margin-bottom: 57px;
        }
        .text-wrapper{
            .item{
                margin-bottom: 14px;
                label{
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height: 30px;
                    display: block;
                    i{display: inline-block;width: 10px}
                    .mark{
                        font-size: 12px;
                        color: #FF4112;
                    }
             }
             .check-wrapper{

                 i{
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    background: rgba(179,203,227,0.34);
                    cursor: pointer;position: relative;
                    &::after{
                        content: "";
                        height: 7px;
                        left: 5px;
                        position: absolute;
                        top: 2px;
                        width: 3px;
                        border-bottom: 1px solid #fff;
                        border-right: 1px solid #fff;
                        transform: rotate(38deg);
                    }
                 }
                 .checked{
                     i{background:#42a2fc}
                 }
             }
             .text-info{width: 47%;background: rgba(255,255,255,0.06);height: 40px;position: relative;
                input{
                        text-indent: 20px;
                    height: 40px;
                    line-height: 40px;color:#fff;width:100%;
                }
                .upload-btn{position: absolute;right: 0;width: 168px;text-align: center;font-size: 14px;background: #535b64;bottom: 0;top: 0;line-height: 40px;
color: #FFFFFF;}
             }
            }
            
            
        }
    }
    .bottom-btn{
        margin-top: 50px;
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;background: #42a2fc;width: 200px;height: 40px;line-height: 40px
    }
}
</style>
