<template>
    <div class="">
        <div class="tabs">
            <span :class="{active:currentTab==='addCard'}" @click="tab('addCard')">添加银行卡</span>
            <span :class="{active:currentTab==='mineCard'}" @click="tab('mineCard')">我的银行卡</span>
        </div>
        <div class="content">
            <div class="items" v-if="this.currentTab==='addCard'">
            <div class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px" >
                    <el-form-item label="选择银行">
                        <el-select v-model="form.region" placeholder="">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="银行卡所在地" class="area">
                        <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                         <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                     <el-form-item label="开户支行">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="持卡人姓氏">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="持卡人名字" placeholder="">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="银行卡账号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                  
                </el-form>
                <div class="bottom-btn">添加银行卡</div>
            </div>
            </div>
             <div class="items" v-if="this.currentTab==='mineCard'">
               <div class="minecard-wrapper">
                 <el-table :data="tableData1"  style="width: 100%">
                    <el-table-column prop="date" label="银行" >

                    </el-table-column>
                    
                    <el-table-column prop="num" label="银行所在地"></el-table-column>
                    <el-table-column prop="num" label="持卡人姓氏"></el-table-column>
                    <el-table-column prop="num" label="持卡人名字"></el-table-column>
                    <el-table-column prop="num" label="银行卡卡号"></el-table-column>
                </el-table>
            </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
             currentTab: "addCard",
                   tableData1: [{
            date: '2016-05-02',
            type: 'USDT',
            num: '1'
          }],
                form: {
          name: '',
          region: '',
     
        
        }
        }
    },
    methods:{
        //tab切换
         tab(item) {
            this.currentTab = item;
        },
    }
}
</script>
<style lang="less" scoped>
.tabs {
  height: 40px;
  margin-bottom: 23px;
  color: #fff;
  background: #1b222a;
  cursor: pointer;
  line-height: 40px;
  display: flex;
  span {
    display: block;
    text-align: center;
    font-size: 15px;
    width: 144px;
  }
  span.active {
    background: #292f37;
  }
}
.content{
    .items{
        padding: 0 30px;
        .area{
            .el-select{width: 24.7%!important}
        }
        .bottom-btn{
                width: 132px;
                margin-top: 40px;
                height: 42px;
                line-height: 42px;
                background: #2286FF;
                text-align: center;
                border-radius: 2px;
                font-size: 16px;
                color: #FFFFFF;
        }
    }
}
</style>

