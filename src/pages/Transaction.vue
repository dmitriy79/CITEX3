
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
                            <span class="price">0.01009447</span>&nbsp;<span class="price-val">≈ <i>8000.12</i> CNY</span>
                        </div>
                    </div>
                    <div class="title-right">
                        <ul>
                            <li>
                                <div class="img-wrap">
                                     <img src="../../src/assets/images/hours.png" alt="">
                                </div>
                               
                                <div>
                                    <p class="ititle">24h成交量</p>
                                    <p class="result">1823912311</p>
                                </div>
                            </li>
                            <li>
                                 <div class="img-wrap">
                                     <img src="../../src/assets/images/icon-hours-top.png" alt="">
                                </div>
                                <div>
                                    <p class="ititle">24h最高</p>
                                    <p class="result">0.02323232323</p>
                                </div>
                            </li>
                            <li>
                                 <div class="img-wrap">
                                     <img src="../../src/assets/images/icon-hours-low.png" alt="">
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
      
         <div class="transaction-middle">
             <div class="transaction-middle-left">
                 <div class="panel-left">
                    <limited-price></limited-price>   
                     <entrust></entrust>
                 </div>
                 <div class="panel-right">
                     <buy-sell></buy-sell>  
                    
                 </div>
                 
             </div>
             <div class="transaction-middle-right">
                
                     <transaction-price></transaction-price>
             
             </div>
         </div>
         <div class="transaction-bottom">
             <deep-img></deep-img>
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
import LimitedPrice from "../components/transactionCenter/LimitedPrice"
import Entrust from '../components/transactionCenter/Entrust'
import BuySell from '../components/transactionCenter/BuyOrSell'
import TransactionPrice from '../components/transactionCenter/TransactionPrice'
import DeepImg from '../components/transactionCenter/DeepImg'
export default {
  name: "Transaction",
  components: {
    VHeader,
    KLine,
    CoinTab,
    LimitedPrice,
    Entrust,
    BuySell,
    TransactionPrice,DeepImg
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
    display:flex;
    margin-bottom: 8px;
    .left{
      width:78.5%;
      .title{
          display: flex;
          height: 50px;
          background: #181F27;
          .title-left{
              display: flex;
              height:100%;
              align-items: center;
              .symbol{
                  background: #161C24;
                  width: 105px;
                  padding: 12px 13px 15px 12px;
                  margin-right: 22px;
                  color: #E4E5E7;
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
                .price-val{font-size: 16px;
color: #DFE2E8;}
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
        width: 21.5%;
        min-width: 328px
    }
  }
  .transaction-middle{
      margin-bottom: 8px;
      display: flex;
      
      .transaction-middle-left{
          display:flex;
          width: 78.5%;
          .panel-left{
              width: 74%;
          }
          .panel-center{width:20%;margin:0 8px 0 12px;background: #292F37;position: relative;}
          .panel-right{  
                width: 26%;
        margin-left: 0.8%;}
      }
       .transaction-middle-right{    width: 21.5%;}
  }
}
</style>

<style>
@media only screen and (max-width: 1920px) and (min-width: 1400px){
  #app  .transaction-wrap .transaction-middle .transaction-middle-left{
       width: 76%
    }
  #app .transaction-wrap .transaction-middle .transaction-middle-left .panel-left{
      width: 70%;
  }
  #app .transaction-wrap .transaction-middle .transaction-middle-left .panel-right{
      width:30%;
  }
  #app .transaction-wrap .transaction-middle .transaction-middle-right{
      width: 24%
  }
}
@media only screen and (max-width: 1400px){
  #app  .transaction-wrap .transaction-middle .transaction-middle-left{
       width: 78.5%
    }
  #app .transaction-wrap .transaction-middle .transaction-middle-left .panel-left{
      width: 64.5%;
  }
  #app .transaction-wrap .transaction-middle .transaction-middle-left .panel-right{
      width:35%;
  }
  #app .transaction-wrap .transaction-middle .transaction-middle-right{
      width: 24.8%;
  }
  #app .limit-price .penel .input-text input{
      width: 69%
  }
  #app .entrust-panel dt span, #app .entrust-panel dd span{width: 19.2%}
}
@media only screen and (max-width: 1366px) and (min-width: 1300px){
#app .transaction-wrap .transaction-middle .transaction-middle-right {
    width: 26.4%;
}
}

</style>
