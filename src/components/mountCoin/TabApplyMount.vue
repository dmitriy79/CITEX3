<template>
    <div class="tab-wrapper">
      <router-link to="/BasicInfo" tag="div" class="tab-item">
        <p class="name">提交基本信息</p>
      </router-link>
      <router-link to="/BasicInfo" tag="div" class="tab-item">
        <p class="name">上传平台注册用户</p>
      </router-link>
      <router-link to="/BasicInfo" tag="div" class="tab-item">
        <p class="name">验证账户有效性</p>
      </router-link>
      <router-link to="/BasicInfo" tag="div" class="tab-item">
        <p class="name">验证项目留言活跃度</p>
      </router-link>
      <router-link to="/BasicInfo" tag="div" class="tab-item">
        <p class="name">验证上币指数</p>
      </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.tab-wrapper{font-size:0;background: #181f27;
    .tab-item{display:inline-block;width:20%;
        p{cursor: pointer;height: 40px;line-height: 40px;font-size: 13px;
    color: #FFFFFF;
    text-align: center;}
    }
}

</style>
