<template>
  <div class="coin-type-wrapper">
    <div class="container">
      <div class="coin-block">
        <div class="item" v-for="(item,index) in coinList">
          <div class="top-wrapper">
            <div class="coin-type"><span class="type">{{item.name}}</span><span class="rate green">{{item.increaseNum}}%</span></div>
            <div class="price">{{item.price}} ≈$2.12</div>
            <div class="num">量：<span>{{item.amount_24H}}</span></div>
          </div>
          <x-chart :id="id1" :option="option1"></x-chart>
          <!-- <x-chart :id="id2" :option="option2"></x-chart>
               <x-chart :id="id3" :option="option3"></x-chart>
               <x-chart :id="id4" :option="option4"></x-chart>
               <x-chart :id="id5" :option="option5"></x-chart> -->
        </div>
    <!--     <div class="item">
          <div class="top-wrapper">
            <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate red">-12%</span></div>
            <div class="price">0.21232 ≈$2.12</div>
            <div class="num">量：<span>1982382983</span></div>
          </div>
          <x-chart :id="id2" :option="option2"></x-chart>
        </div>
        <div class="item">
          <div class="top-wrapper">
            <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate green">+32%</span></div>
            <div class="price">0.21232 ≈$2.12</div>
            <div class="num">量：<span>1982382983</span></div>
          </div>
          <x-chart :id="id3" :option="option3"></x-chart>
        </div>
        <div class="item">
          <div class="top-wrapper">
            <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate red">-32%</span></div>
            <div class="price">0.21232 ≈$2.12</div>
            <div class="num">量：<span>1982382983</span></div>
          </div>
          <x-chart :id="id4" :option="option4"></x-chart>
        </div>
        <div class="item">
          <div class="top-wrapper">
            <div class="coin-type"><span class="type">TRUE/BTC</span><span class="rate green">+32%</span></div>
            <div class="price">0.21232 ≈$2.12</div>
            <div class="num">量：<span>1982382983</span></div>
          </div>
          <x-chart :id="id5" :option="option5"></x-chart>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import XChart from '../../components/chart/DeepImg.vue'
// 导入chart组件模拟数据
import options from '../../chart-options/deepImg'
export default {
  data() {
    return {
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
  props:{
    coinList:Array
  },
  components: {
    XChart
  },
  mounted() {
    this.getTopTradeCoinPairs()
  },
  methods: {
    //币种分类
    //获取主要币种
    getTopTradeCoinPairs() {
      this.$api.classificationList({})
        .then(res => {
        //  this.category = res.data.datas
          console.log(res)
          // this.$api.getTopTradeCoinPairs().then(res => {
          //   console.log(res, '主要币种')
          // })
        })

    }
  }
}

</script>
<style lang="less" scoped>
.coin-type-wrapper {
  .coin-block {
    display: flex;
    margin: 0 -1%;
    .item {
      background: #2c323a;
      width: 25%;
      margin: 0 1%;
      height: 109px;
      .top-wrapper {
        padding: 13px 0 0 9px;
      } 
      .coin-type {
        height: 17px;
        line-height: 17px;
        padding-right: 6%;
        display: flex;
        .type {
          font-family: Helvetica-Bold;
          font-size: 18px;
          color: #EBEFF3;
          flex: 1;
        }
        .rate {
          font-size: 16px;
          font-weight:800;
        }
      }
      .price{
        margin:6px 0;
      }
      .price,
      .num {
        font-size: 12px;
        color: #C8CCD1;
      }
    }
  }
}

</style>
