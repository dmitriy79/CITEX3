<template>
  <div id="app">
    <v-header></v-header>
    <div class="wrapper" style="padding-top: 50px;">
      <router-view/>
    </div>
    <div class="footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import VHeader from "@/components/Header";
import VFooter from "@/components/Footer";
export default {
  name: 'App',
  data(){
    return{
    
    }
  },
  components: {
    VHeader, VFooter
  },
  methods: {

  }
}
</script>

<style>
  @import "../src/assets/css/reset.css"
</style>