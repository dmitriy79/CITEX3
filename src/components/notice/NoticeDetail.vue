<template>
    <div>
        <v-header></v-header>
        <div class="container noticeDetail">
            <div class="item" >
                  <div class="title">{{title}}</div><div class="goback" @click="goback">返回</div>
                <div class="text">关键字：<span class="keyword">{{key_word}}</span> <span class="date">发布时间：{{create_time}}</span></div>
                <pre class="detail"  v-html='content'>
                    
                </pre>
            </div>
            <div class="line"> </div>
            <div class="pre" :class="{notAllowed:showPre}"   @click="preNotice">上一篇:<span v-if="!showPre">{{preTitle}}</span><span v-if="showPre">当前已经是第一篇</span></div>
            <div class="next" :class="{notAllowed:showNext}" @click="nextNotice">下一篇:{{nextTitle}}<span v-if="showNext">当前已经是最后一篇</span></div>
        </div>
        <v-footer></v-footer>
    </div>
  
</template>
<style lang="less" scoped>

.noticeDetail{padding-bottom: 30px;
    .goback{    position: absolute;cursor: pointer;
    right: 60px;
    top: 40px;
    font-size: 14px;}
        margin: 47px auto;
    background: #292f37;
}
.item{    color: #686d72;    font-size: 14px;font-family:"PingFangSC-Regular" ;
        padding: 40px 60px;
        .text,.title{text-align: center}
        .text{margin-bottom: 56px;

line-height: 22px;
        }
        .title{
            font-size: 18px;margin-bottom: 12px;
color: #FFFFFF;
        }
        .detail{line-height: 22px;white-space: pre-wrap;word-wrap: break-word;}
        .date{margin-left: 5px;}
        .keyword{
            color: #2286FF;
        }
      
}
  .line{border-bottom: 1px solid #3B4249;margin-bottom: 20px;}
  .pre,.next{
          padding: 4px 60px;font-size: 14px;cursor: pointer;
      
       
  }
     .notAllowed{cursor:not-allowed}
</style>
<script>
import VHeader from "../../components/Header";
import VFooter from "../../components/Footer";
export default {
    data(){
        return{
            datalist:[],
            create_time:'',
            key_word:'',
            title:'',
            content:'',
            showPre:false,
            showNext:false,
            nextTitle:'',
            preTitle:'',
            id:'',
            noticeId:'',//上一页下一页公告
            nextlist:[],
            prelist:[],
            nextTitleId:'',
            preTitleId:'',
            index:'',//当前公告索引
           
            // preId:'',
            // nextId:''
        }
    },
    mounted () {
        this.getNotice()
    },
      components: {
    VHeader,
    VFooter,
  },
    methods: {
        //返回
        goback(){
           this.$router.go(-1)
        },
         //时间戳转时间
       timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        return Y+M+D;
    },
    //查看上一篇公告、
    preNotice(){
         this.index--;
        console.log(this.index,'我是上一篇9999')
        // var preId=this.allList[this.index-1].id
     
        if(this.index==0){
            var preId=this.allList[0].id
              this.showPre=true
           this.showNext=false
              this.nextTitle=this.allList[this.index+1].title
        }
        else{
            this.preTitle=this.allList[this.index-1].title
            this.nextTitle=this.allList[this.index+1].title
              this.showNext=false
        }
        // this.preTitle=this.allList[this.index-1].title
        // this.preTitle=this.allList[this.index+1].title
        // if(this.index==(this.allList.length-1)){
        //     this.nextTitle=this.allList[this.allList.length-1].title
        // }
        // else{
        //     this.nextTitle=this.allList[this.index+1].title
        // }
        
        var preId=this.allList[this.index].id
        console.log(preId,'wos我是下一篇id')
        // else{
        //      this.showPre=false
        // }
        console.log(this.allList,this.preTitleId,this.nextTitleId,'我是idid  啊啊啊1')
          
                this.$http(`/USER/notice/${preId}`).then(res=>{
                var content=res.data.datas
                this.create_time=this.timestampToTime(content.create_time);
                this.key_word=content.key_word
                this.title=content.title
                this.content=content.content
                  console.log(content,'99999999==========')
            })

          
        //   else{
        //       this.$refs.pre.setAttribute("cursor","not-allowed")
        //       this.$refs.pre.setAttribute("color","red")
        //   }
    
    },
    //下一篇公告
     nextNotice(){
          
         this.index++;
         console.log(this.index,'我是下一篇999')
        this.showPre=false
          console.log(this.allList[this.index-1].title,'我是上')
           this.preTitle=this.allList[this.index-1].title
       
          console.log(this.index+1,this.allList.length-1)
          var nextId=this.allList[this.index].id
        if((this.index)==(this.allList.length-1)){
            this.nextTitle=''
            this.showNext=true
        }
        else{
             this.nextTitle=this.allList[this.index+1].title
                this.showNext=false
        }
         var nextTitleId=this.allList[this.index].id
        console.log(nextId,this.nextTitleId,'我是idid  啊啊啊2')

          
                this.$http(`/USER/notice/${nextId}`).then(res=>{
                var content=res.data.datas
                this.create_time=this.timestampToTime(content.create_time);
                this.key_word=content.key_word
                this.title=content.title
                this.content=content.content
                  console.log(content,'99999999==========')
            })
          
          
    
    },
       getNoticeD(){
           this.$http(`/USER/notice/${this.id}`).then(res=>{
                var content=res.data.datas
                this.create_time=this.timestampToTime(content.create_time);
                this.key_word=content.key_word
                this.title=content.title
                this.content=content.content
                  console.log(content,'88888888888==========')
            })
       },
        getNotice(){
            let id=this.$route.params.id; //从公告列表传过来的公告id
            this.index=this.$route.params.index
               console.log(this.index,'我是index哈哈哈哈哈')
            this.allList=this.$route.params.allList
            let prelist=this.$route.params.prelist 
             let nextlist=this.$route.params.nextlist
            if(prelist==undefined){
                this.showPre=true
                
            }
            else{

                this.preTitle=prelist.title
                this.preTitleId=prelist.id
                this.id=prelist.id
            }
            if(nextlist==undefined){
                this.showNext=true
               
            }
            else{
                this.nextTitle=nextlist.title
                 this.id=nextlist.id
                 this.nextTitleId=nextlist.id
            }
           
            // console.log(prelist,nextlist.title,'我是title')
            this.$http(`/USER/notice/${id}`).then(res=>{
                var content=res.data.datas
                this.create_time=this.timestampToTime(content.create_time);
                this.key_word=content.key_word
                this.title=content.title
                this.content=content.content
                  console.log(content,this.allList,'88888888888==========')
            })
        }
       
    }
}
</script>

