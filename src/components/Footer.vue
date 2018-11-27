<template>
    <div class="footer">
        <div class="container">
          <div class="footer-nav">
            <dl v-for='(item,index) in footLink'>
              <dt>{{links[index]}}</dt>
                <dd v-for="item in item"><router-link  :to="item.path" v-if="item.path"   target="_blank">{{item.title}}</router-link><a :href="item.href" v-else target="_blank">{{item.title}}</a></dd>
            </dl>
            <dl class="footer-nav-block">
                <dt>联系我们</dt>
                <dd>客服  service@fortunebus.com</dd>
                <dd>商务  service@fortunebus.com</dd>
                <dd>上币  service@fortunebus.com</dd>
            </dl>
          </div>
          <div class="footer-bar">
              <div class="footer-bar-nav">
                <div v-for="(item, index) in ico">
                  <a :href="item.href" target="_blank">
                    <i :class="'ico-'+item.name" :data-index="index"></i>  <!-- @mouseover="showCode" @mouseout="hideCode"--> 
                    <div v-if="currentCode == index">
                      <img :src="item.img" alt="">
                    </div>
                  </a>
                </div>
              </div>
              <div class="copyright">© 2018-2020 https://fortunebus.com/ All rights reserved</div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "VFooter",
  data(){
    return {
      ico:[
        // {name:'weibo',img:'../assets/images/logo.png'},
        {name:'telegram',img:'http://sdlf.jpg',href:'https://t.me/ibtopofficial'},
        {name:'facebook',img:'http://sdlf.jpg',href:'https://www.facebook.com/ibtopofficial/'},
        // {name:'wechat',img:'http://sdlf.jpg'},
        {name:'twitter',img:'http://sdlf.jpg',href:'https://twitter.com/ibtopofficial'},
        // {name:'qq',img:'http://sdlf.jpg'},
      ],

      links:['关于','条款','服务'],
      footLink:[[
       {title:'关于我们',id:1,path:'',href:'https://ibtop-vip.zendesk.com/hc/zh-cn/articles/360016545951'},
        {title:'加入我们',id:2,path:'/join-us'},
         {title:'常见问题',id:3,path:'',href:"https://zbex-vip.zendesk.com/hc/zh-cn/categories/360001117394-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98"},
        // {title:'使用条款',id:3,path:'/'},
        // {title:'隐私政策',id:4,path:'/'},
     ],
        [
        //  {title:'新手指引',id:1},
        //  {title:'币种资料',id:1,path:'/'},
       
 {title:'法律文件',id:1,href:'https://zbex-vip.zendesk.com/hc/zh-cn/articles/360012081993-%E6%B3%95%E5%BE%8B%E5%A3%B0%E6%98%8E'},
        {title:'使用条款',id:3,href:'https://zbex-vip.zendesk.com/hc/zh-cn/sections/360002512954-%E4%BD%BF%E7%94%A8%E6%9D%A1%E6%AC%BE'},
        {title:'隐私政策',id:4,href:'https://zbex-vip.zendesk.com/hc/zh-cn/articles/360012082113-%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE'},
     ],
        [
         {title:'帮助中心',id:1,path:'',href:'https://zbex-vip.zendesk.com/hc/zh-cn'},
         {title:'问题反馈',id:1,path:'/'},
         {title:'API 文档',id:1,path:'/'},
         {title:'公告中心',id:1,href:'', href: 'https://zbex-vip.zendesk.com/hc/zh-cn/categories/360001116934-%E5%85%AC%E5%91%8A%E4%B8%AD%E5%BF%83'},
       ],
     /* [
         {title:'最新动态',id:1},
         {title:'新闻资讯',id:1},
         {title:'行业动态',id:1},
         {title:'币种新闻',id:1}
       ],*/
       [
        
      ]],
      currentCode:null,
    }
  },
   methods: {
    showCode(e){
      this.currentCode = e.target.dataset.index
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  background: #181F27;
  padding:80px 0 90px;

  .container{
        display:flex;
        align-items:center;
  }
  &-nav{
    display:flex;
    flex-grow: 2;
    dl{
       margin-right:100px;
    }

    dt{
      color:#fff;
      font-size:16px;
      margin-bottom:15px;
    }
    dd{
      font-size:12px;
      line-height:2.3;
      cursor: pointer;
      transition:.4s;
      &:hover{
        color:#fff;
      }
      
    }
  }
  &-bar{
    font-size:12px;
    text-align:right;
    &-nav{
      margin-bottom:15px;
      &>div{
        display:inline-block;
        font-size:28px;
        margin-left:14px;
        transition:.3s;
        cursor: pointer;
        &:hover{
          color:#fff;
        }
      }
    }
  }
  .copyright{
    opacity:.5;
    font-size:11px;
  }
}
</style>

