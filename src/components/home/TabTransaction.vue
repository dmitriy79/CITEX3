<template>
    <div class="tab-transaction">
        <div class="tab" >
            <span v-for="(item,index) of navs" :class="{active:active==index}"  @click="tabs(index)">{{item.name}}</span>
        </div>
        <div class="content">
            <dl  class="transaction-list" v-for="(item,index) of List" v-show=" index == num">
                <dt>
                    <div>币种</div>
                    <div>最新成交价</div>
                    <div>日涨价</div>
                    <div>最低价</div>
                    <div>最高价</div>
                    <div>昨日收盘价</div>
                    <div>24h交易量</div>
                </dt>
                <dd>
                    <div > <i class="ico-star"></i> <span class="img-wrap"><img src="../../assets/images/hours.png" alt=""></span> <span>{{item.type}}</span></div>
                    <div >{{item.newprice}}</div> 
                    <div>{{item.riseprice}}</div>
                    <div>{{item.low}}</div>
                    <div>{{item.high}}</div>
                    <div>{{item.close}}</div>
                    <div>{{item.num}}</div>
                </dd>
                
          
            </dl>
        </div>
    </div>
</template>

<script>
export default {
data(){
    return{
        name:'TabTransaction',
        active:0,
        num:0,
        navs:[
            {id:1,name:'ETH交易'},
            {id:2,name:'IT交易'},
            {id:3,name:'BTC交易'},
            {id:4,name:'自选市场'},
        ],
        List:[
            {id:1,type:'TRUE/ETH',newprice:'0.0015900/¥90.23',riseprice:'+0%',low:'0.00159000',high:'0.00159000',close:'0.00159000',num:'989899'},
            {id:2,type:'ITOS/ETH',newprice:'0.0015900/¥90.23',riseprice:'+0%',low:'0.00159000',high:'0.00159000',close:'0.00159000',num:'989899'},
            {id:3,type:'BTC/ETH',newprice:'0.0015900/¥90.23',riseprice:'+0%',low:'0.00159000',high:'0.00159000',close:'0.00159000',num:'989899'},
            {id:4,type:'EOS/ETH',newprice:'0.0015900/¥90.23',riseprice:'+0%',low:'0.00159000',high:'0.00159000',close:'0.00159000',num:'989899'},
           
        ]
    }
},
methods:{
    tabs(index){
        console.log(index)
        this.num = index;
       this.active = index;
    }
},

}
</script>

<style lang="less" scoped>
.tab-transaction{
    background: #292F37;
    margin-top: 18px;
    .tab{
        background: #23272e;
        height:38px;
        line-height: 38px;
        span{
            width: 130px;
            cursor: pointer;
            text-align: center;
            color: #999EA4;
            display: inline-block;
            font-size: 15px;
            &.active{
                color: #f0f4f8;
                background: #292F37;
            }
        }

    }
    .content{height: 540px;
        .transaction-list{
            padding: 0 14px;font-size: 12px;color: #999EA4;background:#292F37;
            dt{display: flex;height: 40px;align-items: center;border-bottom: 1px solid #3B4249;
                div{flex: 1;
                    &:first-child{padding-left: 8px}
                }
            }
            dd{display: flex;align-items: center;height: 40px;border-bottom: 1px solid #3B4249;
            &:last-child{border-bottom: none}
                div{flex: 1;
                    &:first-child{color: #BEC3C8;padding-left: 8px}
                }
                .img-wrap{width: 20px;height: 20px;display: inline-block;margin:0 8px 0 13px;
                    img{width: 100%;height: 100%;}
                }
                .ico-star{font-size: 15px}
            }
        }
    }
}
</style>


