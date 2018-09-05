<template>
    <div class="coinTypeInfo">
        <div class="title">币种资料</div>
        <div class="info-wrapper">
            <div class="left">
                <div class="left-title">{{coinName}}</div>
                <ul class="list">
                    <li>
                        发行时间<span>{{createTime}}</span>
                    </li>
                    <li>
                        发行总量<span>{{circulation}}</span>
                    </li>
                    <!-- <li>
                        流通总量<span>53.75%</span>
                    </li>
                    <li>
                        众筹价格<span>约0.2USD</span>
                    </li> -->
                    <li>
                        白皮书<span>{{wihtePaperUrl}}</span>
                    </li>
                     <li>
                        官网<span>{{coinPortal}}</span>
                    </li>
                     <li>
                        区块查询<span>{{blockExplorerUrl}}</span>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="right-title">{{coinName}}简介</div>
                <div class="info">{{introdution}}</div>
                <div class="more">了解更多</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'coinTypeInfo',
            coinName:'',
            createTime:'',
            circulation:'',//发行总量
            wihtePaperUrl:'',//白皮书
            coinPortal:'',//币种官网
            blockExplorerUrl:'',//区块
            introdution:'',//币种介绍
        }
    },
    mounted () {
        this.coinInfo()
    },
    methods: {
     //时间戳转时间
       timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = date.getDate() + ' ';
        return Y+M+D;
    },
    
        //币种资料
        coinInfo(){
            this.$http("/COIN/coin/info/12").then(res=>{
                console.log(res,'9999')
             var coinInfo=res.data.datas
             this.coinName=coinInfo.name
             this.circulation=coinInfo.circulation
             this.wihtePaperUrl=coinInfo.wihtePaperUrl
             this.coinPortal=coinInfo.coinPortal
            this.blockExplorerUrl=coinInfo.blockExplorerUrl
            this.introdution=coinInfo.introdution
            this.createTime=this.timestampToTime(coinInfo.createTime);

            })
        },
    }
}
</script>

<style lang="less" scoped>
.coinTypeInfo{
    background: #292F37;    height: 448px;
    .title{height:30px;line-height:30px;background: #181F27;padding-left: 18px;font-size: 13px;color: #FFFFFF;}
    .info-wrapper{display: flex;
        .left{width:56%;padding-left: 18px;margin-right:3%;
            .left-title{border-bottom: 1px solid #3f4449;line-height: 56px;font-size: 30px;margin-top: 12px;
color: #FFFFFF;}
            .list{
                li{font-family: "PingFangSC-Regular";font-size: 12px;position: relative;
                    border-bottom: 1px solid #3f4449;height: 50px;line-height: 50px;color: #7f8287;
                    span{color: #e9eaeb;position: absolute;left: 80px;}
                    &:last-child{border-bottom:none}
                }
                
                }
        }
        .right{
            width: 40%;
            .right-title{font-size: 14px;margin: 36px 0 11px 0;
color: #FFFFFF;}
            .info{
                color:#94979b;font-size: 12px;line-height: 26px;
            }
            .more{
                font-size: 12px;margin-top: 15px;
            }
        }
    }
}
</style>

