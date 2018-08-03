<template>
    <div class="footer">
        <dl  >
            <dt>关于</dt>
            <dd>关于我们</dd>
            <dd>加入我们</dd>
            <dd>使用条款</dd>
            <dd>隐私政策</dd>
        </dl>
        <div class="border-right"></div>
         <dl>
            <dt>关于</dt>
            <dd>新手指引</dd>
            <dd>币种资料</dd>
            <dd>常见问题</dd>
            <dd>法律文件</dd>
        </dl>
        <div class="border-right"></div>
         <dl >
            <dt>资讯</dt>
            <dd>最新动态</dd>
            <dd>新闻资讯</dd>
            <dd>行业动态</dd>
            <dd>币种新闻</dd>
       </dl>
        <div class="border-right"></div>
         <dl>
            <dt>服务</dt>
            <dd>帮助中心</dd>
            <dd>新手攻略</dd>
            <dd>API 文档</dd>
            <dd>条款说明</dd>
        </dl>
        <dl class="">
            <dt>
                <img src="../assets/images/logo.png" alt="">
            </dt>
            <dd>致力为全球用户提供专业安全透明的数字货币交易服务</dd>
            <dd></dd>
            <dd>© 2017-2018 IB.TOP Global</dd>
        </dl>
    </div>
</template>
<script>
export default {
  name: "VFooter"
};
</script>
<style lang="less" scoped>
.footer {
  background: #1e212f;
  padding: 70px 120px;
  display: -webkit-flex;
  font-family: "PingFangSC-Regular";
  display: flex;
  dl {
    padding: 0 45px;

    dt {
      font-size: 16px;
      color: #ffffff;
      margin-bottom: 10px;
    }

    dd {
      font-size: 13px;
      color: #686a74;
      letter-spacing: 0.93px;
      line-height: 32px;
    }
  }
  dl:last-of-type{
      display: flex;
      flex-direction: column;
      text-align: right;
      padding: 0;
      flex:1;
      dt{
          padding-top: 10px
      }
  }
  .border-right {
    opacity: 0.31;
    width: 1px;
    border-right: 1px solid #686a74;
  }
}
</style>

