<template>
    <div class="member-content">
        <div class="property-wrapper">
        <div class="member-title">
          <h1>我的资产</h1>
           <div class="member-total">
            <div class="member-assets">总资产折合：0.00048100 BTC<i>≈<b>21.23</b>CNY</i></div>
             <div @click="showRecord" class="button button-min" ><i class="ico ico-order"></i>提币&充币记录</div>
             </div>
        </div>
  
        <div class="top-info">
            <div class="flex-c-b info-left">
              <div class="search-item"> <span class="ico-search"></span><span class="input-text"><input type="text" v-model="searchValue"></span> </div> 
              <span class="check-item"><i class="check" :class="{active:this.checked}" @click="handleChecked"></i>隐藏小额资产</span>
            </div>
        </div>
        <dl class="coin-info">
            <dt><span>币种</span><span>总数（个）</span><span>可用（个）</span><span>冻结（个）</span><span class="txt-right">操作</span></dt>
            
            <dd class="list" v-if=" searchList.length>0" v-for="(item, index) in searchList">
               <span>{{item.coinInfo.name}} </span>
                <span>{{item.total}}</span>
                <span>{{item.able}}</span>
                <span>{{item.frozen}}</span>
                <span class="txt-right">
                    <div @click="fullCoin(index,item.coinId,item.coinName)">充币</div>
                    <div @click="carryCoin(index,item.coinId,item.able)">提币</div>
                    <!-- <div><router-link to="/Transaction" tag="span">交易</router-link></div> -->
                </span>
                <transition name="fade">
                <div class="carry-coin coin-item" ref="child" style="display:none" >
                    <div class="item">
                        <label class="name">提币地址</label>
                        <input type="text" v-model="coinAddress">
                    </div>
                    <div class="item">
                        <div class="item-num">
                            <label class="name">数量</label>
                            <div>
                                <span>可用：<i class="use-num">{{ableNum}}</i></span>
                                <span>限额：<b>800000.0000</b></span>
                            </div>
                        </div>
                        <input type="text" v-model="coinNum">
                    </div>
                    <div class="item"> 
                        <div class="item-input">
                            <div class="rate-text"><label class="name">手续费</label></div>
                            <input type="text" v-model="rate">
                        </div>
                         <div class="item-input">
                            <label class="name">到账数量</label>
                            <input type="text" v-model="realNum">
                        </div>

                    </div>
                    <div class="tips">
                    <p>温馨提示：</p>
                    <p>最小提币数量为：555 {{coiname}}</p>
                    <p>为保障资金安全，当您账户安全策略变更、密码修改、使用新地址提币，我们会对提币进行人工审核</p>
                    <p>请耐心等待工作人员电话或邮件联系</p>
                    <p>请务必确认电脑及浏览器安全，防止信息被篡改或泄漏</p>
                    <div class="tips-btn" @click="carrycoins">提币</div>
                    </div>
                </div>
                </transition>
                <transition name="fade">
                <div class="full-coin coin-item" ref="child1" style="display:none" >
                    <div class="item">
                        <label class="name">充币地址</label>
                        <div class="address-wrapper"><span class="address">{{fullAddress}}</span><span class="copy" v-clipboard:copy="fullAddress"
    @success="handleSuccess" v-if="able">复制</span><span class="ewm" @click="showEwm" v-if="able">二维码</span></div>
                        <img src="@/assets/images/ewm.png" alt="" class="ewm-img" v-if="isshowEwm">
                    </div>
                    <div class="item">
                        查看<span class="record" @click="showRecord">充币记录</span>跟踪状态
                    </div>
                    <div class="tips">
                    <p>温馨提示：</p>
                    <p>最小充值数量为：555 {{coiname}}</p>
                    <p>为保障资金安全，当您账户安全策略变更、密码修改、使用新地址提币，我们会对提币进行人工审核</p>
                    <p>请耐心等待工作人员电话或邮件联系</p>
                    <p>请务必确认电脑及浏览器安全，防止信息被篡改或泄漏</p>
                    </div>
                </div>
                
                
                 </transition>
            </dd>
        </dl>
    </div>
    <el-dialog title="提示" :visible.sync="dialogAuditing" width="30%">
      <el-form :model="form" class="dialog-wrapper" label-width="120px">
        <el-form-item label="请输入交易密码：">
          <el-input v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入谷歌验证码：" >
          <el-input v-model="form.code" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAuditing = false">取 消</el-button>
        <el-button type="primary" @click="confirmFull" :plain="true" >确定</el-button>
      </div>
    </el-dialog>
    </div>
    
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex"
export default {
  props: {
    currentTab: {
      type: Boolean
    }
  },

  data() {
    return {
      searchList:null,
        searchValue:'',
      coinAddress: "",
      ableNum:'',
      coinNum: "",
      rate: "",
      realNum: "",
      coinId: "",
      able: true,
      coiname: "",
      coin_Id: "",
      dialogAuditing: false,
      form: {
        code: "",
        password: ""
      },
      fullAddress: "",
      current: "full",
      isShow: false,
      checked: false, //隐藏小额资产
      isShow1: false,
      isshowEwm: false,
      logoUrl: "",
      coinName: "",
      activeIndex: "",
      propertyLists: [],
      fullCoinRecordList: [],
      tableData1: [
        {
          date: "2016-05-02",
          name: "USDT",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "USDT",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ],
      tableData2: [
        {
          date: "2016-05-02",
          name: "USDT",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "USDT",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "USDT",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "USDT",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {
    this.$store.dispatch("assets/allAssets")
  },
  watch: {
    searchValue(val) {
      if (val) {
        this.searchList = this.myAssets.list.filter(item => item.coinInfo.name.indexOf(val.toUpperCase()) >= 0);
        console.log(this.myAssets.list,this.searchList,'this.searchList')
      } else {
        this.searchList = this.myAssets.list;
      }
    },
     myAssets() {
      this.searchList = this.myAssets.list;
      console.log(this.searchList)
    }
    },
  methods: {
    //确定提币
    dialogAudit() {},
    carrycoins() {
      if (this.coinAddress && this.coinNum && this.realNum && this.rate) {
        this.dialogAuditing = true;
      } else {
        if (this.realNum == "") {
          this.$message({
            message: "到账数量不能为空",
            type: "warning"
          });
        }
        if (this.rate == "") {
          this.$message({
            message: "手续费不能为空",
            type: "warning"
          });
        }
        if (this.coinNum == "") {
          this.$message({
            message: "数量不能为空",
            type: "warning"
          });
        }
        if (this.coinAddress == "") {
          this.$message({
            message: "提币不能为空",
            type: "warning"
          });
        }
      }
    },
    //最终确定提币
    confirmFull() {
      if (this.form.password && this.form.code) {
        this.$api
          .withdraw({
            coin_id: this.coin_Id,
            code: this.form.code,
            tradePassword: this.form.password,
            to: this.coinAddress,
            amount: this.coinNum
          })
          .then(res => {
            console.log(res, "99999+++++w我呀提币");
            if (res.message == "成功") {
              this.dialogAuditing = false;
            } else {
              this.$message({
                message: res.message,
                type: "warning"
              });
            }
          });
      }
      //  this.$prompt('请输入交易密码', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',//replace(/[^\d]/g,'')
      //     inputPattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/ ,
      //     inputErrorMessage: '请输入正确的密码'
      //   }).then(({ value }) => {
      //     // this.$api.withdraw({coin_id:,}).then(res=>{

      //     // })
      //   })
    },
    //隐藏小额资产
    handleChecked() {
      this.checked = !this.checked;
      if(this.checked){
        this.searchList = this.myAssets.list.filter(item => item.total>=0);
      }
      else{
        this.searchList = this.myAssets.list
      }
      
    },
    //复制成功
    handleSuccess() {
      this.$message({
        message: "复制成功",
        type: "success"
      });
    },
    //提币
       carryCoin(index,id,ableNum){
         console.log(id,'tibi Tii')
        this.coin_Id =id
        this.ableNum=ableNum
         this.$refs.child1[index].style.display = 'none'
        if (this.$refs.child[index].style.display === 'none') {
        this.$refs.child[index].style.display = 'block'
       
      } else {
        this.$refs.child[index].style.display = 'none'
      
      }
        // this.activeIndex=index
        //   this.isShow=!this.isShow
        //    this.isShow1=false
      },
    //充币
    fullCoin(index, id, name) {
      console.log(id, "w我是coinid+++++");
      this.$api.allotRechargeAddr({ coinId: id }).then(res => {
        if (res.message == "成功") {
          console.log(res.datas, "成功");
          this.fullAddress = res.datas;
        } else {
          this.fullAddress = res.message;
          this.able = false;
          console.log(this.fullAddress, "失败");
        }
        this.coiname = name;
      });
      this.$refs.child[index].style.display = "none";
      if (this.$refs.child1[index].style.display === "none") {
        this.$refs.child1[index].style.display = "block";
      } else {
        this.$refs.child1[index].style.display = "none";
      }
    },
    showEwm() {
      this.isshowEwm = !this.isshowEwm;
    },
    showRecord() {
      this.$router.push('coin-record');
    },
  },
  computed:{
    ...mapState('assets',['myAssets'])
  }
};
</script>

<style>
.el-message-box .el-input input,.el-form-item__content .el-input input {
  color: #000 !important;
}
</style>

<style lang="less" scoped>
.el-input {
  width: 100% !important;
}
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
  .coin-info {
    font-size: 14px;
    dt {
      border-top: 1px solid #3b4148;
    }
    .txt-right {
      text-align: right;
      &>div{
        display:inline-block;
        padding:4px 8px;
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
        input {
          color: #fff;
          text-indent: 25px;
          height: 30px;
        }
      }
      .search-item {
        position: relative;
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

          &.active::after {
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
      span {
        cursor: pointer;
        font-size: 16px;
      }
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
      z-index: 999;
      border: 1px solid #898c91;
      padding: 20px 30px 100px;
      border-radius: 2px;
      position: absolute;
      top: 48px;
      background: #181f27;
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
        font-size: 14px;
        position: relative;
        p {
          line-height: 30px;
        }
        .tips-btn {
          width: 132px;
          height: 42px;
          line-height: 42px;
          background: #2286ff;
          text-align: center;
          position: absolute;
          right: 0;
          bottom: 0;
          border-radius: 2px;
          font-size: 16px;
          cursor: pointer;
          color: #ffffff;
        }
      }
    }

    .carry-coin {
      background: #181f27;
      &::before,
      &::after {
        border: solid transparent;
        content: " ";
        height: 0;
        right: 10px;
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
    .full-coin {
      .copy,
      .ewm,
      .record {
        color: #2286ff;
        font-size: 14px;
        cursor: pointer;
      }
      .item {
        font-size: 14px;
        .ewm-img {
          position: absolute;
          left: 330px;
        }
      }
      .address,
      .copy {
        margin-right: 10px;
      }
      &::before,
      &::after {
        border: solid transparent;
        content: " ";
        height: 0;
        right: 58px;
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
</style>

<style>
</style>
