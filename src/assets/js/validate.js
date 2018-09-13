
import Vue from 'vue';
import { Message } from 'element-ui';

 Vue.prototype.$message = Message;
 
export function validateIdentity(ele){
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
    if(!regIdNo.test(ele)){ 
    Vue.prototype.$message({
        message: '身份证号填写有误',
        type: 'warning'
      });
    return false; 
    }
}
export function validatePassword(ele){
    var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
    if(!regExp.test(ele)){ 
    Vue.prototype.$message({
        message: '密码是数字和字母组合，不能小于6位',
        type: 'warning'
      });

    }
    else{
        Vue.prototype.$message({
            message: '密码不能为空',
            type: 'warning'
          });   
    }
    // if(regExp.test(ele)==''){
    //     Vue.prototype.$message({
    //         message: '密码不能为空',
    //         type: 'warning'
    //       });
        
    // }
}
export default{
    validateIdentity,
    validatePassword
}