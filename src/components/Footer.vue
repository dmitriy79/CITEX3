<template>
    <div class="footer">
        <dl  >
            <dt>关于</dt>
            <dd>关于我们</dd>
            <dd>加入我们</dd>
            <dd>使用条款</dd>
            <dd>隐私政策</dd>
        </dl>
         <dl>
            <dt>帮助</dt>
            <dd>新手指引</dd>
            <dd>币种资料</dd>
            <dd>常见问题</dd>
            <dd>法律文件</dd>
        </dl>
         <dl >
            <dt>资讯</dt>
            <dd>最新动态</dd>
            <dd>新闻资讯</dd>
            <dd>行业动态</dd>
            <dd>币种新闻</dd>
       </dl>
         <dl>
            <dt>服务</dt>
            <dd>帮助中心</dd>
            <dd>新手攻略</dd>
            <dd>API 文档</dd>
            <dd>条款说明</dd>
        </dl>
        <dl>
            <dt>联系我们</dt>
            <dd>客服  support@ib.top</dd>
            <dd>商务  business@ib.top</dd>
            <dd>上币  listingcn@ib.top</dd>
            <dd>QQ: 交流群3：300035855</dd>
        </dl>
        <dl class="">
            <dt>
                <img src="../assets/images/footer-logo.png" alt="">
            </dt>
        
            <dd class="copyright">© 2017-2018 IB.TOP All rights reserved</dd>
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
  background: #292F37;
  padding: 70px 120px;
  display: -webkit-flex;
  font-family: "PingFangSC-Regular";
  display: flex;
  dl {
    padding: 0 45px;

    dt {
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 5px;
      font-family:"PingFangSC-Regular";
    }
    .copyright{font-size: 10px}
    dd {
      font-size: 12px;
      color: #686a74;
      letter-spacing: 0.93px;
      line-height: 24px;
    }
  }
  dl:last-of-type {
    display: flex;
    flex-direction: column;
    text-align: right;
    padding: 0;
    flex: 1;
    justify-content: center;
    dt {
      padding-top: 10px;
    }
  }
  .border-right {
    opacity: 0.31;
    width: 1px;
    border-right: 1px solid #686a74;
  }
}
</style>

