<template>
  <div class="x-bar">
    <div :id="id" ></div>
  </div>
</template>
<script>
  import HighCharts from 'highcharts'

  import options from "@/chart-options/deepImg";
  export default {
   // 验证类型
    props: {
      id: {
        type: String
      },
      ask: {
        type: Array
      },
      bid: {
        type: Array
      }
    },
    watch: {
      ask() {
        this.initDeepChart();
      },
      bid() {
        this.initDeepChart();
      },
    },
    methods: {
      initDeepChart() {
        const option = options.deep;
        let askArr = this.ask.map(item => {
          return [item.price, item.totalCount];
        });
        let bidArr = this.bid.map(item => {
          return [item.price, item.totalCount];
        });
        option.series[0].data = bidArr;
        option.series[1].data = askArr;
        HighCharts.chart(this.id, option);
      }
    },
    mounted() {
    },
  }
</script>