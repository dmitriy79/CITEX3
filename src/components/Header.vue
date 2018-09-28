<template>
  <div class="header header-top" id="header">
    <h1 class="header-logo">
        <a href="/Home" class="ico-logo">
          <span>ibtop.com</span>
        </a>
      </h1>
    <div class="header-nav">
      <router-link v-if="showLi" to="/" tag="div">首页</router-link>
      <router-link v-if="showLi" to="/Transaction" tag="div">交易中心</router-link>
      <!-- <router-link  @click="showli" to="/ApplyChannel" tag="div" >渠道商</router-link> -->
      <router-link v-if="!showLi" to="/" tag="div">项目评论区</router-link>
      <router-link v-if="!showLi" to="/ApplyMountCoin" tag="div">上币申请</router-link>
    </div>
    <ul class="header-nav-right">
      <!-- <li class="nav-right-help">帮助中心</li>
        <li class="nav-right-download">App下载</li> -->
      <!-- <li>
          <router-link to="/mine" tag="div"  v-if="this.token" >个人中心</router-link>
        </li>  -->
      <li>
        <router-link to="/" tag="div">帮助中心</router-link>
      </li>
      <li>
        <router-link to="/notice" tag="div">公告中心</router-link>
      </li>
      <li v-if="this.token">
        <router-link to="/mine/property" tag="div" v-if="this.token">{{userName}} </router-link>
      </li>
      <!-- <li>
          <router-link to="/mine" tag="div"  v-if="this.token">{{userName}}</router-link>
        </li>  -->
      <li v-if="this.token" @click="loginOut" class="login-out">
        退出
      </li>
      <li class="nav-right">
        <router-link to="/Register" tag="div" v-if="!this.token">注册 </router-link>
      </li>
      <li class="split" v-if="!this.token">或</li>
      <li class="nav-right" v-if="!this.token">
        <router-link to="/Login" tag="div">登录</router-link>
      </li>
      <li class="change-btn" @click="selectLanguage">
        <i class="drop-icon" :class="{active:isActive}"></i>
        <div class="language">{{currentLanguage}}</div>
        <transition name="fade">
          <div class="dropdown" v-if="isShow">
            <div @click="changeLanguage" v-for='(item,index) in lang' :data-id='index'>
              {{item}}

            </div>
          </div>
        </transition>
      </li>
    </ul>
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
      showLi: true,
      token: '',
      userName: '',
      isTop: false,
      lang: { 'zh_cn': '中文', 'en': 'English' }
    };
  },
  methods: {
    //退出
    loginOut() {
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

      this.$api.logout().then(res => {
        var returnData = res.message
        // console.log(res, 'wosSJJSJWW999')
        if (returnData == '用户登出') {
          this.token = localStorage.removeItem("token")
          this.$router.push({ path: "/" });
          // console.log(this.token, '09090990')
        }
      })
      //  var url=`/api/user/logout`
      //   this.$http.get(url,"eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1MjM2QSIsInN1YiI6IntcImlkXCI6MjAwMDg0fSIsImlhdCI6MTUzNTk3NTU3NywiZXhwIjoxNTM2MDYxOTc3fQ.RVZabi8iOvlIP6SXwsWej50jVRAu82hbjCfQJzY7fq4"
      //   {
      // headers:{"Content-Type": "application/json"}}).then(res => {
      //        var returnData= res.data.message
      //       console.log(res)

      //       if(returnData=='用户登出'){
      //           this.token=localStorage.removeItem("token")
      //          console.log(this.token,'09090990') 
      //       }
      //   })
    },
    showli() {
      this.showLi = false
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
      console.log(e)
      this.currentLanguage = e.target.innerText;
      this.$i18n.locale = e.target.dataset.id;

    }
  },
  mounted() {
    this.token = localStorage.getItem("token")
    this.userName = localStorage.getItem("userName")
    // console.log(this.token, this.userName, '999992202020200')
    // window.onscroll = e => {
    //   this.isTop = (window.scrollY > 50) ? true : false
    // }
  }
};

</script>
<style lang="less" scoped>
.header-nav-right {
  li {
    margin-right: 20px
  }
}

@h: 50px;
@c: #0D141C;
.header {
  height: @h;
  background: #181f27;
  position: relative;
  transition: .5s;
  &-top {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 90;
    box-shadow: 0 4px 40px rgba(0, 0, 0, .1);
  }
  .container {}
  &-logo {
    color: #fff;
    width: 110px;
    height: @h;
    position: absolute;
    text-align: center;
    a {
      font-size: 28px;
      color: #fff;
      display: block;
      line-height: @h;
      height: @h;
    }
    span {
      font-size: 0;
      display: none;
    }
  }
  &-nav {
    flex-grow: 2;
    height: 50px;
    padding-left: 120px;
    display: flex;
    &>div {
      line-height: @h;
      line-height: 50px;
      padding: 0 28px;
      cursor: pointer;
      font-size: 14px;
      transition: .5s;
      color: lighten(#0D141C, 80%);
      &:hover {
        color: lighten(#0D141C, 80%);
        background: @c
      }
      &.link.active {
        background: #292F37;
        color: #fff;
      }
    }
    &-right {
      position: absolute;
      font-size: 12px;
      right: 0;
      top: 0;
      line-height: @h;
      li {
        display: inline-block;
        div {
          font-size: 12px;
          line-height: @h;
          cursor: pointer;
          &:hover {
            color: lighten(#0D141C, 90%);
          }
        }
      }
    }
  }
  .change {
    &-btn {
      padding: 0 20px;
      position: relative;
    }
  }

  .dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 90;
    background: #181f27;
    width: 120px;
    text-align: center;
    &>div {
      text-align: left;
      padding: 14px 20px;
      line-height: normal;
      &:hover {
        transition: .2s;
        background: @c;
      }
    }
  }
}

.login-out {
  margin-left: 20px;
  cursor: pointer;
}

</style>
