<template>
    <div class="coinTypeInfo">
        <div class="title">币种资料</div>
        <div class="info-wrapper">
            <div class="left">
                <div class="left-title">
                    <img :src="coinInfo.logoUrl">
                    <div>
                        <h2>{{coinInfo.name}}</h2>
                        <h5 class="sname">{{coinInfo.nameCn}}</h5>
                    </div>
                </div>
                <ul class="list">
                    <li>
                        发行时间<span>{{this.timestampToTime(coinInfo.createTime)}}</span>
                    </li>
                    <li>
                        发行总量<span>{{coinInfo.circulation}}</span>
                    </li>
                    <!-- <li>
                        流通总量<span>53.75%</span>
                    </li>
                    <li>
                        众筹价格<span>约0.2USD</span>
                    </li> -->
                    <li>
                        白皮书<a :href="coinInfo.wihtePaperUrl">{{coinInfo.wihtePaperUrl}}</a>
                    </li>
                     <li>
                        官网<span> <a :href='coinInfo.coinPortal'>{{coinInfo.coinPortal}}</a></span>
                    </li>
                     <li>
                        区块查询<span>{{coinInfo.blockExplorerUrl}}</span>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="right-title">{{coinInfo.coinName}}简介</div>
                <div class="info">{{coinInfo.introdution}}</div>
                <div class="more">了解更多</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      name: "coinTypeInfo",
      coinName: "",
      createTime: "",
      circulation: "", //发行总量
      wihtePaperUrl: "", //白皮书
      coinPortal: "", //币种官网
      blockExplorerUrl: "", //区块
      introdution: "" //币种介绍
    };
  },
  mounted() {
    //this.coinInfo();
  },
    created() {
       this.$store.dispatch("initTradingList")
     
        this.$store.dispatch("trading/initTradings")
        
  },
  methods: {
    //时间戳转时间
    timestampToTime(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      return Y + M + D;
    }

    // //币种资料
    // coinInfo(){
    //     this.$http("/COIN/coin/info/12").then(res=>{
    //     console.log(res,'9999')
    //      var coinInfo=res.data.datas
    //      this.coinName=coinInfo.name
    //      this.circulation=coinInfo.circulation
    //      this.wihtePaperUrl=coinInfo.wihtePaperUrl
    //      this.coinPortal=coinInfo.coinPortal
    //     this.blockExplorerUrl=coinInfo.blockExplorerUrl
    //     this.introdution=coinInfo.introdution
    //     this.createTime=this.timestampToTime(coinInfo.createTime);

    //     })
    // },
  },
  computed: {
    ...mapState("trading", ["coinInfo"])
  }
};
</script>

<style lang="less" scoped>
.coinTypeInfo {
  background: #292f37;
  height: 448px;
  .title {
    height: 30px;
    line-height: 30px;
    background: #181f27;
    padding-left: 18px;
    font-size: 13px;
    color: #ffffff;
  }
  .info-wrapper {
    display: flex;
    .left {
      width: 56%;
      padding-left: 18px;
      margin-right: 3%;
      &-title {
        border-bottom: 1px solid #3f4449;
        font-size: 30px;
        color: #ffffff;
        display: flex;
        align-items:center;
        padding:30px 0;

        h5,h2{
            line-height:normal;
        }
        h2{
            font-size:20px;
        }
        h5{
            font-size:14px;
            opacity:.5;
        }
        img{
            width:50px;
            height:50px;
            margin-right:20px;
        }
      }
      .list {
        li {
          font-family: "PingFangSC-Regular";
          font-size: 12px;
          position: relative;
          border-bottom: 1px solid #3f4449;
          height: 50px;
          line-height: 50px;
          color: #7f8287;
          span {
            color: #e9eaeb;
            position: absolute;
            left: 80px;
          }
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
    .right {
      width: 40%;
      .right-title {
        font-size: 14px;
        margin: 36px 0 11px 0;
        color: #ffffff;
      }
      .info {
        color: #94979b;
        font-size: 12px;
        line-height: 26px;
      }
      .more {
        font-size: 12px;
        margin-top: 15px;
      }
    }
  }
}
</style>

