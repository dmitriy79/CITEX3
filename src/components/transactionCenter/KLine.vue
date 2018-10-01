/* eslint-disable */
<template>
  <div class="hello">
    <div id="chart_container" class="f-fill" style="height:610px;display:block;border:none"></div>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from "vuex"

export default {
  data() {
    return {
      websock: null,
      currency1: '',
      currency2: "ETH",
      saved_chart: null,
      chart: null,
      feed: null,
      last_price: 1234.2365,
      bars: [],
    }
  },
  name: "KLine",

  mounted: function() {
    this.createKline();
  },
  methods: {
    createKline: function() {
      const this_vue = this;

      this_vue.saved_chart = JSON.parse(window.localStorage.getItem("chart_settings"));
      this_vue.feed = this_vue.createFeed();
      // TradingView.onready(function(configurationData) {
      this_vue.chart = window.tvWidget = new TradingView.widget({
        fullscreen: false,
        autosize: true,
        symbol: this_vue.currency1 + ":" + this_vue.currency2,
        container_id: "chart_container",
        datafeed: this_vue.feed,
        library_path: "static/charting_library-master/charting_library/",
        locale: "zh",
        timezone: "Asia/Shanghai", //todo: ustawianie timezone'a po strefie usera
        charts_storage_api_version: "1.1",
        client_id: "tradingview.com",
        user_id: "public_user_id",
        debug: true,
        //loading_screen:{ backgroundColor: "#000000",foregroundColor: "#000000", }//todo:do it
        interval: "1",
        // timeframe:'',//todo: na koncu
        toolbar_bg: "#1e252d",
        // saved_data: this_vue.savedData,
        allow_symbol_change: true,
        time_frames: [{
          text: "1y",
          resolution: "1W"
        }, {
          text: "6m",
          resolution: "3D"
        }, {
          text: "3m",
          resolution: "1D"
        }, {
          text: "1m",
          resolution: "1D"
        }, {
          text: "1w",
          resolution: "30"
        }, {
          text: "3d",
          resolution: "30"
        }, {
          text: "1d",
          resolution: "30"
        }, {
          text: "6h",
          resolution: "15"
        }, {
          text: "1h",
          resolution: "1"
        }],
        drawings_access: {
          type: "black",
          // tools: [{name: "Regression Trend"}]//todo: moje
          tools: [{
            name: "Trend Line",
            grayed: true
          }, {
            name: "Trend Angle",
            grayed: true
          }] //todo: bb
        },
        disabled_features: [
          //禁用功能
          "use_localstorage_for_settings",
          "left_toolbar", //左侧栏
          "timeframes_toolbar", //底部时间栏目
          "header_symbol_search", //头部搜索
          "header_screenshot", //照相机
          "header_undo_redo", //左右箭头
          "header_resolutions", //时间下拉框
          // "header_settings",//设置（切换图标类型）
          "header_chart_type", //图表类型
          "header_interval_dialog_button",
          "show_interval_dialog_on_key_press",
          "symbol_search_hot_key",
          "study_dialog_search_control",
          "display_market_status",
          "header_compare",
          "edit_buttons_in_legend",
          "symbol_info",
          "border_around_the_chart",
          "main_series_scale_menu",
          "star_some_intervals_by_default",
          "datasource_copypaste",
          "right_bar_stays_on_scroll",
          "context_menus",
          "go_to_date",
          "compare_symbol",
          "border_around_the_chart",
          "timezone_menu",
          "volume_force_overlay", //分隔k线图
          //"header_resolutions",//todo: przetestowac
          //"control_bar",//todo: przetestowac
          //"edit_buttons_in_legend",//todo: przetestowac
          "remove_library_container_border"
        ],
        enabled_features: [
          "dont_show_boolean_study_arguments",

          "remove_library_container_border",
          // "save_chart_properties_to_local_storage",
          "side_toolbar_in_fullscreen_mode",
          "hide_last_na_study_output",
          "constraint_dialogs_movement", //todo: nie do końca jestem pewien
          "hide_left_toolbar_by_default"
        ],
        studies_overrides: {
          "volume.volume.color.0": "#744442",
          "volume.volume.color.1": "#226347",
          "volume.volume.transparency": 75
        },
        overrides: {
          left_toolbar: false,
          "paneProperties.legendProperties.showStudyTitles": false,
          "paneProperties.legendProperties.showLegend": false, //是否显示左侧+号

          "paneProperties.legendProperties.showStudyArguments": false,
          "paneProperties.legendProperties.showStudyValues": false,
          "symbolWatermarkProperties.color": "rgba(0,0,0, 0)",
          "paneProperties.background": "#292f37", //背景色
          "paneProperties.vertGridProperties.color": "#333940", //纵向分割线颜色
          "paneProperties.horzGridProperties.color": "#333940", //横向分割线颜色
          "paneProperties.crossHairProperties.color": "#58637a",
          "paneProperties.crossHairProperties.style": 2,

          "mainSeriesProperties.style": 9,
          "mainSeriesProperties.showCountdown": true,
          "scalesProperties.showSeriesLastValue": true,
          "mainSeriesProperties.visible": false,
          "mainSeriesProperties.showPriceLine": true,
          "mainSeriesProperties.priceLineWidth": 1,
          "mainSeriesProperties.lockScale": false,
          "mainSeriesProperties.minTick": "default",
          "mainSeriesProperties.extendedHours": false,
          volumePaneSize: "large", //调整纵坐标间距
          editorFontsList: [
            "Lato",
            "Arial",
            "Verdana",
            "Courier New",
            "Times New Roman"
          ],
          "paneProperties.topMargin": 5,
          "paneProperties.bottomMargin": 5,
          "paneProperties.leftAxisProperties.autoScale": true,
          "paneProperties.leftAxisProperties.autoScaleDisabled": false,
          "paneProperties.leftAxisProperties.percentage": false,
          "paneProperties.leftAxisProperties.percentageDisabled": false,
          "paneProperties.leftAxisProperties.log": false,
          "paneProperties.leftAxisProperties.logDisabled": false,
          "paneProperties.leftAxisProperties.alignLabels": true,
          "paneProperties.legendProperties.showStudyArguments": false,
          "paneProperties.legendProperties.showStudyTitles": true,
          "paneProperties.legendProperties.showStudyValues": true,
          "paneProperties.legendProperties.showSeriesTitle": true,
          "paneProperties.legendProperties.showSeriesOHLC": true,
          "scalesProperties.showLeftScale": false,
          "scalesProperties.showRightScale": true,
          "scalesProperties.backgroundColor": "#20334d",
          "scalesProperties.lineColor": "#333940", //横轴纵轴颜色
          "scalesProperties.textColor": "#9E9FA6", //横轴纵轴文字颜色
          "scalesProperties.scaleSeriesOnly": false,
          "scalesProperties.fontSize": 13,
          "mainSeriesProperties.priceAxisProperties.autoScale": true,
          "mainSeriesProperties.priceAxisProperties.autoScaleDisabled": false,
          "mainSeriesProperties.priceAxisProperties.percentage": false,
          "mainSeriesProperties.priceAxisProperties.percentageDisabled": false,
          "mainSeriesProperties.priceAxisProperties.log": false,
          "mainSeriesProperties.priceAxisProperties.logDisabled": false,
          "mainSeriesProperties.candleStyle.upColor": "#3fcfb4",
          "mainSeriesProperties.candleStyle.downColor": "#fe4761",
          "mainSeriesProperties.candleStyle.drawWick": true,
          "mainSeriesProperties.candleStyle.drawBorder": true,
          "mainSeriesProperties.candleStyle.borderColor": "#3fcfb4",
          "mainSeriesProperties.candleStyle.borderUpColor": "#3fcfb4",
          "mainSeriesProperties.candleStyle.borderDownColor": "#fe4761",
          "mainSeriesProperties.candleStyle.wickColor": "#737375",
          "mainSeriesProperties.candleStyle.wickUpColor": "#3fcfb4",
          "mainSeriesProperties.candleStyle.wickDownColor": "#fe4761",
          "mainSeriesProperties.candleStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.hollowCandleStyle.upColor": "#5DC176", //k线柱涨颜色
          "mainSeriesProperties.hollowCandleStyle.downColor": "#EF6E59", //k线柱跌颜色
          "mainSeriesProperties.hollowCandleStyle.drawWick": true,
          "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
          "mainSeriesProperties.hollowCandleStyle.borderColor": "#3fcfb4",
          "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#3fcfb4",
          "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#EF6E59",
          "mainSeriesProperties.hollowCandleStyle.wickColor": "#737375",
          "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#5DC176", //k线柱竖线涨颜色
          "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#EF6E59",
          "mainSeriesProperties.haStyle.upColor": "#3fcfb4",
          "mainSeriesProperties.haStyle.downColor": "#fe4761",
          "mainSeriesProperties.haStyle.drawWick": true,
          "mainSeriesProperties.haStyle.drawBorder": true,
          "mainSeriesProperties.haStyle.borderColor": "#3fcfb4",
          "mainSeriesProperties.haStyle.borderUpColor": "#3fcfb4",
          "mainSeriesProperties.haStyle.borderDownColor": "#fe4761",
          "mainSeriesProperties.haStyle.wickColor": "#737375",
          "mainSeriesProperties.haStyle.wickUpColor": "#3fcfb4",
          "mainSeriesProperties.haStyle.wickDownColor": "#fe4761",
          "mainSeriesProperties.haStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.barStyle.upColor": "#3fcfb4",
          "mainSeriesProperties.barStyle.downColor": "#fe4761",
          "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.barStyle.dontDrawOpen": false,
          "mainSeriesProperties.lineStyle.color": "#0cbef3",
          "mainSeriesProperties.lineStyle.linestyle": 0,
          "mainSeriesProperties.lineStyle.linewidth": 1,
          "mainSeriesProperties.lineStyle.priceSource": "close",
          "mainSeriesProperties.areaStyle.color1": "#0cbef3",
          "mainSeriesProperties.areaStyle.color2": "#0098c4",
          "mainSeriesProperties.areaStyle.linecolor": "#0cbef3",
          "mainSeriesProperties.areaStyle.linestyle": 0,
          "mainSeriesProperties.areaStyle.linewidth": 1,
          "mainSeriesProperties.areaStyle.priceSource": "close",
          "mainSeriesProperties.areaStyle.transparency": 80,

        },
        custom_css_url: "chart.css"
      });
      this_vue.chart.MAStudies = [];
      /*创建自定义的功能button,attr 定义标签属性,on 定义button的点击事件,append button的内容 */
      this_vue.chart.onChartReady(function() {
        document.getElementById('chart_container').childNodes[0].setAttribute('style', 'display:block;width:100%;height:100%;');
        let chart = this_vue.chart.chart();
        let mas = [{
          day: 5,
          color: "#821f68"
        }, {
          day: 10,
          color: "#5c7798"
        }, {
          day: 30,
          color: "#397d51"
        }, {
          day: 60,
          color: "#60407f"
        }];
        var buttons = [{
            label: "分时",
            resolution: "1",
            chartType: 3
          }, {
            label: "1分钟",
            resolution: "1"
          }, {
            label: "5分钟",
            resolution: "5"
          }, {
            label: "15分钟",
            resolution: "15"
          }, {
            label: "30分钟",
            resolution: "30"
          }, {
            label: "1小时",
            resolution: "60"
          }, {
            label: "2小时",
            resolution: "120"
          }, {
            label: "4小时",
            resolution: "240"
          },

          {
            label: "12小时",
            resolution: "720"
          }, {
            label: "日线",
            resolution: "1D"
          },

          {
            label: "周线",
            resolution: "W"
          },

        ];
        mas.forEach(item => {
          chart.createStudy(
            "Moving Average",
            false,
            false, [item.day],
            entity => {
              this_vue.chart.MAStudies.push(entity);
            }, {
              "plot.color": item.color
            }
          );
        });
        chart.onIntervalChanged().subscribe(null, function(interval, obj) {
          this_vue.chart.changingInterval = false;
        });
        buttons.forEach((item, index) => {
          let button = this_vue.chart.createButton();
          item.resolution === this_vue.chart.interval &&
            updateSelectedIntervalButton(button);
          button
            .attr("data-resolution", item.resolution)
            .attr(
              "data-chart-type",
              item.chartType === undefined ? 1 : item.chartType
            )
            .html("<span>" + item.label + "</span>")
            .on("click", function() {
              if (!this_vue.chart.changingInterval &&
                !button.hasClass("selected")
              ) {
                let chartType = +button.attr("data-chart-type");
                let resolution = button.attr("data-resolution");

                if (chart.resolution() !== resolution) {
                  this_vue.chart.changingInterval = true;
                  chart.setResolution(resolution);
                }
                if (chart.chartType() !== chartType) {
                  chart.setChartType(chartType);
                }
                updateSelectedIntervalButton(button);
                showMAStudies(chartType !== 3);
              }
            });
        });

        function updateSelectedIntervalButton(button) {
          this_vue.chart.selectedIntervalButton &&
            this_vue.chart.selectedIntervalButton.removeClass("selected");
          button.addClass("selected");
          this_vue.chart.selectedIntervalButton = button;
        }

        function showMAStudies(visible) {
          this_vue.chart.MAStudies.forEach(item => {
            chart.setEntityVisibility(item, visible);
          });
        }

        this_vue.chart.chart().createStudy('Moving Average', false, false, [5], null, {
          'Plot.color': '#238031'
        });
        this_vue.chart.chart().createStudy('Moving Average', false, false, [10], null, {
          'Plot.color': '#850058'
        });
      });
    },
    createFeed: function() {
      let this_vue = this;
      let Datafeed = {};
      var currentCoinId = this_vue.marketInfo.coinId;
      // console.log(this_vue,this_vue.currentCoinId,'-========<<<<<<<<<<<<<<<this_vue')
      Datafeed.DataPulseUpdater = function(datafeed, updateFrequency) {
        // console.log(updateFrequency, "哈哈哈哈哈哈哈哈哈哈哈哈哈哈");
        this._datafeed = datafeed;
        this._subscribers = {};

        this._requestsPending = 0;
        var that = this;

        var update = function() {
          if (that._requestsPending > 0) {
            return;
          }

          for (var listenerGUID in that._subscribers) {
            var subscriptionRecord = that._subscribers[listenerGUID];
            var resolution = subscriptionRecord.resolution;

            var datesRangeRight = parseInt(new Date().valueOf() / 1000);

            //  BEWARE: please note we really need 2 bars, not the only last one
            //  see the explanation below. `10` is the `large enough` value to work around holidays
            var datesRangeLeft =
              datesRangeRight - that.periodLengthSeconds(resolution, 10);

            that._requestsPending++;

            (function(_subscriptionRecord) {
              // eslint-disable-line
              that._datafeed.getBars(
                _subscriptionRecord.symbolInfo,
                resolution,
                datesRangeLeft,
                datesRangeRight,
                function(bars) {
                  that._requestsPending--;

                  //    means the subscription was cancelled while waiting for data
                  if (!that._subscribers.hasOwnProperty(listenerGUID)) {
                    return;
                  }

                  if (bars.length === 0) {
                    return;
                  }

                  var lastBar = bars[bars.length - 1];
                  if (!isNaN(_subscriptionRecord.lastBarTime) &&
                    lastBar.time < _subscriptionRecord.lastBarTime
                  ) {
                    return;
                  }

                  var subscribers = _subscriptionRecord.listeners;

                  //    BEWARE: this one isn't working when first update comes and this update makes a new bar. In this case
                  //    _subscriptionRecord.lastBarTime = NaN
                  var isNewBar = !isNaN(_subscriptionRecord.lastBarTime) &&
                    lastBar.time > _subscriptionRecord.lastBarTime;

                  //    Pulse updating may miss some trades data (ie, if pulse period = 10 secods and new bar is started 5 seconds later after the last update, the
                  //    old bar's last 5 seconds trades will be lost). Thus, at fist we should broadcast old bar updates when it's ready.
                  if (isNewBar) {
                    if (bars.length < 2) {
                      throw new Error(
                        "Not enough bars in history for proper pulse update. Need at least 2."
                      );
                    }

                    var previousBar = bars[bars.length - 2];
                    for (var i = 0; i < subscribers.length; ++i) {
                      subscribers[i](previousBar);
                    }
                  }

                  _subscriptionRecord.lastBarTime = lastBar.time;

                  for (var i = 0; i < subscribers.length; ++i) {
                    subscribers[i](lastBar);
                  }
                },

                //  on error
                function() {
                  that._requestsPending--;
                }
              );
            })(subscriptionRecord);
          }
        };

        if (typeof updateFrequency != "undefined" && updateFrequency > 0) {
          setInterval(update, updateFrequency);
        }
      };

      Datafeed.DataPulseUpdater.prototype.periodLengthSeconds = function(
        resolution,
        requiredPeriodsCount
      ) {
        var daysCount = 0;

        if (resolution === "D") {
          daysCount = requiredPeriodsCount;
        } else if (resolution === "M") {
          daysCount = 31 * requiredPeriodsCount;
        } else if (resolution === "W") {
          daysCount = 7 * requiredPeriodsCount;
        } else {
          daysCount = requiredPeriodsCount * resolution / (24 * 60);
        }

        return daysCount * 24 * 60 * 60;
      };

      Datafeed.DataPulseUpdater.prototype.subscribeDataListener = function(
        symbolInfo,
        resolution,
        newDataCallback,
        listenerGUID
      ) {
        this._datafeed._logMessage("Subscribing " + listenerGUID);

        if (!this._subscribers.hasOwnProperty(listenerGUID)) {
          this._subscribers[listenerGUID] = {
            symbolInfo: symbolInfo,
            resolution: resolution,
            lastBarTime: NaN,
            listeners: []
          };
        }

        this._subscribers[listenerGUID].listeners.push(newDataCallback);
      };

      Datafeed.DataPulseUpdater.prototype.unsubscribeDataListener = function(
        listenerGUID
      ) {
        this._datafeed._logMessage("Unsubscribing " + listenerGUID);
        delete this._subscribers[listenerGUID];
      };

      Datafeed.Container = function(updateFrequency) {
        this._configuration = {
          supports_search: false,
          supports_group_request: false,
          supported_resolutions: [
            "1",
            "3",
            "5",
            "15",
            "30",
            "60",
            "120",
            "240",
            "360",
            "720",
            "1D",
            "1W",
          ],
          supports_marks: true,
          supports_timescale_marks: true,
          exchanges: ["BTC"]
        };

        this._barsPulseUpdater = new Datafeed.DataPulseUpdater(
          this,
          updateFrequency || 10 * 1000
        );
        // this._quotesPulseUpdater = new Datafeed.QuotesPulseUpdater(this);

        this._enableLogging = true;
        this._callbacks = {};

        this._initializationFinished = true;
        this._fireEvent("initialized");
        this._fireEvent("configuration_ready");
      };

      Datafeed.Container.prototype._fireEvent = function(event, argument) {
        if (this._callbacks.hasOwnProperty(event)) {
          var callbacksChain = this._callbacks[event];
          for (var i = 0; i < callbacksChain.length; ++i) {
            callbacksChain[i](argument);
          }

          this._callbacks[event] = [];
        }
      };

      Datafeed.Container.prototype._logMessage = function(message) {
        if (this._enableLogging) {
          var now = new Date();
          console.log(
            "CHART LOGS: " +
            now.toLocaleTimeString() +
            "." +
            now.getMilliseconds() +
            "> " +
            message
          );
        }
      };

      Datafeed.Container.prototype.on = function(event, callback) {
        if (!this._callbacks.hasOwnProperty(event)) {
          this._callbacks[event] = [];
        }

        this._callbacks[event].push(callback);
        return this;
      };

      Datafeed.Container.prototype.onReady = function(callback) {
        let that = this;
        if (this._configuration) {
          setTimeout(function() {
            callback(that._configuration);
          }, 0);
        } else {
          this.on("configuration_ready", function() {
            callback(that._configuration);
          });
        }
      };
      //通过商品名称解析商品信息
      Datafeed.Container.prototype.resolveSymbol = function(
        symbolName,
        onSymbolResolvedCallback,
        onResolveErrorCallback
      ) {
        // console.log( this_vue.currency1,'09999=====pppp888ppgsggsgsgs')
        this._logMessage("GOWNO :: resolve symbol " + symbolName);
        Promise.resolve().then(() => {
          function adjustScale() {
            if (this_vue.last_price > 1000) return 100;
            else return 100000000;
          }

          this._logMessage(
            "GOWNO :: onResultReady inject " +
            this_vue.currency1 +
            ":" +
            this_vue.currency2
          );
          onSymbolResolvedCallback({
            name: this_vue.currency1 + "/" + this_vue.currency2, //商品名称
            timezone: "Asia/Shangha", //商品的交易所时区
            pricescale: adjustScale(),
            minmov: 1, //最小波动
            minmov2: 0,
            ticker: this_vue.currency1 + ":" + this_vue.currency2, //商品体系中此商品的唯一标识符
            description: "", //商品说明
            session: "24x7", //商品交易时间
            type: "bitcoin", //仪表的可选类型
            "exchange-traded": "myExchange",
            // "exchange-listed": "myExchange",
            has_intraday: true, //布尔值显示商品是否具有日内（分钟）历史数据, 如果它为false，则当图表中的该商品处于活动状态时，日内周期的所有按钮将被禁用。 如果设置为true，则由datafeed直接提供的所有周期必须在intraday_multipliers数组中设定。
            intraday_multipliers: ["1", "3", "5", "15", "30", "60", "120", "240", "720"], //这是一个包含日内周期(分钟单位)的数组
            has_weekly_and_monthly: false, //布尔值显示商品是否具有以W和M为单位的历史数据
            has_no_volume: false, //布尔表示商品是否拥有成交量数据
            regular_session: "24x7"
          });
        });
      };
      Datafeed.Container.prototype.getBars = function(
        symbolInfo,
        resolution,
        from,
        to,
        onHistoryCallback,
        onErrorCallback,
        firstDataRequest
      ) {
        // console.log(resolution,'resolution====================================>>>>>>>>')
        if (firstDataRequest) {
          if (resolution == 1) {
            resolution = '1min'
          }
          if (resolution == 5) {
            resolution = '5min'
          }
          if (resolution == 15) {
            resolution = '15min'
          }
          if (resolution == 30) {
            resolution = '30min'
          }
          if (resolution == 60) {
            resolution = '60min'
          }
          if (resolution == 120) {
            resolution = '120min'
          }
          if (resolution == 240) {
            resolution = '240min'
          }
          if (resolution == 720) {
            resolution = '720min'
          }
          if (resolution == '1D') {
            resolution = '1day'
          }
          if (resolution == 'W') {
            resolution = '10080min'
          }
          
          console.log('k line data 2 ', this_vue.klineHistory)
          onHistoryCallback(this_vue.klineHistory)
        } else {
          onHistoryCallback([], {
            noData: true
          });
        }
      };

      Datafeed.Container.prototype.subscribeBars = function(
        symbolInfo,
        resolution,
        onRealtimeCallback,
        listenerGUID,
        onResetCacheNeededCallback
      ) {
        if (resolution == 1) {
          resolution = '1min'
        }
        if (resolution == 5) {
          resolution = '5min'
        }
        if (resolution == 15) {
          resolution = '15min'
        }
        if (resolution == 30) {
          resolution = '30min'
        }
        if (resolution == 60) {
          resolution = '60min'
        }
        if (resolution == 120) {
          resolution = '120min'
        }
        if (resolution == 240) {
          resolution = '240min'
        }
        if (resolution == 720) {
          resolution = '720min'
        }
        if (resolution == '1D') {
          resolution = '1day'
        }
        if (resolution == 'W') {
          resolution = '10080min'
        }

        if (this_vue.klineCurrent) {
          onRealtimeCallback(this_vue.klineCurrent)
        }

        /*let ws= new WebSocket('ws://47.94.213.6:13080/websocketKline?pairId=2&uuid=2&userId=200011&unitPriceCoinId=1&initlength=1&step=60')
            //let ws= new WebSocket('ws://47.93.194.146:13080/websocketKline?pairId=2&uuid=2&userId=200011&unitPriceCoinId=1&initlength=100&step=3600')
             ws.onopen = () => {
                 // Web Socket 已连接上，使用 send() 方法发送数据
                   ws.send('++++++++ws33333++++++++++')
                   //console.log('数据发送中8888++++++...实时是银行业')
               }
               ws.onmessage = evt => {
                var content=JSON.parse(evt.data)
               var kline=[]
               content.list.forEach(function(item){
                   kline.push({
                  time: Number(item.endTime),
                    open: Number(item.openingPrice),
                    close: Number(item.closeingPrice),
                    high: Number(item.topPrice),
                    low: Number(item.floorPrice),
                    volume: Number(item.total)
                  });
                // console.log(kline,'9999')
               })
              
               //console.log(kline[0],'我是k线图')
               onRealtimeCallback(kline[0])
               }
               ws.onclose = function () {
                 // 关闭 websocket
                 //console.log('连接已关闭...')
               }
               ws.onerror=function(){
                // console.log("我是错误+++++++")
               }
                // 组件销毁时调用，中断websocket链接
               this.over = () => {
                 ws.close()
               }*/


      };

      Datafeed.Container.prototype.unsubscribeBars = function(listenerGUID) {
        this._barsPulseUpdater.unsubscribeDataListener(listenerGUID);
      };

      return new Datafeed.Container();
    },
    adjustChart: function() {
      let chart_iframe = $("#chart_container").find("iframe");
      let chart_top = chart_iframe.contents().find(".header-chart-panel");
      let chart_top_container = chart_iframe
        .contents()
        .find(".header-chart-panel-content");
      let chart_bottom = chart_iframe.contents().find(".date-range-wrapper");

      chart_bottom.appendTo(chart_top_container);
    }
  },
  watch: {
    marketInfo: function(newVal, oldVal) {
      this.currency1 = newVal[0];
      this.currency2 = newVal[1];
      this.createKline();
      // this.changePair();
    },
  },
  computed: {
    ...mapState(["marketInfo"]),
    ...mapState("trading", ["klineHistory"]),
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
