<template>
    <div>
        <div class="fullcoin-wrapper" >
            <div class="title"><span>我要充币</span></div>
            <div class="select-coin">
                <el-form ref="form" :model="form" label-width="80px" :inline="true"> 
                    <el-form-item label="OEX币：">
                        <el-select v-model="form.region" placeholder="OEX币">
                        <el-option label="OEX币" value="0"></el-option>
                        <el-option label="ETH币" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div class="address-wrapper">
                <div class="tips">这是您的钱包地址，请将您的OEX币转入此地址</div>
                <div class="address">
                    钱包地址：<span>https://www.oex.cn/regcode/ef82ba3200444a6494af10c56b54e</span> <div class="copy-btn btn">复制</div><div class="ewm-btn btn" @click="showEwm">二维码</div>
                    <img src="../../assets/images/ewm.png" alt="" class="ewm-img" v-if="isshowEwm">
                </div>
            </div>
            
             <div class="full-coin-wrapper">
                 <el-table :data="tableData1"  style="width: 100%">
                    <el-table-column prop="date" label="转入时间" >

                    </el-table-column>
                    <el-table-column prop="type" label="转入币种" >
                        <template slot-scope="scope">
                            <span class="coinimg-wrapper"><img src="../../assets/images/hours.png" alt=""></span>
                            
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isshowEwm:false,
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
    methods:{
        showEwm(){
            this.isshowEwm=!this.isshowEwm
        }
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
        height: 30px;padding:0 17px;background: #D8D8D8;
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

