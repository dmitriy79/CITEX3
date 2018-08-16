<template>
    <div class="buyOrSell-wrapper">
        <div class="list buy-list">
            <dl>
                <dt class="title">
                    <span></span>
                    <span>价格（ETH）</span>
                    <span>数量（IOST)</span>
                    <span>累计（IOST）</span>
                </dt>
                <dd>
                    <span>买1</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>买2</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>买3</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>买4</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
            </dl>
        </div>
          <div class="list sell-list">
            <dl>
                <dd>
                    <span>卖1</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>卖2</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
                <dd>
                    <span>卖3</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                    <span>0.005469</span>
                </dd>
            </dl>
        </div>
        <div class="list-bottom">
            <span class="left">0.1009447</span><span class="right">&nbsp;≈&nbsp;<i>8000.12 </i>CNY</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'BuySell'
        }
    }
}
</script>
<style lang="less" scoped>
.buyOrSell-wrapper{
    height: 664px;
    position: relative;
    background: #292F37;
    .list{margin-bottom: 25px;
        .title{height: 33px;background: #181F27;font-size: 12px;
color: #E4E5E7;padding-left: 16px;
            display: flex;align-items: center;
            span{cursor: pointer;}
        }
        dd,dt{display: flex;padding-left: 16px}
        dd{
            span{
                height: 26px;line-height: 26px;
            }
        }
        span{display: inline-block;font-size: 12px;align-items: center;
        &:first-child{width: 15%!important}
       &:not(:first-child){flex: 1}
}
    }
    .buy-list{
        dd{
            span:first-child{
               color: #5DC176;
            }
        }
    }
    .sell-list{
        dd{
            span:first-child{
               color: #FF7758;;
            }
        }
    }
    .list-bottom{background: #181F27;height: 33px;line-height: 33px;text-align:center;position: absolute;bottom: 0;width: 100%;font-size: 14px;
        .left{
            color: #1FC56D;
            }
        .right{
color: #FCFCFC;;
        }
    }
}
</style>

