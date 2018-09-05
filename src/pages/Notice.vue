<template>
    <div>
         <v-header></v-header>
         <div class="container notice">
             <div class="search-box"></div>
              <div class="tabs">
                <span>官方公告</span>
                <span>活动公告</span>
            </div>
            <div class="content">
                <div class="item">
                    <div class="title"></div>
                    <div class="keyword"></div>
                    <div class="detail"></div>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
import VHeader from "../components/Header";
import VFooter from "../components/Footer";
export default {
    data(){
        return{

        }
    },
    components: {
    VHeader,
    VFooter,
  },
  mounted () {
      this.getNoticeList()
  },
  methods:{
      getNoticeList(){
          this.$api.listType({pageNum:1,pageSize:8,n_language:'zh_CN'}).then(res=>{
              console.log(res,'99999')
          })
      }
  }
}
</script>

<style lang="less" scoped>
.notice{margin: 47px auto;    background: #292f37;}
.tabs {
  height: 40px;
  margin-bottom: 23px;
  color: #fff;
  background: #1b222a;
  cursor: pointer;
  line-height: 40px;
  display: flex;
  span {
    display: block;
    text-align: center;
    font-size: 15px;
    width: 144px;
  }
  span.active {
    background: #292f37;
  }
}
</style>
