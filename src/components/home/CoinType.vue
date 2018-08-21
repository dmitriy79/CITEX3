<template>
    <div class="coin-type-wrapper">
        <div class="coin-block">
            <div class="item">
                <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                <div class="price" >0.21232 ≈$2.12</div>
                <div  class="num">量：<span >1982382983</span></div>
            </div>
             <div class="item">
                <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                <div class="price" >0.21232 ≈$2.12</div>
                <div  class="num">量：<span >1982382983</span></div>
            </div>
             <div class="item">
                <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                <div class="price" >0.21232 ≈$2.12</div>
                <div  class="num">量：<span >1982382983</span></div>
            </div>
             <div class="item">
                <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                <div class="price" >0.21232 ≈$2.12</div>
                <div  class="num">量：<span >1982382983</span></div>
            </div>
            <div class="item">
                <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                <div class="price" >0.21232 ≈$2.12</div>
                <div  class="num">量：<span >1982382983</span></div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.coin-type-wrapper{
    .coin-block{
        display: flex;
        margin: 0 -1%;
        .item{
            background: #2c323a;
            width:25%;
            margin: 0 1%;
            padding:13px 0 0 9px;
            height: 109px;
            .coin-type{
                height: 17px;
                line-height: 17px;
                padding-right: 6%;
                display: flex;
                .type{
                    font-family: Helvetica-Bold;
                    font-size: 14px;
                    color: #EBEFF3;
                    flex:1;
                }
            }
            .price,.num{
                font-size: 12px;
                color: #C8CCD1;
            }
        }
    }
}
</style>


