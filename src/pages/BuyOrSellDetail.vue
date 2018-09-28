<template>   
    <div>
         <div class="container">
             <div class="title"><router-link to="/Transaction" class="green">交易中心</router-link> > <span>买卖盘</span></div>
            <div class="list">
                 <div class="left">
                    <div class="title_">买盘</div>
                    <dl class="item">
                        <dt>
                            <span></span>
                            <span>买入价（USTD）</span>
                            <span>买入量（BTC）</span>
                            <span>累计（BTC）</span>
                        </dt>
                        <dd v-for="(item,index) in list">
                            <span class="green">买{{index+1}}</span>
                            <span>{{item.buyprice}}</span>
                            <span>{{item.buynum}}</span>
                            <span>{{item.total}}</span>
                        </dd>
                    </dl>
                </div>
                <div class="right">
                    <div class="title_">卖盘</div>
                     <dl class="item">
                        <dt>
                            <span></span>
                            <span>买出价（USTD）</span>
                            <span>买出量（BTC）</span>
                            <span>累计（BTC）</span>
                        </dt>
                        <dd v-for="(item,index) in list">
                            <span class="red">卖{{index+1}}</span>
                            <span>{{item.buyprice}}</span>
                            <span>{{item.buynum}}</span>
                            <span>{{item.total}}</span>
                        </dd>
                    </dl>
                </div>
            </div>
           
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
               
            ],
            list1:[
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
                {id:1,buyprice:'7547.67',buynum:'0.3000',total:'0.3000'},
               
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.title{
        height: 50px;line-height: 50px;padding-left: 20px;font-size: 16px;
    background: #181f27;margin: 20px 0; 
}
.list{overflow: hidden;
.item{    background: #292f37;margin-bottom:20px;
    dt,dd{display: flex;font-size:14px;
     span{flex: 1;line-height: 30px;
        &:first-child{padding-left: 20px;}
     }
    }
}
    .left,.right{
        width: 49%;float: left;
    }
    .left{margin-right: 2%;}
    .title_{width: 100%;height: 35px;line-height: 35px; background: #181f27;padding-left: 20px;}
}

</style>
