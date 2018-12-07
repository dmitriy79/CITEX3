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
                        发行时间<span>{{coinInfo.createTime | date-format}}</span>
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
                    <li class="address">
                        白皮书<a :href="coinInfo.wihtePaperUrl" target="_blank">{{coinInfo.wihtePaperUrl}}</a>
                    </li>
                     <li class="address">
                        官网 <a :href='coinInfo.coinPortal' target="_blank">{{coinInfo.coinPortal}}</a>
                    </li>
                     <li class="address">
                        区块查询<a :href="coinInfo.blockExplorerUrl" target="_blank">{{coinInfo.blockExplorerUrl}}</a>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="right-title">{{coinInfo.coinName}}简介</div>
                <div class="info">{{coinInfo.introdution}}</div>
                <!-- <div class="more">了解更多</div> -->
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
  },
  created() {
  },
  methods: {
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
          .address{
              a{
                  width: 80%;
                    overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
    
}
        li {
          font-family: "PingFangSC-Regular";
          font-size: 12px;
          position: relative;
          border-bottom: 1px solid #3f4449;
          height: 50px;
          line-height: 50px;
          color: #7f8287;
          a,span {
            color: #e9eaeb;
            position: absolute;
            left: 70px;
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
        height: 286px;
        overflow-y: auto;
      }
      .more {
        font-size: 12px;
        margin-top: 15px;
      }
    }
  }
}
</style>

