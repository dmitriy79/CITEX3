<template>
  <div class="header">
    <div class="container">
      <h1 class="header-logo">
        <a href="/Home" class="ico-logo">
          <span>ibtop.com</span>
        </a>
      </h1>
      <ul class="header-nav">
        <li v-if="showLi">
          <router-link to="/" tag="div">首页</router-link>
        </li>
        <li v-if="showLi">
          <router-link to="/Transaction" tag="div">交易中心</router-link>
        </li>
        <!-- <li>
          <router-link to="/" tag="div">C2C交易</router-link>
        </li>
        <li>
          <router-link to="/" tag="div">新闻资讯</router-link>
        </li>-->
        
        <li @click="showli">
          <router-link to="/" tag="div" >渠道商</router-link>
        </li>
        <li v-if="!showLi">
          <router-link to="/" tag="div">项目评论区</router-link>
        </li>
        <li v-if="!showLi">
          <router-link to="/ApplyMountCoin" tag="div">上币申请</router-link>
        </li>

        
      </ul>

      <ul class="header-nav-right">
        <!-- <li class="nav-right-help">帮助中心</li>
        <li class="nav-right-download">App下载</li> -->
        <li>
          <router-link to="/personal" tag="div"  v-if="this.token">{{userName}}</router-link>
        </li> 
        <li v-if="this.token" @click="loginOut" class="login-out">
          退出
        </li> 
        <li class="nav-right"><router-link to="/Register" tag="div" v-if="!this.token">注册 </router-link></li>
        <li class="split" v-if="!this.token">或</li>
        <li class="nav-right" v-if="!this.token"><router-link to="/Login" tag="div">登陆</router-link></li>
        <li class="change-btn" @click="selectLanguage">
          <i class="drop-icon" :class="{active:isActive}"></i>
          <div class="language" >{{currentLanguage}}</div>
          <transition name="fade">
            <div class="dropdown" v-if="isShow">
              <div @click="changeLanguage">中文</div>
              <div @click="changeLanguage">English</div>
            </div>
          </transition>
        </li>
      </ul>
   
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      isShow: false,
      currentLanguage: "中文",
      isActive: false,
      showLi:true,
      token:'',
      userName:''
    };
  },
  methods: {
    //退出
    loginOut(){
        /*this.$confirm('确认退出登陆', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //确定
          // this.$message({
          //   type: 'success',
          //   message: '退出成功!'
          // });
           var url=`/api/user/logout`
            this.$http.get(url,
            {
		      headers:{"Content-Type": "application/json"}}).then(res => {
                 var returnData= res.data.message
                console.log(res)
            
                if(returnData=='成功'){
                    //  localStorage.setItem("token",'')
                }
            })
        }).catch(() => {
          //取消
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });          
        });*/
      
           var url=`/api/user/logout`
            this.$http.get(url,
            {
		      headers:{"Content-Type": "application/json"}}).then(res => {
                 var returnData= res.data.message
                console.log(res)
            
                if(returnData=='成功'){
                    //  localStorage.setItem("token",'')
                }
            })
    },
    showli(){
      this.showLi=false
    },
    selectLanguage() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    changeLanguage(e) {
      this.currentLanguage = e.target.innerText;
    }
  },
  mounted(){
    this.token = JSON.parse(localStorage.getItem("token"))
    this.userName = localStorage.getItem("userName")
    
    console.log(this.token,this.userName,'999992202020200')
  }
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.logo{
  font-size:100px;
  display:block;
}
@h:50px;
@c:#0D141C;
.header {
  height:@h;
  background:#181f27;
  .container{
  
  }
  li{
  
    line-height:@h;
    display:inline-block;
    div{
      cursor: pointer;
      font-size:14px;
      transition:.3s;
        color:lighten(#0D141C,80%);
    }
   
  }
  &-logo{
  
    color:#fff;
    width:120px;
    position:absolute;
    text-align:center;
    a{
        font-size:30px;
      color:#fff;
      display:block;
      height:30px;
      line-height:50px;
    }
    span{
      font-size:0;
    }
  }
  &-nav{
    flex-grow: 2;
    height:50px;
    padding-left:120px;
    li{
      display:inline-block;
      height:50px;
        color:lighten(#0D141C,94%);
    }
    div{
      line-heigh:50px;
      padding:0 20px;
     &:hover{
          color:lighten(#0D141C,80%);
          background:@c;
        }      

    }
    &-right{
      position:absolute;
       font-size:12px;
      right:0;
      top:0;
      height:50px;
      li{
        div{
          font-size:12px;
          &:hover{
              color:lighten(#0D141C,90%);
            }              
        }
      }
    }
  }
  .change{
    &-btn{
      padding:0 20px;
      position:relative;
    }
  }
  .dropdown{
    position:absolute;
    right:0;
    top:100%;
    z-index: 90;
    background:#181f27;
    width:120px;
    text-align:center;
    &>div{
      text-align: left;
      padding:14px 20px;
      line-height:normal;
      &:hover{
        transition:.2s;
        background:@c;
      }
      
    }
  }

  .content {
    height: 100%;
    display: flex;
    align-items: center;
    font-family: SourceHanSansCN-Medium;
    .logo-wrapper {
      margin-left: 17px;
      a {
        display: block;
      }
      .ico-logo{color: #fff}
    }
    .nav-right-wrapper {
      display: flex;
      align-items: center;
      li {
        color: #8d9398;
        font-size: 12px;
        font-size: 12px;
        cursor: pointer;
        line-height:50px;
      }
      .person-center{margin-right:80px;}
      .nav-right,
      .split {
        margin-left: 0;
      }
      .nav-right-help,
      .nav-right-download {
        margin-right: 10px;
      }
      .nav-right-download {
        margin-right: 60px;
      }
      .split {
        margin: 0 10px;
      }
      .change-btn {
        margin-left: 20px;
        position: relative;
        opacity: 0.8;
        background: #000000;
        height: 50px;
        line-height: 50px;
        padding: 0 29px 0 26px;
        width: 96px;
        cursor: pointer;
        div {
          font-size: 12px;
          //  height: 50px;
          //  line-height: 50px;
        }
        .dropdown {
          background: #1e2130;
          position: absolute;
          top: 50px;
          left: 0;
          right: 0;
          padding: 4px 0 0 6px;
          div {
            line-height: 25px;
          }
        }
        .drop-icon {
          width: 5px;
          height: 5px;
          display: inline-block;
          border-left: 1px solid #ffffff;
          border-top: 1px solid #ffffff;
          transform: rotate(225deg);
          -ms-transform: rotate(225deg);
          -moz-transform: rotate(225deg);
          -webkit-transform: rotate(225deg);
          -o-transform: rotate(225deg);
          opacity: 0.5;
          position: absolute;
          right: 9px;
          top: 22px;
          transition: ease-in-out 0.2s;
        }
        .drop-icon.active {
          transform: rotate(45deg);
        }
      }
    }
    .header-nav {
      display: flex;
      align-items: center;
      flex: 1 1 0%;
      margin-left: 28px;
      opacity: 0.8;

      .header-space {
        // width: 20%;
      }
      li {
        position: relative;
        height: 50px;
        line-height: 50px;
        margin-left: 38px;
        div {
          font-family: SourceHanSansCN-Medium;
          font-size: 16px;
          color: #999ea4;
          letter-spacing: 0;
          cursor: pointer;
        }
      }
    }
  }
}
.login-out{margin-left: 20px;}
</style>


