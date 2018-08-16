<template>
    <div class="coin-tab">
        <div class="search-wrap">
              <input type="text" placeholder="查询" >
              <span>CNY</span>
        </div>
        <ul class="nav-bar">
            <li v-for="(item,index) of navs" :class="{active:active==index}" @click="tabs(index)">{{item.name}}</li>
            <li class="fr">自选</li>
        </ul>
        <div class="coin-list-wrap">
            <div class="title">
                <span class="coin-type">币种</span>
                <span class="price">价格</span>
                <span class="rate">涨幅</span>
                <span class="num">24h交易量</span>
            </div>
            <div class="coin-list" v-for="(item,index) of coinList" v-show=" index == num">
                <span class="coin-type">{{item.type}}</span>
                <span class="price">{{item.price}}</span>
                <span class="rate">{{item.rate}}</span>
                <span class="num">{{item.num}}</span>
                <span class="icon-save"></span>
            </div>
        </div>
        <div class="tab-content">

        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                active:0,
                num:0,
                navs:[
                    {id:1,name:'ETH交易'},
                    {id:2,name:'IT交易'},
                    {id:3,name:'BTC交易'} 
                ],
                coinList:[
                    {id:1,type:'TRUE',price:'400.12',rate:'-10%',num:90012112},
                    {id:2,type:'EOS',price:'123.12',rate:'+59%',num:9002},
                    {id:3,type:'BCH',price:'5000.12',rate:'-19%',num:90202},
                ]
            }
        },
        methods:{
            tabs(index){
				this.num=index
				this.active=index
			},
        }
    }
</script>


<style lang="less" scoped>
.coin-tab{
    background: #161C24;    margin: 0 9px 0 12px;
    .search-wrap{
        input{
            width: 60%;
            background: #3B4249;
            border-radius: 2px;
            padding:6px 0 6px 7px;
            margin: 21px 0 21px 13px;
            font-size: 13px;
            color: #B6B7B7;
        }
        span{
            background: #292F37;
            border-radius: 2px;
            padding: 5px 10px;
            font-family:PingFangSC-Semibold;
            font-size: 13px;
            width:21%;
            display: inline-block;
            margin-right:4%
        }
    }
    .coin-list-wrap{
        background: #292F37;
        height: 561px;
        padding: 0 16px 0 14px;
        .title{
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            color: #9E9FA6;
            border-bottom: 1px solid #3f4449;
            span{display: inline-block}
        }
        .coin-type{
                width: 11.7%;
                margin-right: 5.3%;
                
               
            }
            .price{
                width: 16.7%;
                margin-right: 7.4%
                
            }
            .rate{
                width: 8.9%;
                margin-right: 8.4%
            }
            .num{
                width:21.7%;
                text-align: right
            }
        .coin-list{ color: #E7E7E7;font-size: 11px;height: 35px;border-bottom:1px solid #3f4449;line-height:35px;
            span{display: inline-block;}
            
        }
    }
    .nav-bar{overflow: hidden;
    li{
        float: left;
        font-family: PingFangTC-Semibold;
        font-size: 12px;
        color: #FFFFFF;
        padding:6.5px 13px;
        cursor: pointer;
       &.active{background: #292F37;}
    }
     .fr{float: right;}
}
}


</style>

<style>
@media only screen and (max-width: 1920px) and (min-width: 1400px){
#app .transaction-wrap .transaction-top .left{
        width:76%
}
#app .transaction-wrap .transaction-top .right{
    width:24%
}
}
</style>