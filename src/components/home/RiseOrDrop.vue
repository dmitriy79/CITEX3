
<template>
   <div class="riseOrDrop">
       <div class="list list-rise">
           <div class="title"><div>涨幅排行榜</div></div>
           <ul>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-uos"></i></div></li>
           </ul>
       </div>
       <div class="list list-drop">
           <div class="title"><div>跌幅排行榜</div></div>
           <ul>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               <li><div class="type">EOS/BTC</div><div class="rate">+30%<i class="ico-downs"></i></div></li>
               
           </ul>
       </div>
    </div>   
</template>
<script>
export default {
    data(){
        return{
            name:'RiseOrDrop'
        }
    }
}
</script>
<style lang="less" scoped>
.riseOrDrop{
    display: flex;
        margin-top: 33px;
    .list{
        width: 50%;
        background: #292F37;
        &:first-child{
            margin-right: 20px;
        }
        .title{
            background: #1f252d;
            height: 40px;
            line-height: 40px;
            div{
                width: 120px;
                text-align: center;
                display: block;;
                color: #fff;
                font-size: 14px;
                background: #292F37;
            }
        }
        ul{
                overflow: hidden;
            padding: 10px 5px 11px 15px;
            li{
                height: 50px;
                width: 48%;
                float: left;
                margin: 0 10px 4px 0;
                display: flex;
                align-items: center;
                padding:0 16px 0 9px;
                font-family:"PingFangSC-Semibold";
font-size: 14px;
background: #31373e;
            .type{
                color: #d4d5d7;
                flex: 1;
            }
            .rate{
                color: #1FC56D;
            }
            }
        }
    }
    .list-drop{
        ul{
            li{
                .rate{
                    color: #EF6E59;
                }
            }
        }
    }
}
</style>
