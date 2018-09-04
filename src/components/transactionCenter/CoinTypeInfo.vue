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
                    <li>
                        流通总量<span>53.75%</span>
                    </li>
                    <li>
                        众筹价格<span>约0.2USD</span>
                    </li>
                    <li>
                        白皮书<span>{{wihtePaperUrl}}</span>
                    </li>
                     <li>
                        官网<span>{{coinPortal}}</span>
                    </li>
                     <li>
                        区块查询<span>https://explorer.ont.io/</span>
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="right-title">IOST简介</div>
                <div class="info">IOST是是新一代公有基础链项目 & 分布式信任协作平台。 本体提供新一代高性能基础公有链，包括完整的分布式账本、智能合约体系支持。 同时本体架构支持公有链网体系，除了提供基础公有链服务，通过本体区块链框架支持不同应用的公有链定制，并通过不同协议群支持链网协作。 在基础层之上，本体将持续提供各类分布式应用中的通用性模块，如分布式身份框架、分布式数据交换协议等支持分布式信任协作组件，并会根据应用需求持续扩展新的通用模块。</div>
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
        }
    },
    mounted () {
        this.coinInfo()
    },
    methods: {
        //币种资料
        coinInfo(){
            this.$http("/COIN/coin/info/8").then(res=>{
             var coinInfo=res.data.datas
             this.coinName=coinInfo.name
             this.createTime=coinInfo.createTime
             this.circulation=coinInfo.circulation
             this.wihtePaperUrl=coinInfo.wihtePaperUrl
             this.coinPortal=coinInfo.coinPortal
            })
        },
    }
}
</script>

<style lang="less" scoped>
.coinTypeInfo{
    background: #292F37;
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

