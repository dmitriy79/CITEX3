import NProgress from 'nprogress';
import axios from 'axios';
import store from 'store';
import router from '../router'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use((config) => {
  NProgress.start();
  const token = store.get('token') || {};
  if (token) {
    config.headers['USER-TOKEN'] = token;
  }
  return config;
}, (error) => {
  NProgress.start();
  return Promise.reject(error);
});
router.beforeEach((to, from, next) => {
  if(to.path=='/transaction'){
   localStorage.setItem("isTran",true) 
  }
  next()
})
axios.interceptors.response.use((resp) => {
  let isTran=localStorage.getItem("isTran")
  if(!isTran){
     if(resp.data.message=='no login'||resp.data.message=='用户未登录'){
      // 返回 400 清除token信息并跳转到登录页面
      console.log('清除token信息并跳转到登录页面====....')
      localStorage.removeItem("token")
      localStorage.removeItem("isTran")
      router.replace({
        path: '/login',
        // query: {redirect: router.currentRoute.fullPath}
      })
       window.location.reload()

 }
  }
   
  NProgress.done();
  return resp;
}, (error) => {
  NProgress.done();
  return Promise.reject(error);
});
