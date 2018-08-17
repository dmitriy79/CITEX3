<template>
    <div class="coin-tab">
        <div class="search-wrap">
              <input type="text" placeholder="查询" class="search">
              <span><img src="../../assets/images/icon-refresh.png" alt="" class="refresh"><i>CNY</i></span>
        </div>
        <ul class="nav-bar">
            <li v-for="(item,index) of navs" :class="{active:active==index}" @click="tabs(index)">{{item.name}}</li>
            <li class="fr"><span class="check-icon"></span><i class="check">自选</i></li>
        </ul>
        <div class="coin-list-wrap">
            <div class="title">
                <span class="coin-type">币种</span>
                <span class="price">价格<b><i class="up"></i><i class="down"></i></b></span>
                <span class="rate">涨幅<b><i class="up"></i><i class="down"></i></b></span>
                <span class="num">24h交易量<b><i class="up"></i><i class="down"></i></b></span>
            </div>
            <div class="coin-list" v-for="(item,index) of coinList" v-show=" index == num">
                <span class="coin-type">{{item.type}}</span>
                <span class="price">{{item.price}}</span>
                <span class="rate" >{{item.rate}}</span>
                <span class="num">{{item.num}}</span>
                <span class="icon-save" @click="checkCoin" :class="{select:isSelect}">

                </span>
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
                isSelect:false,
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
            checkCoin(){
                this.isSelect=!this.isSelect
            }
        }
    }
</script>


<style lang="less" scoped>
.coin-tab{
    background: #161C24;    margin: 0 9px 0 12px;
    .search-wrap{
        input{
            width: 67.5%;
            background: #3B4249;
            border-radius: 2px;
            padding:6px 0 6px 7px;
            margin: 21px 0 21px 13px;
            font-size: 13px;
            color: #B6B7B7;
            text-indent: 30px;
        }
        i{padding-left: 15%}
        .search{
            background:#3B4249 url('~@/assets/images/search.png') no-repeat 10px center;
        }
        .refresh{cursor: pointer;}
        span{
            background: #292F37;
            border-radius: 2px;
            padding: 5px 10px;
            font-family:PingFangSC-Semibold;
            font-size: 13px;
            width:24%;
            display: inline-block;
            margin-right:4%
        }
    }
    .coin-list-wrap{
        background: #292F37;
        height: 561px;
        padding: 0 16px 0 14px;
        span{
            &:first-child{padding-left: 10px}
        }
        .title{
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            color: #9E9FA6;
            border-bottom: 1px solid #3f4449;
                display: flex;
             span{position: relative;display: inline-block;cursor: pointer;
             
             b{    height: 14px;
    width: 14px;
    display: inline-block;
    margin-left: 10px;}
             }
            .up{
                height: 12px;width: 12px;display: inline-block;
                &::before{
                    position: absolute;
                    top: 9px;
                    right: 20px;
                    width:0;
                    height:0;
                    border-width:0 4px 4px;
                    border-style:solid;
                    border-color:transparent transparent #696d73;/*透明 透明  灰*/
                     content: ' ';

                }
            }
            .down{
                &::after{
                     content: ' ';
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    width:0;
                    height:0;
                    border-width:4px 4px 0;
                    border-style:solid;
                    border-color:#fff transparent transparent;
                }
            }
            .rate{
                i{
                    &::before{right: 3px}
                    &::after{right: 3px}
                }
            }
             .num{
                i{
                    &::before{right: 3px}
                    &::after{right: 3px}
                }
            }
            
        }
        .coin-type{
                width: 15.7%;
                margin-right: 5.3%;
                
               
            }
            .price{
                width: 16.7%;
                margin-right: 7.4%
                
            }
            .rate{
                // width: 8.9%;
                margin-right: 8.4%
            }
            .num{
                width:28%;
                text-align: right
            }
        .coin-list{ color: #E7E7E7;font-size: 0;height: 35px;border-bottom:1px solid #3f4449;line-height:35px;
            span{display: inline-block;    font-size: 11px;}
            .icon-save{ height: 13.6px;width:15.5px;background: url('~@/assets/images/star-default.png') no-repeat center center;margin-left: 16px;cursor: pointer;}
           .select.icon-save{background: url('~@/assets/images/star.png') no-repeat center center;}
           .num{ padding-right: 7px;}   
        }
        .coin-list:hover{background: #181F27;cursor: pointer;}
    }
    .nav-bar{overflow: hidden;
    li{
        float: left;
        font-family: PingFangTC-Semibold;
        font-size: 12px;
        color: #FFFFFF;
        padding:6.5px 20px;
        cursor: pointer;
       &.active{background: #292F37;}
    }
     .fr{float: right;font-size: 0;height: 30px;
        .check{
             font-size: 12px;    margin-left: 3.7px;
        }
        .check-icon{display: inline-block;height: 13.6px;width:15.5px;background: url('~@/assets/images/star.png') no-repeat center center;}
     }
}
}


</style>

<style>
@media only screen and (max-width: 1920px) and (min-width: 1400px){
 .transaction-wrap .transaction-top div.left{
        width:76%
} 
#app .transaction-wrap .transaction-top .right{
    width:24%
}
}
</style>