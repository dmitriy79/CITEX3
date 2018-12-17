<template>
    <div class="container">
        <div class="tab-transaction">
            <div class="tab">
                <span v-for='(item,index) of allCoin' 
                :class='{active:index == selectedZoneIndex}' 
                @click='selectZone(index)'>{{item.zoneCoinName}}</span>
                <span @click="selectZone(-1)" :class="{ active: -1 == selectedZoneIndex}">
                  <span class="ico-star-fill"></span>
                </span>
            </div>
            <div class="content">
                <dl class="transaction-list">
                    <dt>
                        <div>币种</div>
                        <div>最新成交价</div>
                        <div>日涨价</div>
                        <div>最低价</div>
                        <div>最高价</div>
                        <div>昨日收盘价</div>
                        <div>24h交易量</div>
                    </dt>
                    <dd v-for='(item,index) of (searchList || allCoin[selectedZoneIndex].list)' @click="jumpToTrade(item.name)">
                        <div class="transaction-list-title">
                          <i
                            @click.stop="$store.dispatch('favoriteCoin',{trade_coin_pair_id:item.id, collect:item.collect ? '0':'1'})"
                            class="ico ico-star-fill" 
                            :class="{'ico-star':!item.collect}">
                          </i>


                          <span  v-if="selectedZoneIndex!==-1">{{item.name}}</span>
                          <span v-if="selectedZoneIndex==-1&&localStorage.getItem('token')">{{item.name}}/{{item.unit_coin_name}}</span>
                          <span v-if="selectedZoneIndex==-1&&(!localStorage.getItem('token'))">{{item.name}}/{{item.zoneCoinName}}</span>

                        </div>
                        <div>{{item.deal_price}}</div>
                        <div class="red" :class="{green : item.increase}">
                          {{item.increase ? '+' : '-'}}{{item.increase_24H | decimal(2)}}%
                        </div>
                        <div>{{item.minPrice_24H}}</div>
                        <div>{{item.maxPrice_24H}}</div>
                        <div>{{item.yesterdayDealPrice}}</div>
                        <div>{{item.amount_24H}}</div>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {
      searchList: null,
      selectedZoneIndex: 0,
      token:'',
    };
  },
  created() {
    this.token=localStorage.getItem("token")
  },
  watch: {
    selectedZoneIndex() {
      this.searchList = this.getCoinList();
    },
    // allCoin() {
    //   this.searchList = this.getCoinList();
    // }
  },
  computed: {
    ...mapState(["allCoin","isCollect"]),
  },
  methods: {
    getCoinList() {
      if (this.selectedZoneIndex == -1&&(!this.token)) {

        let token = localStorage.getItem('token');

        let list = [];
      if (this.selectedZoneIndex == -1) {
        if(token){
            this.$api.getTradeInfo({type:1}).then(res=>{
            if (res.datas) {
            //   res.datas.map( zone => {
            //   zone.list.map( coin => {
            //     coin.collect && list.push(coin);
            //   });
            // });
            }
          });
        }
        else{
          let list = [];
        this.allCoin.map( zone => {
          zone.list.map( coin => {
            coin.collect && list.push(coin);
          });
        });
        }
       
        return list;
      } else {
        if(!this.token){
          return this.allCoin[this.selectedZoneIndex].list;
        }
      }
      }
    },
    jumpToTrade(name) {
      let zone = this.allCoin[this.selectedZoneIndex].zoneCoinName;
      this.$router.push(`/transaction/${name}_${zone}`)
    },
    selectZone(index) {
      if(index==-1&&this.token){
        this.$api.getTradeInfo({type:1}).then(res=>{
          console.log(res,'wwww====>>>>>>>')
        if (res.datas) {
          // this.allCoin = res.datas
          this.searchList=res.datas[0].list
          
        }
      });
      }

      this.selectedZoneIndex = index;
    },
  }
};
</script>
<style lang="less" scoped>
.tab-transaction {
  background: #292f37;
  margin-top: 18px;
  .tab {
    background: #1f252d;
    height: 38px;
    line-height: 38px;
    display: flex;
    span {
      width: 130px;
      cursor: pointer;
      text-align: center;
      color: #999ea4;
      font-size: 15px;
      transition: 0.4s;
      &:hover {
        background: darken(#23272e, 3%);
        color: #fff;
      }
      &.active {
        color: #f0f4f8;
        background: #292f37;
      }
    }
  }
  .content {
    padding-bottom: 30px;
    .transaction-list {
      padding: 0 14px;
      font-size: 12px;
      color: #999ea4;
      background: #292f37;
      .red,
      .green {
        font-weight: 800;
      }
      &-title {
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 20px;
          margin: 0 10px;
        }
        i,
        img {
          width: 20px;
        }
      }
      dt {
        display: flex;
        height: 40px;
        align-items: center;
        border-bottom: 1px solid #3b4249;
        div {
          flex: 1;
          &:first-child {
            padding-left: 8px;
          }
        }
      }
      dd {
        display: flex;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid #3b4249;
        cursor: pointer;
        &:last-child {
          border-bottom: none;
        }
        transition: 0.4s;
        &:hover {
          background: #22282f;
        }
        div {
          flex: 1;
          &:first-child {
            color: #bec3c8;
            padding-left: 8px;
          }
        }
        .img-wrap {
          display: inline-block;
          margin: 0 8px 0 13px;
          img {
            width: 102;
            height: 102;
          }
        }
        .ico-star {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
