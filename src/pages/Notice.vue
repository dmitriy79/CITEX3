<template>
  <div class="container notice">
    <div class="tabs" >
        <span v-for="(item,index) in datalists" @click="tabs(index,item.name)" :class="{active:currentIndex==index}">{{item.name}}</span>
    </div>
    <div class="search-box">
      <input type="text"><span class="ico-search"></span>
    </div>
    <div class="content" >
      <div class="item" v-for="(item,index) in list" @click="noticeDetail(item.id,index)">
        <div class="title">{{item.title}}</div>
        <div class="text"><span class="keyword">关键字：{{item.key_word}}</span> <span class="date">发布时间：{{item.create_time | date-format}}</span></div>
        <div class="detail">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [],
        currentIndex: 0,
        datalists: [],
        noticeId: '',
        noticeList: [{
          id: 1,
          name: '官方公告'
        }, {
          id: 2,
          name: '活动公告'
        }, ]
      }
    },
    components: {},
    mounted() {
      this.getNoticeList()
    },
    methods: {
      //查看公告详情
      noticeDetail(id, index) {
        this.$router.push({
          name: 'NoticeDetail',
          params: {
            id: id,
            index: index,
            allList: this.list,
            prelist: this.list[index - 1],
            nextlist: this.list[index + 1]
          }
        })

      },
      //切换公告
      tabs(index, name) {
        if (name == '官方公告') {
          var typeId = 6
        } else if (name == '活动公告') {
          var typeId = 5
        }
        this.currentIndex = index
        this.$api.list({
          type_id: typeId,
          pageNum: 1,
          pageSize: 8,
          n_language: 'zh_CN'
        }).then(res => {
          var content = res.datas
          content.list.forEach(item => {
            this.list = content.list
          })
        })
      },
      getNoticeList() {
        this.$api.listType({
          pageNum: 1,
          pageSize: 8,
          n_language: 'zh_CN'
        }).then(res => {
          var datalist = res.datas
          this.datalists = datalist
          datalist.forEach(element => {
            this.noticeList = element
            this.$api.list({
              type_id: 6,
              pageNum: 1,
              pageSize: 8,
              n_language: 'zh_CN'
            }).then(res => {
              var content = res.datas
              content.list.forEach(item => {
                this.list = content.list
              })
            })
          });

        })
      }
    }
  }
</script>

<style lang="less" scoped>
.detail {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.notice {
  margin: 47px auto;
  background: #292f37;
}

.content {
  padding: 0 30px;

  .item {
    color: #686d72;
    font-size: 14px;
    cursor: pointer;
    border-top: 1px solid #3B4249;
    padding: 20px 0 40px;
  }

  .title {
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
  }

  .text {
    line-height: 22px;
  }

}

.search-box {
  overflow: hidden;
  padding-right: 30px;
  margin-bottom: 20px;
  position: relative;
  text-align: right;

  .ico-search {
    position: absolute;
    width: 48px;
    right: 30px;
    height: 30px;
    background: #2286ff;
    color: #fff;

    &:before {
      position: absolute;
      left: 18px;
      font-size: 16px;
      top: 8px;
    }

  }

  input {
    background: #292f37;
    height: 30px;
    width: 230px;
  }

}

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
