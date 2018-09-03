<template>
    <div class="limit-price">
        <div class="title">
            <div class="left">限价</div>
            <div class="right"><span class="type">ETH</span>可用 <span class="available">192321.92</span> / 冻结<span class="frozen">921111.00</span></div>
        </div>
        <div class="penel">
          <div class="buy-panel">
            <div class="input-text">
                <span class="label">买入<i >IOST</i></span>
                <div class="buy-price">
                    <span>价格</span>
                    <input type="text">
                    <span>ETH</span>
                </div>
                <div class="buy-num">
                    <span>数量</span>
                    <input type="text">
                    <span>IOST</span>
                </div>
                <div class="buy-rate">
                    <span class="active">25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                </div>
                <div class="total-price">
                    <span>金额</span>
                    <input type="text">
                    <span>ETH</span>
                </div>
                <div class="buy-button transaction-btn">买入<span>IOST</span></div>
            </div>
        </div>
        <div class="sell-panel">
            <div class="input-text">
                <span class="label">卖出<i>IOST</i></span>
                <div class="buy-price">
                    <span>价格</span>
                    <input type="text">
                    <span>ETH</span>
                </div>
                <div class="buy-num">
                    <span>数量</span>
                    <input type="text">
                    <span>IOST</span>
                </div>
                <div class="buy-rate">
                    <span class="active">25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                </div>
                <div class="total-price">
                    <span>金额</span>
                    <input type="text">
                    <span>ETH</span>
                </div>
                <div class="sell-button transaction-btn">卖出<span>IOST</span></div>
            </div>
        </div>
        </div>
  
    </div>
</template>
<script>
export default {
  name: "LimitedPrice"
};
</script>
<style lang="less" scoped>
.limit-price {
  margin-bottom: 8px;
  background: #292f37;
  .title {
    padding: 0 28px 0 22px;
    height: 30px;
    background: #181f27;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Semibold;
    font-size: 13px;
    color: #ffffff;
    .left {
      flex: 1;
    }
  }
  .penel {
    padding-left: 22px;
    display: flex;
    .buy-panel {
      width: 48%;
      margin-right: 5.7%;
      span.active {
        background: #1fc56d;
      }
    }
    .sell-panel {
      width: 48%;
      margin-right: 3.1%;
      span.active {
        background: #ef6e59;
      }
    }
    .input-text {
      .label {
        font-family: PingFangSC-Semibold;
        padding: 13px 0;
        font-size: 15px;
        color: #ebebeb;
        display: block;
        i {
          font-style: normal;
        }
      }
      input {
        width: 74%;
        text-indent: 4%;
        font-size: 14px;
        color: #ffffff;
      }
      span {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999ea4;
        padding-left: 8px;
      }
      div {
        margin-bottom: 19px;
        height: 32px;
        line-height: 32px;
      }
      .buy-price,
      .buy-num,
      .total-price {
        background: #3b4249;
        display:flex;
        align-items: center;
        input{
          padding:4px 0;
          font-size:12px;
          &:focus{
            border-color:transparent;
          }
        }
      }
      .buy-rate {
        display: flex;
        margin: 0 -2% 19px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        span {
          width: 24%;
          margin: 0 2%;
          border: 1px dashed #999ea4;
          font-size: 12px;
          color: #999ea4;
          cursor: pointer;
          &.active {
            color: #ffffff;
            border: none;
          }
        }
      }
      .transaction-btn {
        text-align: center;
        font-size: 14px;
        color: #ffffff;
        span {
          color: #fff;
          padding: 0;
        }
      }
      .buy-button {
        background: #1fc56d;
      }
      .sell-button {
        background: #ef6e59;
      }
    }
  }
}
</style>


