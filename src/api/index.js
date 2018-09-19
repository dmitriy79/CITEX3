import axios from 'axios'
import webSocket from './socket'
let apiPort = {
  "coin": 13020, //管理
  "payment": 13030, //支付管理
  "trade": 13040, //交易管理
  "user": 13010, //用户管理
}
//API列表
let apiList = {
  //用户管理  :10310
  "user": [
    '/banner/listByType', //公告列表
    '/notice/list', //公告列表
    '/noticeType/listType', //公告类型
    '/trade/getTradeInfoByZone',
    '/user/login', //登陆
    '/user/logout', //退出
    '/user/emailCode', //获取邮箱验证码
    '/user/register', //注册
    '/user/forgetPassword', //忘记密码
    '/user/allotRechargeAddr', //获取钱包地址
    '/user/setTradePassword', //设置交易密码
    '/user/info', //用户信息
    '/user/setGooleAutu', //生成谷歌验证码
    '/user/getValidateById', //获取用户信息
    '/user/reset', //修改邮箱 或者 登录密码 或者 交易密码
    '/user/audit', //实名认证
    '/user/enableGooleAutu', //启用谷歌验证码
    '/s3/upload',//通用文件上传

  ],
  //管理 :10320
  "coin": [
    '/coin/info/all', //GET 查询全部币种列表
    // '/coin/info',//币种资料
  ],
  //支付管理 :13030
  "payment": [
    '/withdraw',//提币
    '/userProperty/uplistByUserId',//我的资产
    '/rechargeRecord/rrlistByUserId',//充币记录
    '/withdrawRecord/wrlistByUserId',//提币记录
    '/withdrawAddr/walistByUserId',//根据用户获取提币地址列表
    '/withdrawAddr/add',//新增提币地址
    '/withdrawAddr/update',//更新提币地址
    '/withdrawAddr/delete',//删除提币地址
  ],

  //交易管理 :10340
  "trade": [
    '/trade/getTopTradeCoinPairs', //GET 主要币种模块展示  
    '/trade/getTradeInfoByZone', //交易区列表(根据交易区ID查询)
    '/trade/getKDatas', //启用获取k线  GET
    '/dealOrder/getUserTransactionRecord', //交易记录
    '/trade/getDealOrdersByTradeCoinPairId', //实时成交
    '/trade/getTradeInfoByTradeCoinPairId', //买卖盘挂单
    '/trade/bid-ask-order/listBidOrders', //历史/当前委托订单
    '/trade/getDealOrderUpDownTen', //涨跌幅排行榜
    '/dealOrder/getUserTransactionRecord', //交易记录
    '/trade_zone/classificationList', //交易区

  ],
}
//生产环境接口处理

// API接口处理 
// method string  'GET' or 'POST'
// params object

let api = {}
let ajax = (url, params, method) => {
  return axios({
    method: method || "get",
    url: url,
    data: params,
  }).then(res => {
    if (res.status == '200') {
      res(res.data)
    }
  })
}

let res =  (res) => {
  if (res.status == '200') {
    return res.data
  }else{
    console.log(res.statusText)
  }
}
for (let i in apiList) {
  let reqName = i.toUpperCase()
  let item = apiList[i]
  for (let s in item) {
    let name = item[s].split('/').pop()
    let url =process.env.NODE_ENV === 'production' ? `${process.env.API_HOST}:${apiPort[i]}${item[s]}` :`/${reqName}${item[s]}`
    //let url = process.env.NODE_ENV === 'production' ? `/${reqName}${item[s]}` : `/${reqName}${item[s]}`
    //console.log(url)
    api[name] = (params, method) => {
      let ajax = method || 'GET' ? axios.get(url, { params: params }).then(res) : axios.post(url, { params: params }).then(res)
      return ajax
    }
  }
}
api.socket = webSocket
export default api
