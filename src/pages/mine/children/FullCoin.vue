<template>
    <div>
        <div class="fullcoin-wrapper" >
            <div class="title"><span>我要充币</span></div>
            <div class="select-coin">
                <el-form ref="form" :model="form" label-width="80px" :inline="true"> 
                    <el-form-item label="FBEx：">
                        <el-select v-model="value" placeholder="请选择" @change="selectCoin">
                        <el-option v-for="item in list" :label="item.name"  :value="item.id" 
     :key="item.id"></el-option>
                       
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <!-- <div id="qrcode"></div> -->
            <div class="address-wrapper">
                <div class="tips">这是您的钱包地址，请将您的FBEx币转入此地址</div>
                <div class="address">
                    
                    钱包地址：<span>{{address}}</span> <button class="copy-btn btn"  v-clipboard="copyData" ref="btns"   @success="handleSuccess">复制</button><button ref="btns" class="ewm-btn btn" @click="showEwm">二维码</button>
                    <!-- <img src="@/assets/images/ewm.png" alt="" class="ewm-img" v-if="isshowEwm"> -->
                    <div id="qrcode" class="ewm-img" ref="qrcode"></div>
                </div>
            </div>
            
             <!-- <div class="full-coin-wrapper">
                 <el-table :data="tableData1"  style="width: 100%">
                    <el-table-column prop="date" label="转入时间" >

                    </el-table-column>
                    <el-table-column prop="type" label="转入币种" >
                        <template slot-scope="scope">
                            <span class="coinimg-wrapper"><img src="@/assets/images/hours.png" alt=""></span>
                            
                            <span style="margin-left: 10px">{{ scope.row.type }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="num" label="转入数量"></el-table-column>
                    <el-table-column prop="num" label="手续费"></el-table-column>
                    <el-table-column prop="num" label="到账数量"></el-table-column>
                    <el-table-column prop="num" label="确认次数"></el-table-column>
                    <el-table-column prop="num" label="类型"></el-table-column>
                    <el-table-column prop="num" label="状态"></el-table-column>
                </el-table>
            </div> -->
        </div>
    </div>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
    data(){
        return{
            isshowEwm:false,
            value:'',
            coinId:'',
            list:[],
            address:'',
            copyData: '',
            form: {
      
          region: '',
          },
            tableData1: [{
            date: '2016-05-02',
            type: 'USDT',
            num: '1'
          }]
        }
    },
    mounted () {
        this.getFullcoinList()
    },
    methods:{
        
        //下拉选择币种
        selectCoin(val){
            this.$api.allotRechargeAddr({coinId:val}).then(res=>{
                if(res.message=='成功'){
                     this.address=res.datas
                     this.copyData=res.datas
                         this.$refs.btns.removeAttribute('disabled')
                  this.$refs.btns.style.cursor = ""
                  this.$refs.qrcode.style.display="none"
              
                  
                }
                else{
                   this.$refs.btns.setAttribute('disabled', 'disabled')
                  this.$refs.btns.style.cursor = "not-allowed"
                  this.$refs.qrcode.style.display="none"
                  this.address=res.message  
                }
           })
            // this.address=val
        },
        qrcode () {
            document.getElementById('qrcode').innerHTML = '';
          let qrcode = new QRCode('qrcode', {
            width: 100,
            height: 100, // 高度
            text: this.address, // 二维码内容
            render:'canvas', // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
            background: '#f0f',
            foreground: '#ff0'
          })

          console.log(qrcode,'0999999')
        },
      
        showEwm(){
            console.log('wos我是二维码')
            this.isshowEwm=!this.isshowEwm
           this.$refs.qrcode.style.display="block"
            this.qrcode()
        },
        getFullcoinList(){//
            this.$api.all().then(res=>{
               var content=res.datas
               content.forEach(element => {
                   this.coinId=element.id
                   this.$api.allotRechargeAddr({coinId:this.coinId}).then(res=>{
                       console.log(res,'w我是返回的0000')
                   })
               });
               this.list=content
            })
        },
        //复制
        handleSuccess(){
            this.$message({
                message: '复制成功',
                type: 'success'
                });
        },
        }
}
</script>
<style>
.fullcoin-wrapper .el-select{width: 500px!important} 
</style>

<style lang="less" scoped>
.address-wrapper{
    padding: 0 20px;
    .tips{
        font-size: 13px;
        color: #9E9FA6;
    }
    .address{    margin: 14px 0 18px 4px;
        font-size: 14px;
color: #fff;
line-height: 30px;
display: flex;
    }
    .btn{
        margin: 0 10px;cursor: pointer;font-size: 14px;
        height: 30px;padding:0 17px;background: #D8D8D8;color: #fff;
border-radius: 4px;
    }
    .ewm-btn{background:#2286FF}
}
.select-coin{padding: 0 10px;}
.fullcoin-wrapper{
    .title{
        height: 40px;
        background: #1b222a;
            margin-bottom: 23px;
        span{
            background: #292f37;
            font-size: 15px;
            width: 144px;
            display: block;
            height: 40px;
            line-height: 40px;
            color: #ffffff;
            text-align: center;
        }
    }
    
}
.full-coin-wrapper{padding: 0 10px 50px;
    div{
        padding: 0 10px 50px;
    }
        
}
</style>

