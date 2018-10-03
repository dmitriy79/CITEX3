import axios from 'axios'
import webSocket from './socket'
import qs from 'qs'

const apiList = [
  '/user/banner/listByType', //公告列表
  '/user/notice/list', //公告列表
  '/user/noticeType/listType', //公告类型
  '/user/trade/getTradeInfoByZone',
  '/user/user/login', //登陆
  '/user/user/logout', //退出
  '/user/user/emailCode', //获取邮箱验证码
  '/user/user/register', //注册
  '/user/user/forgetPassword', //忘记密码
  '/user/user/allotRechargeAddr', //获取钱包地址
  '/user/user/setTradePassword', //设置交易密码
  '/user/user/info', //用户信息
  '/user/user/setGooleAutu', //生成谷歌验证码
  '/user/user/getValidateById', //获取用户信息
  '/user/user/reset', //修改邮箱 或者 登录密码 或者 交易密码
  '/user/user/audit', //实名认证
  '/user/user/enableGooleAutu', //启用谷歌验证码
  // '/user/s3/upload', //通用文件上传

  '/coin/coin/info/all', //GET 查询全部币种列表

  '/payment/withdraw', //提币
  '/payment/userProperty/uplistByUserId', //我的资产
  '/payment/rechargeRecord/rrlistByUserId', //充币记录
  '/payment/withdrawRecord/wrlistByUserId', //提币记录
  '/payment/withdrawAddr/walistByUserId', //根据用户获取提币地址列表
  '/payment/withdrawAddr/add', //新增提币地址
  '/payment/withdrawAddr/update', //更新提币地址
  '/payment/withdrawAddr/delete', //删除提币地址
  '/payment/userProperty/uplistByUserId', //我的资产
  '/user/oss/upload',//上传图片
  '/trade/trade/getTopTradeCoinPairs', //GET 主要币种模块展示  
  '/trade/trade/getTradeInfo',
  '/trade/trade/getTradeInfoByZone', //交易区列表(根据交易区ID查询)
  '/trade/trade/getKDatas', //启用获取k线  GET
  '/trade/dealOrder/getUserTransactionRecord', //交易记录
  '/trade/trade/getDealOrdersByTradeCoinPairId', //实时成交
  '/trade/trade/getTradeInfoByTradeCoinPairId', //买卖盘挂单
  //    '/trade/trade/bid-ask-order/listBidOrders',       //历史/当前委托订单
  //   '/trade/trade/ask-order/listAskOrders',           //历史/当前委托卖订单
  '/trade/trade/bid-ask-order/listBidOrders', //历史/当前委托买订单（ALL）
  '/trade/trade/bid-order/cancelBuy', //撤销买挂单
  '/trade/trade/ask-order/cancelSell', //撤销卖挂单
  '/trade/trade/getDealOrderUpDownTen', //涨跌幅排行榜
  '/trade/dealOrder/getUserTransactionRecord', //交易记录
  '/trade/trade_zone/classificationList', //交易区
  '/trade/trade/bid-order/buy', //挂买单
  '/trade/trade/ask-order/sell', //挂卖单
  '/trade/trade_coin_pair/collect', //收藏币种
  '/trade/trade_coin_pair/getTradeCoinPairByCoinId', //根据项目查交易对
  '/trade/trade/getKDatas2', //getKDatas2
  '/trade/trade/getUserTotalProperty', //计算用户资产总和
  '/trade/trade_coin_pair/tradeCoinPairMaxMinPrice', //
  '/payment/userProperty/userPropertylistByUserId',//我的资产
  '/user/user/saveIdtyImage'
];

let api = {}

let res = (res) => {

  if (res.status == '200') {
    if (res.data.status == '200') {
      return res.data
    } else {
      console.log("ERROR========>", res.data.message)
      return res.data
    }
  } else {
    console.log(res.statusText)
  }
}
apiList.map(item => {
  let name = item.split('/').pop()
  api[name] = (params, method, headers) => {
    let ajax = method == 'POST' ?
      axios({
        method: 'POST',
        url: item,
        data: qs.stringify(params),
      }).then(res) :
      axios.get(item, {
        params: params
      }).then(res);
    return ajax
  }
})
api.socket = webSocket
export default api