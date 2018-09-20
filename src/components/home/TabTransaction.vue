<template>
    <div class="container">
        <div class="tab-transaction">
            <div class="tab">
                <span v-for='(item,index) of category' :class='{active:tradingCurrentIndex == item.id}' @click='$store.dispatch("home/getTrading", item.id)'>{{item.zoneName}}</span>
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
                    <dd v-for='(item,index) of tradingList.list' v-if="tradingList.list">
                        <div class="transaction-list-title"> <i class="ico-star"></i><img src="../../assets/images/b.png" alt="" /><span>{{item.type}}</span></div>
                        <div>{{item.deal_price}}</div>
                        <div class="red" :class="{green : item.increase}">{{item.increase_24H}}%</div>
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
import {mapActions, mapGetters} from 'vuex'
export default {
    props: {
        category: Array,
        list:Array,
        tradingList:Object,
        tradingCurrentIndex:Number
    }
}
</script>
<style lang="less" scoped>
.tab-transaction {
    background: #292F37;
    margin-top: 18px;
    .tab {
        background: #1f252d;
        height: 38px;
        line-height: 38px;
        span {
            width: 130px;
            cursor: pointer;
            text-align: center;
            color: #999EA4;
            display: inline-block;
            font-size: 15px;
            transition: .4s;
            &:hover {
                background: darken(#23272e, 3%);
                color: #fff;
            }
            &.active {
                color: #f0f4f8;
                background: #292F37;
            }
        }
    }
    .content {
        padding-bottom: 30px;
        .transaction-list {
            padding: 0 14px;
            font-size: 12px;
            color: #999EA4;
            background: #292F37;
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
                border-bottom: 1px solid #3B4249;
                div {
                    flex: 1;
                    &:first-child {
                        padding-left: 8px
                    }
                }
            }
            dd {
                display: flex;
                align-items: center;
                height: 40px;
                border-bottom: 1px solid #3B4249;
                &:last-child {
                    border-bottom: none;
                }
                transition:.4s;
                &:hover {
                    background: #22282F;
                }
                div {
                    flex: 1;
                    &:first-child {
                        color: #BEC3C8;
                        padding-left: 8px
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
                    font-size: 15px
                }
            }
        }
    }
}

</style>
