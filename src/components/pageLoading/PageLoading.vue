<template>
    <div class="pageloaidng">
       	<div class="icon-logo"></div>
    </div>
</template>
<script>
export default {
  name: "VFooter",
  data(){
    }
  },
   methods: {
    showCode(e){
      this.currentCode = e.target.dataset.index
    }
  }
};
</script>
<style lang="less" scoped>
	.pageloading{
		position: fixed;
		left: 0;right: 0;
		top:0;
		bottom:0;
	}
</style>

