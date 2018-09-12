// import Vue from 'vue'
// import 'element-ui/lib/theme-chalk/index.css'
// import {
	
// 	Message,
// 	MessageBox,
	
// } from 'element-ui'
// Vue.prototype.$message = Message
// Vue.prototype.$msgbox = MessageBox;
import Vue from 'vue';
import { Message } from 'element-ui';

 Vue.prototype.$message = Message;
 
export function validateIdentity(timestamp){
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
    if(!regIdNo.test(timestamp)){ 
    // alert('身份证号填写有误'); 
    this.$message({
        message: '身份证号填写有误',
        type: 'warning'
      });
    return false; 
    }
}
export default{
    validateIdentity,
  
}