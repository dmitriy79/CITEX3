<template>
  <div>
    <e-charts auto-resize :options="deptChartOption" @legendselectchanged="legendSelectChanged" style="width:95%;"></e-charts>
  </div>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts";
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legendScroll");

export default {
  components: { ECharts },
  data() {
    return {
      deptChartOption: {
        grid: { left: 80, top: 30, right: 50, bottom: 10 },
        tooltip: {
          confine: true,
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: { color: "rgba(0, 0, 0, 0)" }
          },
          backgroundColor: "#355475",
          textStyle: { color: "#fff", fontSize: "14px" },
          extraCssText:
            "box-shadow: 0 0 16px 0 rgba(0, 0, 0, .2);border-radius: 4px;"
        },
        legend: {
          data: [
            { name: "买单", icon: "rect" },
            { name: "卖单", icon: "rect" }
          ],
          selected: {
            买单: true,
            卖单: true
          },
          itemWidth: 10,
          itemHeight: 10,
          textStyle: { color: "#fff" },
          pageIconColor: "#4CC453",
          show:false
        },
        xAxis: {
          type: "category",
          axisLine: { show: true },
          axisTick: { show: false },
          axisLabel: { show: true ,color:' #fff'},
          boundaryGap: false,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        yAxis: [
          {
            type: "value",
            axisLine: { show: true },
            axisTick: { show: false },
            axisLabel: {  show: true ,color:' #94979b',formatter: '{value} k'},
            splitLine: { show: false },
          }
        ],
        series: [
          {
            name: "买单",
            type: "line",
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            symbolSize: 3,
            sampling: "average",
            itemStyle: { normal: { color: "#4cc453" } },
            lineStyle: { normal: { color: "#284e42" } },
            areaStyle: { color: "#284e42" ,opacity:1},
            data: [10, 9, 8, 5, 1, "", "", "", "", ""]
            
          },
          {
            name: "卖单",
            type: "line",
            smooth: true,
            symbol: "circle",
            showSymbol: false,
            symbolSize: 3,
            sampling: "average",
            itemStyle: { normal: { color: "#e94c4c" } },
            lineStyle: { normal: { color: "#523c3e" } },
            areaStyle: { color: "#523c3e",opacity:1 },
            data: ["", "", "", "", "", 0, 2, 3, 6, 8]
          }
        ]
      }
    };
  },
  mounted() {
    this.deptChartOption.tooltip.formatter = this.deptChartHover;
  },
  methods: {
    legendSelectChanged(obj) {
      const selected = obj.selected;
      if (selected) {
        this.deptChartOption.legend.selected[obj.name] = selected[obj.name];
      }
    },
    deptChartHover(value) {
      let result = "";
      value.map(item => {
        if (item.value !== "") {
          result = value[0].axisValue + item.value;
        }
      });
      return result;
    }
  }
};
</script>
