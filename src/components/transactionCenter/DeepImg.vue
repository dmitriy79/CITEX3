<template>
  <div>
    <h2>深度图</h2>
    <e-charts auto-resize :options="deptChartOption" @legendselectchanged="legendSelectChanged"></e-charts>
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
        grid: { left: 10, top: 30, right: 10, bottom: 10 },
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
          pageIconColor: "#4CC453"
        },
        xAxis: {
          type: "category",
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          boundaryGap: false,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        yAxis: [
          {
            type: "value",
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false }
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
            lineStyle: { normal: { color: "#243235" } },
            areaStyle: { color: "#243235" },
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
            lineStyle: { normal: { color: "#392332" } },
            areaStyle: { color: "#392332" },
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
