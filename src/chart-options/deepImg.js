// module.exports = {
//     bar: {
//     chart: {
//     type:'column'//指定图表的类型，默认是折线图（line）
//     },
//     credits: {
//     enabled:false
//     },//去掉地址
//     title: {
//     text: '我的第一个图表' //指定图表标题
//     },
//     colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
//      '#24CBE5' ],
//     xAxis: {
//      categories: ['1号', '2号', '3号','3号','3号'] //指定x轴分组
//     },
//     yAxis: {
//      title: {
//      text: '最近七天', //指定y轴的标题
//     },
//     },
//     plotOptions: {
//      column: {
//      colorByPoint:true
//      },
//      },
//     series: [{ //指定数据列
//      name: '小明',
//      data: [{
//      y:1000,
//      color:"red"}, 5000, 4000,5000,2000] //数据
//     }]
//     }
//    }

module.exports = {
  deep: {
    colors: ["#284e42", "#523c3e"],
    chart: {
      type: "area",
      backgroundColor: "#292f37",
      height: 418,
      spacingTop: 40,
      //renderTo: "chart_depth"
    },
    title: {
      text: ""
    },
    subtitle: {
      text: ""
    },
    credits: {
      text: "",
      href: ""
    },
    legend: {
      enabled: false
    },
    xAxis: {
      gridLineWidth: 0,
      lineColor: "#2D3147",
      tickColor: "#2D3147",
      title: {
        text: '',
        style: {
          color: "#575E7E"
        }
      },
      labels: {
        formatter: function() {
          return this.value
        },
        style: {
          color: "#94979b" //
        }
      }
    },
    yAxis: {
      gridLineWidth: 0,
      lineColor: "#2D3147",
      tickColor: "#2D3147",
      lineWidth: 1,
      tickWidth: 1,
      title: {
        text: '',
        style: {
          color: "#575E7E"
        }
      },
      labels: {
        formatter: function() {
          return this.value
        },
        style: {
          color: "#94979b"
        }
      },
      opposite: true
    },
    tooltip: {
      backgroundColor: '#262A42',
      borderColor: '#262A42',
      borderRadius: 3,
      shared: !0,
      style: {
        color: "#c7cce6"
      },
      formatter: function() {
        return "委托价：" + this.points[0].x + "<br>" + this.points[0].series.name + "：" + Math.round(this.points[0].y)
      }
    },
    plotOptions: {
      area: {
        pointStart: 0,
        series: {
          fillOpacity: 1
        },
        marker: {
          enabled: !1,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: !0
            }
          }
        }
      }
    },
    series: [{
      name: '累积',
      data: [
        // [214, 99],
        // [289, 78],
        // [305, 59],
        // [458, 36],
        // [500, 45],
        // [900, 12]
      ]
      // data: [[28408, 298.2393, 0.1367], [28412.73, 298.1026, 0.0389], [28420, 298.0637, 0.2], [28431.52, 297.8637, 0.2223], [28440.11, 297.6414, 0.1002], [28443.62, 297.5412, 0.0348], [28444.44, 297.5064, 0.3842], [28451, 297.1222, 0.176], [28456.25, 296.9462, 5], [28460, 291.9462, 0.4923], [28498.21, 291.4539, 0.0805], [28499, 291.3734, 0.05], [28500, 291.3234, 66.7432], [28500.01, 224.5802, 0.891], [28501, 223.6892, 1.4607], [28502, 222.2285, 0.12], [28508, 222.1085, 0.2191], [28509.23, 221.8894, 0.01], [28510, 221.8794, 26.5546], [28512, 195.3248, 0.1], [28522.67, 195.2248, 0.0473], [28529.81, 195.1775, 0.5], [28538, 194.6775, 0.094], [28538.03, 194.5835, 0.5], [28543, 194.0835, 0.4039], [28545, 193.6796, 0.095], [28555, 193.5846, 0.094], [28560, 193.4906, 0.374], [28561, 193.1166, 0.08], [28567.1, 193.0366, 1.1214], [28588, 191.9152, 0.02], [28600, 191.8952, 43.13], [28608, 148.7652, 0.1], [28613, 148.6652, 0.2], [28613.6, 148.4652, 0.0273], [28617.97, 148.4379, 0.7], [28625.8, 147.7379, 0.0587], [28640.04, 147.6792, 0.2283], [28650, 147.4509, 0.923], [28651, 146.5279, 1.8931], [28651.99, 144.6348, 0.015], [28656, 144.6198, 0.2], [28658, 144.4198, 0.01], [28660, 144.4098, 0.3489], [28665, 144.0609, 0.098], [28668, 143.9629, 0.1187], [28679.92, 143.8442, 0.0935], [28683.22, 143.7507, 0.6], [28692, 143.1507, 1], [28699, 142.1507, 0.3356], [28700, 141.8151, 1.8774], [28701.02, 139.9377, 1.8122], [28701.05, 138.1255, 0.7], [28703.03, 137.4255, 0.5], [28703.06, 136.9255, 0.7], [28708, 136.2255, 0.1], [28715.22, 136.1255, 0.3], [28723.22, 135.8255, 0.4], [28725.22, 135.4255, 0.15], [28731.15, 135.2755, 0.7705], [28735, 134.505, 0.0815], [28736, 134.4235, 0.0262], [28737, 134.3973, 0.3581], [28737.18, 134.0392, 0.3806], [28738.97, 133.6586, 0.2347], [28740, 133.4239, 3.3747], [28750, 130.0492, 2.6797], [28750.03, 127.3695, 0.6852], [28750.22, 126.6843, 0.5688], [28752, 126.1155, 0.12], [28753, 125.9955, 7.1862], [28756.74, 118.8093, 2.027], [28780, 116.7823, 3.2505], [28780.06, 113.5318, 0.093], [28797.03, 113.4388, 0.5], [28800, 112.9388, 1.2749], [28808, 111.6639, 0.1], [28822.89, 111.5639, 1.1127], [28822.92, 110.4512, 0.7], [28847, 109.7512, 1], [28850, 108.7512, 0.3888], [28855.53, 108.3624, 10], [28855.56, 98.3624, 0.5], [28856, 97.8624, 0.02], [28860, 97.8424, 0.0693], [28866, 97.7731, 0.02], [28871.66, 97.7531, 3.201], [28882, 94.5521, 0.1], [28888, 94.4521, 0.1404], [28888.88, 94.3117, 0.45], [28889, 93.8617, 0.1], [28890, 93.7617, 0.2193], [28900, 93.5424, 1.1176], [28901, 92.4248, 1], [28908, 91.4248, 1.1], [28915.73, 90.3248, 0.55], [28932.8, 89.7748, 0.004], [28937, 89.7708, 0.0035], [28940, 89.7673, 1.7601], [28942, 88.0072, 0.0347], [28943.53, 87.9725, 0.18], [28950, 87.7925, 0.06], [28955.03, 87.7325, 1.09], [28960.03, 86.6425, 0.0035], [28961, 86.639, 0.123], [28961.31, 86.516, 0.0075], [28962.09, 86.5085, 0.321], [28973.4, 86.1875, 0.7], [28980, 85.4875, 0.7071], [28981.52, 84.7804, 1.87], [28993.91, 82.9104, 0.0133], [28999, 82.8971, 0.002], [28999.88, 82.8951, 0.1118], [29000, 82.7833, 12.7248], [29002, 70.0585, 0.12], [29008, 69.9385, 0.1], [29010, 69.8385, 0.4676], [29010.03, 69.3709, 0.1802], [29010.06, 69.1907, 0.5], [29018, 68.6907, 0.1251], [29020, 68.5656, 0.1343], [29022, 68.4313, 1.0337], [29022.03, 67.3976, 0.7], [29050, 66.6976, 0.0684], [29053, 66.6292, 0.01], [29055.13, 66.6192, 0.1722], [29066, 66.447, 0.4879], [29066.1, 65.9591, 0.05], [29068, 65.9091, 0.4549], [29070, 65.4542, 0.3006], [29072, 65.1536, 0.0347], [29085, 65.1189, 0.0806], [29088, 65.0383, 0.0034], [29100, 65.0349, 15.2143], [29100.09, 49.8206, 0.172], [29102, 49.6486, 0.4637], [29105, 49.1849, 0.0342], [29106.31, 49.1507, 0.0608], [29109.84, 49.0899, 0.3934], [29109.87, 48.6965, 3.2], [29112.11, 45.4965, 0.0055], [29116.62, 45.491, 1.19], [29128.14, 44.301, 0.9665], [29136, 43.3345, 0.9451], [29136.52, 42.3894, 0.0608], [29145.66, 42.3286, 0.0608], [29149, 42.2678, 0.069], [29150, 42.1988, 36.5088], [29150.03, 5.69, 2.98], [29150.04, 2.71, 2.71]]
      // data:[]买盘
    }, {
      name: '累积',
      data: [
        // [910, 8],
        // [1000, 14],
        // [1100, 29],
        // [1200, 45],
        // [1300, 59],
        // [1400, 81.2]
      ]
    }]
  },
  area1: {
    colors: ["#284e42", "#523c3e"],
    chart: {
      type: 'area',
      height: 43,
      backgroundColor: '#2c323a',
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0
    },
    title: {

      text: null
    },
    legend: {
      enabled: false
    },
    xAxis: {
      allowDecimals: false,
      visible: false,
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    yAxis: {
      visible: false,
      labels: {
        formatter: function() {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {

      enabled: false,
      followPointer: false,
      pointFormat: ''
    },
    plotOptions: {
      area: {
        // pointStart: 1940,
        enableMouseTracking: false,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: '美国',
      data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
      ]
    }]
  },
  area2: {
    colors: ["#523c3e"],
    chart: {
      type: 'area',
      height: 43,
      backgroundColor: '#2c323a',
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0
    },
    title: {

      text: null
    },
    legend: {
      enabled: false
    },
    xAxis: {
      allowDecimals: false,
      visible: false,
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    yAxis: {
      visible: false,
      labels: {
        formatter: function() {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {
      enabled: false,
      followPointer: false,
      pointFormat: ''
    },
    plotOptions: {

      area: {
        enableMouseTracking: false,
        // pointStart: 1940,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: '美国',
      data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
      ]
    }]
  },
  area3: {
    colors: ["#284e42"],
    chart: {
      type: 'area',
      height: 43,
      backgroundColor: '#2c323a',
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0
    },
    title: {

      text: null
    },
    legend: {
      enabled: false
    },
    xAxis: {
      allowDecimals: false,
      visible: false,
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    yAxis: {
      visible: false,
      labels: {
        formatter: function() {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {
      enabled: false,
      followPointer: false,
      pointFormat: ''
    },
    plotOptions: {
      area: {
        enableMouseTracking: false,
        // pointStart: 1940,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: '美国',
      data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
      ]
    }]
  },
  area4: {
    colors: ["#284e42", "#523c3e"],
    chart: {
      type: 'area',
      height: 43,
      backgroundColor: '#2c323a',
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0
    },
    title: {

      text: null
    },
    legend: {
      enabled: false
    },
    xAxis: {
      allowDecimals: false,
      visible: false,
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    yAxis: {
      visible: false,
      labels: {
        formatter: function() {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {
      enabled: false,
      followPointer: false,
      pointFormat: ''
    },
    plotOptions: {

      area: {
        // pointStart: 1940,
        enableMouseTracking: false,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: '美国',
      data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
      ]
    }]
  },
  area5: {
    colors: ["#523c3e"],
    chart: {
      type: 'area',
      height: 43,
      backgroundColor: '#2c323a',
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0
    },
    title: {

      text: null
    },
    legend: {
      enabled: false
    },
    xAxis: {
      allowDecimals: false,
      visible: false,
    },
    credits: {
      enabled: false // 禁用版权信息
    },
    yAxis: {
      visible: false,
      labels: {
        formatter: function() {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {
      enabled: false,
      followPointer: false,
      pointFormat: ''
    },
    plotOptions: {
      area: {
        // pointStart: 1940,
        enableMouseTracking: false,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: '美国',
      data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
      ]
    }]
  },
  //     bar: {
  // title: {
  // text: '珠海猪场' // 指定图表标题
  // },
  // credits: {
  // enabled: false
  // },
  // chart: {
  // backgroundColor: 'black',
  // type: 'bar'
  // },
  // plotOptions: {
  // column: {
  // colorByPoint: true
  // },
  // line: {
  // dataLabels: {
  // // 开启数据标签
  // enabled: true
  // }
  // // 关闭鼠标跟踪，对应的提示框、点击事件会失效
  // // enableMouseTracking: false
  // }
  // },
  // xAxis: {
  // categories: ['今日已入场', '已交易单次', '已交易数量', '已缴费'] // 指定x轴分组
  // },
  // series: [{
  // colorByPoint: true,
  // data: [500, 235, 809, 5000],
  // dataLabels: {
  // enabled: true
  // }
  // }]
  // }
}

//export const option2 = {
//bar: {
//title: {
//text: '珠海猪场' // 指定图表标题
//},
//credits: {
//enabled: false
//},
//chart: {
//backgroundColor: 'black',
//type: 'bar'
//},
//plotOptions: {
//column: {
//colorByPoint: true
//},
//line: {
//dataLabels: {
//// 开启数据标签
//enabled: true
//}
//// 关闭鼠标跟踪，对应的提示框、点击事件会失效
//// enableMouseTracking: false
//}
//},
//xAxis: {
//categories: ['今日已入场', '已交易单次', '已交易数量', '已缴费'] // 指定x轴分组
//},
//series: [{
//colorByPoint: true,
//data: [500, 235, 809, 5000],
//dataLabels: {
//enabled: true
//}
//}]
//}
//}