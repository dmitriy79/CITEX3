<template>
    <div class="footer">
        <div class="container">
          <div class="footer-nav">
            <dl v-for='(item,index) in footLink'>
              <dt>{{links[index]}}</dt>
                <dd v-for="item in item"><router-link :to="item.path" v-if="item.path"   target="_blank">{{item.title}}</router-link></dd>
            </dl>
            <dl class="footer-nav-block">
                <dt>联系我们</dt>
                <dd>客服  support@ib.top</dd>
                <dd>商务  business@ib.top</dd>
                <dd>上币  listingcn@ib.top</dd>
                <dd>QQ: 交流群3：300035855</dd>
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
              <div class="copyright">© 2017-2018 IBtop.com All rights reserved</div>
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

      links:['关于','帮助','服务'],
      footLink:[[
       {title:'关于我们',id:1,path:'/'},
        {title:'加入我们',id:2,path:'/JoinUs'},
        {title:'使用条款',id:3,path:'/'},
        {title:'隐私政策',id:4,path:'/'},
     ],
        [
        //  {title:'新手指引',id:1},
         {title:'币种资料',id:1,path:'/'},
         {title:'常见问题',id:1,path:'/'},
         {title:'法律文件',id:1,path:'/'},
       ],
     /* [
         {title:'最新动态',id:1},
         {title:'新闻资讯',id:1},
         {title:'行业动态',id:1},
         {title:'币种新闻',id:1}
       ],*/
       [
        //  {title:'帮助中心',id:1,path:'/'},
         {title:'问题反馈',id:1,path:'/'},
         {title:'API 文档',id:1,path:'/'},
         {title:'公告中心',id:1,path:'/notice'},
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

