<template>
    <div class="coin-type-wrapper">
        <div class="coin-block">
            <div class="item">
                <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                <div class="price" >0.21232 ≈$2.12</div>
                <div  class="num">量：<span >1982382983</span></div>
               <x-chart :id="id" :option="option"></x-chart>
                
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
	import XChart from '../../components/chart/DeepImg.vue'
// 导入chart组件模拟数据
import options from '../../chart-options/deepImg'
export default {
    data(){
    	return{
    		 id: 'id',
	 option: options.bar
    	}
    },
     components: {
   	XChart
  	},
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
                .rate{font-size:16px}
            }
            .price,.num{
                font-size: 12px;
                color: #C8CCD1;
            }
        }
    }
}
</style>


