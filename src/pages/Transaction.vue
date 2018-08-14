
<template>
    <div >
         <v-header></v-header>  
       <div class="transaction-wrap">
           <div class="transaction-top">
             <div class="left">
                <div class="title">
                    <div class="title-left">
                        <div class="symbol">
                            <span>ETH</span>/<span>IOST</span>
                        </div>
                        <div class="price-wrap">
                            <span class="rate">+<i>59%</i></span>
                            <span class="price">0.01009447</span>&nbsp;<span>≈ <i>8000.12</i> CNY</span>
                        </div>
                    </div>
                    <div class="title-right">
                        <ul>
                            <li>
                                <div class="img-wrap">
                                     <img src="../../src/assets/images/logo.png" alt="">
                                </div>
                               
                                <div>
                                    <p class="ititle">24h成交量</p>
                                    <p class="result">1823912311</p>
                                </div>
                            </li>
                            <li>
                                 <div class="img-wrap">
                                     <img src="../../src/assets/images/logo.png" alt="">
                                </div>
                                <div>
                                    <p class="ititle">24h最高</p>
                                    <p class="result">0.02323232323</p>
                                </div>
                            </li>
                            <li>
                                 <div class="img-wrap">
                                     <img src="../../src/assets/images/logo.png" alt="">
                                </div>
                                <div>
                                    <p class="ititle">24h最低</p>
                                    <p class="result">0.02323232323</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <k-line></k-line>
             </div>
             <div class="right">
                 <coin-tab></coin-tab>
             </div>
   
         </div>
       </div>
         

         
         <!-- <v-footer></v-footer>      -->

       
     
    </div>
</template>
<script>
import VHeader from "../components/Header";
// import VFooter from "../components/VFooter";
import KLine from "../components/transactionCenter/KLine";
import CoinTab from "../components/transactionCenter/CoinTab";
export default {
  name: "Transaction",
  components: {
    VHeader,
    KLine,
    CoinTab
    // VFooter
  }
};
</script>

<style lang="less" scoped>
.transaction-wrap {
  background: #3b4249;
  padding: 8px 0 9px 17px;
  .transaction-top{
    overflow: hidden;
    .left{
      float: left;
      width:78.5%;
      .title{
          display: flex;
          height: 50px;
          background: #292F37;
          margin-bottom: 7px;
          .title-left{
              display: flex;
              height:100%;
              align-items: center;
              .symbol{
                  background: #161C24;
                  width: 105px;
                  padding: 12px 13px 15px 12px;
                  margin-right: 22px;
              }
              .price-wrap{
                  span{font-size: 16px}
                  i{font-style: normal}
                  .rate{
                    background: #1FC56D;
                    border-radius: 2px; 
                    padding: 1px 7px;
                    font-family: PingFangSC-Semibold;
                    font-size: 13px;
                    color: #FFFFFF;
                    i{
                    font-size: 13px;
                       font-style: normal;
                    }
                    }
                .price{
                    font-size: 16px;
                    color: #5DC176;
                }
              }
          }
          .title-right{
              height:100%;
              flex:1;
              ul{
                  display:flex;
                  justify-content: flex-end;
                  height: 100%;
                  li{ display: flex;    align-items: center;    margin-right: 40px;
                    .img-wrap{
                      width: 22px;
                      height: 22px;
                      margin-right: 7px;
                      img{width: 100%}
                   }
                   .ititle{
                       font-size: 12px;
                       color: #999EA4;
                       font-family: PingFangSC-Regular;
                       }
                  }
                  .result{
                      font-family: PingFangSC-Semibold;
                        font-size: 13px;
                        color: #EBEFF3;
                  }
                  
              }
          }
      }
    }
    .right{
        float: right;
        width: 21.5%;
        min-width: 303px
    }
  }
  
}
</style>

