<template>
    <div>
        <v-header></v-header>
        <div class="basic-info">
            <div class="wrapper">
                 <tab-apply></tab-apply>
                 <div class="content">
                      <div class="title">项目基本信息</div>
                      <div class="top-info">
                          <p>所有基本信息务必准确填写，否则会影响审核通过。只接受ERC20代币，审核为后台审核，</p>
                          <p>需要处理时间，审核成功自动进入下一步。</p>
                      </div>
                       <div class="item">
                        <label><i></i>项目名称</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>项目发起主体</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>注册地</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>注册时间</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>项目官网</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>项目最新白皮书链接</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>项目简介</label>
                        <div class="text-info">
                            <textarea name="" id="" ></textarea>
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>项目技术特点或商业模式特点</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                                        <div class="item">
                        <label><i></i>项目应用区块链技术的必要性</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                                        <div class="item">
                        <label><i></i>项目技术特点或商业模式特点</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>项目技术特点或商业模式特点</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>项目技术特点或商业模式特点</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>

                 </div>
                 <div class="content">
                     <div class="title">代币基本信息</div>
                     <div class="top-info">
                         <p>所有基本信息务必准确填写，否则会影响审核通过。只接受ERC20代币，审核为后台审核，</p>
                         <p>需要处理时间，审核成功自动进入下一步。</p>
                     </div>
                    <div class="item">
                        <label><i></i>上传代币logo (建议尺寸为256*256)</label>
                        <div class="text-info">
                            <img src="../../assets/images/upload-icon.png" alt="">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>代币全称和简称</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>代币中文名称</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>代币总量（如总量非固定，请提供变动方式及情况说明)</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                     <div class="item">
                        <label><i></i>代币流通量</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                     <div class="item">
                        <label><i></i>代币功能及用途</label>
                        <div class="text-info">
                            <textarea name="" ></textarea>
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>代币分配方案(含是否锁仓)</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>代币募集时间</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                     <div class="item">
                        <label><i></i>代币币种精度</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                     <div class="item">
                        <label><i></i>代币募集时间</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                     <div class="item">
                        <label><i class="mark">*</i>代币募资方式</label>
                        <div class="check-wrapper">
                            <span class="check-info" :class="{checked:!this.checked}">
                                <i></i> <span>公募</span>
                            </span>
                            <span class="check-info" :class="{checked:this.checked}">
                                <i></i> <span>私募</span>
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>代币公募计划（包括募集时间、公开发售价格、数量、完成情况)</label>
                        <div class="text-info">
                            <textarea name="" ></textarea>
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>代币产生方式</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>基于ER20最新可查询到的智能合约地址</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i></i>提供代币转账开源代码github地址</label>
                        <div class="text-info">
                            <input type="text">
                        </div>
                    </div>
                    <div class="item">
                        <label><i class="mark">*</i>代币是否已在除FBEx的其他交易平台上线</label>
                        <div class="check-wrapper">
                            <span class="check-info" :class="{checked:!this.checked}">
                                <i></i> <span>是</span>
                            </span>
                            <span class="check-info" :class="{checked:this.checked}">
                                <i></i> <span>否</span>
                            </span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
import TabApply from "../mountCoin/TabApplyMount";
import VHeader from "../../components/Header";
import VFooter from "../../components/Footer";
export default {
  data() {
    return {
      checked: false
    };
  },
  components: {
    TabApply,
    VHeader,
    VFooter
  }
};
</script>
<style lang="less" scoped>
.basic-info {
  background: #3b4249;
  padding: 60px 0 87px;
  .wrapper {
    width: 86%;
    margin: 0 7% 0;
    background: #292f37;
  }
}
</style>
