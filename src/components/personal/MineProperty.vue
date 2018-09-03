<template>
    <div>
        <div class="property-wrapper"  v-if="showProperty">
        <div class="title"><span>我的资产</span></div>
        <div class="top-info">
            <div class="info-left">
                <span>总资产折合：0.00048100 BTC<i>≈<b>21.23</b>CNY</i></span>
                 <span class="check-item"><i class="check"></i>隐藏小额资产</span>
                 <div class="search-item"> <span class="ico-search"></span><span class="input-text"><input type="text"></span><span class="iconfont">&#xe627;</span> </div> 
            </div>
            <div class="info-right"><span @click="showRecord" >提币&充币记录</span></div>
        </div>
        <dl class="coin-info">
            <dt><span>币种</span><span>总数（个）</span><span>可用（个）</span><span>冻结（个）</span><span class="txt-right">操作</span></dt>
            <dd class="list">
                <span><span class="wrap-img"><img src="../../assets/images/hours.png" alt=""></span>USDT</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span class="txt-right">
                    <i @click="fullCoin">充币</i>
                    <i @click="carryCoin">提币</i>
                    <i><router-link to="/Transaction" tag="span">交易</router-link></i>
                </span>
                <transition name="fade">
                <div class="carry-coin coin-item" v-if="isShow">
                    <div class="item">
                        <label class="name">提币地址</label>
                        <input type="text">
                    </div>
                    <div class="item">
                        <div class="item-num">
                            <label class="name">数量</label>
                            <div>
                                <span>可用：<i class="use-num">465.6373800</i></span>
                                <span>限额：<b>800000.0000</b></span>
                            </div>
                        </div>
                        <input type="text">
                    </div>
                    <div class="item">
                        <div class="item-input">
                            <div class="rate-text"><label class="name">手续费</label><span>范围：50.000000-50.000000</span></div>
                            <input type="text">
                        </div>
                         <div class="item-input">
                            <label class="name">到账数量</label>
                            <input type="text">
                        </div>

                    </div>
                    <div class="tips">
                    <p>温馨提示：</p>
                    <p>最小提币数量为：555 YEE</p>
                    <p>为保障资金安全，当您账户安全策略变更、密码修改、使用新地址提币，我们会对提币进行人工审核</p>
                    <p>请耐心等待工作人员电话或邮件联系</p>
                    <p>请务必确认电脑及浏览器安全，防止信息被篡改或泄漏</p>
                    <div class="tips-btn">提币</div>
                    </div>
                </div>
                </transition>
                <transition name="fade">
                <div class="full-coin coin-item" v-if="isShow1">
                    <div class="item">
                        <label class="name">提币地址</label>
                        <div class="address-wrapper"><span class="address">ef82ba3200444a6494af10c56b54e967</span><span class="copy">复制</span><span class="ewm" @click="showEwm">二维码</span></div>
                        <img src="../../assets/images/ewm.png" alt="" class="ewm-img" v-if="isshowEwm">
                    </div>
                    <div class="item">
                        查看<span class="record">充币记录</span>跟踪状态
                    </div>
                    <div class="tips">
                    <p>温馨提示：</p>
                    <p>最小提币数量为：555 YEE</p>
                    <p>为保障资金安全，当您账户安全策略变更、密码修改、使用新地址提币，我们会对提币进行人工审核</p>
                    <p>请耐心等待工作人员电话或邮件联系</p>
                    <p>请务必确认电脑及浏览器安全，防止信息被篡改或泄漏</p>
                    </div>
                </div>
                
                
                 </transition>
            </dd>
        </dl>
        
    </div>
    <div class="carry-full-coin" v-if="showList">
        <div class="tabs">
            <span @click="tabRecord('full')" :class="{active:this.current==='full'}">充币记录</span>
            <span @click="tabRecord('carry')" :class="{active:this.current==='carry'}">提币记录</span>
            <div @click="goback">返回</div>
        </div>
        <div class="content">
            <div class="full-coin-wrapper" v-if="this.current==='full'">
                 <el-table :data="tableData1"  style="width: 100%">
                    <el-table-column prop="date" label="时间" width=""></el-table-column>
                    <el-table-column prop="name" label="币种" width="">
                        <template slot-scope="scope">
                            <span class="coinimg-wrapper"><img src="../../assets/images/hours.png" alt=""></span>
                            
                            <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="类型"></el-table-column>
                    <el-table-column prop="address" label="数量"></el-table-column>
                    <el-table-column prop="address" label="状态"></el-table-column>
                </el-table>
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
            </div>
            <div class="carry-coin-wrapper" v-if="this.current==='carry'">
                <el-table :data="tableData2"  style="width: 100%">
                    <el-table-column prop="date" label="时间" width=""></el-table-column>
                    <el-table-column prop="name" label="币种" width="">
                        <template slot-scope="scope">
                            <span class="coinimg-wrapper"><img src="../../assets/images/hours.png" alt=""></span>
                            
                            <span style="margin-left: 10px">{{ scope.row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="类型"></el-table-column>
                    <el-table-column prop="address" label="数量"></el-table-column>
                    <el-table-column prop="address" label="状态"></el-table-column>
                </el-table>
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
             
            </div>
        </div>
    </div>
    </div>
    
</template>
<script>
export default {
    props:{
        currentTab:{
            type:Boolean,
        }
    },
    
  data() {
    return {
        current:'full',
        isShow:false,
        isShow1:false,
        isshowEwm:false,
        showProperty:true,
        showList:false,
        tableData1: [{
            date: '2016-05-02',
            name: 'USDT',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: 'USDT',
            address: '上海市普陀区金沙江路 1517 弄'
          }],
        tableData2: [{
            date: '2016-05-02',
            name: 'USDT',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: 'USDT',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: 'USDT',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: 'USDT',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    };
  },
  mounted(){
    this.myproperty();
  },
  methods:{
    //我的资产列表
      myproperty(){
        
         this.$api.listByUserId({pageNum:1,pageSize:20,collet:0}).then(res=>{
           console.log(res,'eeee8888')
         })
      },
      carryCoin(){
          this.isShow=!this.isShow
           this.isShow1=false
      },
      fullCoin(){
          this.isShow1=!this.isShow1
          this.isShow=false

      },
      showEwm(){
          this.isshowEwm=!this.isshowEwm
      },
      showRecord(){
        this.showProperty=false
        this.showList=true   
      },
      tabRecord(tab){
          console.log(tab,'222299999')
          this.current=tab
      },
     goback(){
        this.showProperty=true
        this.showList=false   
     }
      
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
.property-wrapper {
  height: 920px;
  color: #fff;
  .title {
    height: 40px;
    background: #1b222a;
    span {
      background: #292f37;
      font-size: 15px;
      width: 144px;
      display: block;
      text-align: center;
      height: 40px;
      line-height: 40px;
      color: #ffffff;
      text-align: center;
    }
  }
  .top-info,
  dl {
    padding: 0 30px;
  }
  .coin-info {
    font-size: 14px;
    dt {
      border-top: 1px solid #3b4148;
    }
    .txt-right {
      text-align: right;
      i {
        margin-left: 10px;
        color: #2286ff;
        cursor: pointer;
      }
    }
  }
  .list {
    display: flex;
    position: relative;
    height: 48px;
    border-top: 1px solid #3b4148;
    align-items: center;
    span {
      flex: 1;
      font-size: 14px;
    }
    .wrap-img {
      width: 20px;
      height: 20px;
      display: inline-block;
      margin-right: 5px;
      img {
        width: 100%;
        vertical-align: sub;
      }
    }
  }
  .top-info {
    height: 54px;
    display: flex;
    align-items: center;

    .info-left {
      flex: 1;
      font-size: 16px;
      display: flex;
      align-items: center;

      i {
        font-size: 14px;
        margin-right: 42px;
      }
      .input-text {
        height: 30px;
        display: inline-block;
        // border: 1px solid #3b4148;
        input{color: #fff;text-indent: 25px;    height: 30px;}
      }
      .search-item {
        position: relative;
        margin-left: 31px;
        .ico-search {
          position: absolute;
          left: 9px;
          font-size: 14px;
          color: #e5e7e8;
          top: 8px;
        }
        .iconfont {
          position: absolute;
          right: 9px;
          top: 6px;
          cursor: pointer;
        }
      }
      .check-item {
        font-size: 14px;
        .check {
          display: inline-block;
          top: 2px;
          width: 14px;
          height: 14px;
          background: #292f37;
          cursor: pointer;
          position: relative;
          margin-right: 10px;
          border: 1px solid #fff;

          &::after {
            content: "";
            height: 7px;
            left: 4px;
            position: absolute;
            top: 0px;
            width: 3px;
            border-bottom: 1px solid #2286ff;
            border-right: 1px solid #2286ff;
            transform: rotate(38deg);
          }
        }
      }
    }
    .info-right {
      color: #2286ff;
      span{cursor: pointer;font-size: 16px;}
    }
  }
  .coin-info {
    dt {
      display: flex;
      height: 48px;
      align-items: center;
      span {
        flex: 1;
      }
    }

    .coin-item {
      border: 1px solid #898c91;
      padding: 20px 30px 100px;
      border-radius: 2px;
      position: absolute;
      top: 48px;
      width: 100%;
      .item {
        margin-bottom: 20px;
        overflow: hidden;
        .item-num {
          display: flex;
          align-items: center;
          .use-num {
            color: #2286ff;
            margin-right: 30px;
          }
          .name {
            flex: 1;
          }
        }
        .name {
          line-height: 30px;
        }
        input {
          display: block;
          width: 100%;
          height: 40px;
          line-height: 40px;
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          text-indent: 10px;
        }
        .item-input {
          float: left;
          width: 48%;
          .rate-text {
            display: flex;
            align-items: center;
            .name {
              flex: 1;
            }
            span {
              text-align: right;
            }
          }
          &:first-child {
            margin-right: 4%;
          }
        }
      }
      .tips {
        margin-top: 40px;
        font-size: 14px;position: relative;
        p {
          line-height: 30px;
        }
        .tips-btn{width: 132px;height: 42px;line-height: 42px;background: #2286FF;text-align: center;position: absolute;right: 0;bottom: 0;
border-radius: 2px;font-size: 16px;
color: #FFFFFF;}
      }
    }

    .carry-coin{
       
      &::before,
      &::after {
        border: solid transparent;
        content: " ";
        height: 0;
        right: 45px;
        position: absolute;
        width: 0;
      }
      &::before {
        border-width: 10px;
        border-bottom-color: #898c91;
        top: -21px;
      }
      &::after {
        border-width: 10px;
        border-bottom-color: #292f37;
        top: -20px;
      }
    }
    .full-coin{
        .copy,.ewm,.record{color: #2286FF;font-size: 14px;cursor: pointer;}
         .item{font-size: 14px;
            .ewm-img{
                position: absolute;
                left: 330px;
            }
         }
        .address, .copy{
            margin-right: 10px;
        }
         &::before,
      &::after {
        border: solid transparent;
        content: " ";
        height: 0;
        right: 85px;
        position: absolute;
        width: 0;
      }
      &::before {
        border-width: 10px;
        border-bottom-color: #898c91;
        top: -21px;
      }
      &::after {
        border-width: 10px;
        border-bottom-color: #292f37;
        top: -20px;
      }
    }
  }
}
.carry-full-coin{    height: 920px;
    .content{
      
       div{padding: 0 10px 50px;}
    }
    .tabs{
        height: 40px;margin-bottom: 23px;
        background: #1b222a;
        div{
            text-align: right;
            flex: 1;
            padding-right: 20px;
        }
        cursor: pointer;line-height: 40px;display: flex;
        span{
            display: block;text-align: center;font-size: 15px;
    width: 144px;
        }
        span.active{
                background: #292f37;
    
        }
    }
}
</style>

<style>

</style>
