<template>
    <div class="coin-type-wrapper">
           <div class="container">
        <div class="coin-block">
            <div class="item">
                <div class="top-wrapper">
                    <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                    <div class="price" >0.21232 ≈$2.12</div>
                    <div  class="num">量：<span >1982382983</span></div>
                </div>
               <x-chart :id="id1" :option="option1"></x-chart>
            </div>
            <div class="item">
                <div class="top-wrapper">
                    <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                    <div class="price" >0.21232 ≈$2.12</div>
                    <div  class="num">量：<span >1982382983</span></div>
                </div>
               <x-chart :id="id2" :option="option2"></x-chart>
            </div>
             <div class="item">
                <div  class="top-wrapper">
                    <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                    <div class="price" >0.21232 ≈$2.12</div>
                    <div  class="num">量：<span >1982382983</span></div>
                </div>
               <x-chart :id="id3" :option="option3"></x-chart>
            </div>
             <div class="item">
                <div  class="top-wrapper">
                    <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                    <div class="price" >0.21232 ≈$2.12</div>
                    <div  class="num">量：<span >1982382983</span></div>
                </div>
               <x-chart :id="id4" :option="option4"></x-chart>
            </div>
             <div class="item">
                <div  class="top-wrapper">
                    <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate">+32%</span></div>
                    <div class="price" >0.21232 ≈$2.12</div>
                    <div  class="num">量：<span >1982382983</span></div>
                </div>
               <x-chart :id="id5" :option="option5"></x-chart>
            </div>
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
    		 id1: 'id1',
    		 id2: 'id2',
    		 id3: 'id3',
    		 id4: 'id4',
    		 id5: 'id5',
	        option1: options.area1,
	        option2: options.area2,
	        option3: options.area3,
	        option4: options.area4,
	        option5: options.area5,
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
            //    position: relative;
            height: 109px;
            .top-wrapper{
                padding:13px 0 0 9px;
            }
            // .x-bar{position: absolute;bottom: 0}
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


