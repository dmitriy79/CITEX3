<template>
    <div class="transaction-price">
         <div class="list buy-list">
            <dl>
                <dt class="title">
                    <span>成交价格(ETH)	</span>
                    <span>数量(IOST)</span>
                    <span>时间</span>
                </dt>
                <dd>
                    <span>0.005469</span>
                    <span>192.898131</span>
                    <span>12:12:11</span>
                </dd>
                <dd>
                    <span>7342.62</span>
                    <span>192.898131</span>
                    <span>12:12:11</span>
                </dd>
                <dd>
                    <span>7342.62</span>
                    <span>192.898131</span>
                    <span>12:12:11</span>
                </dd>
                <dd>
                    <span>7342.62</span>
                    <span>192.898131</span>
                    <span>12:12:11</span>
                </dd>
            </dl>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
             name:'TransactionPrice'
        }
    }
   
}
</script>
<style lang="less" scoped>
 .transaction-price{
    background: #292F37;
    height: 664px;
    margin-left: 12px;
    
    span{flex: 1}
    span:last-child{padding-right: 26px}
    dd{display: flex;
        span{font-size: 12px;
color: #9E9FA6;    height: 26px;
    line-height: 26px;}
        span:first-child{padding-left: 16px}
    }
     .title{height: 33px;background: #181F27;font-size: 12px;
        color: #E4E5E7;padding-left: 16px;
            display: flex;align-items: center;
            span{cursor: pointer;flex: 1;
              
            }
        }
 }
</style>


