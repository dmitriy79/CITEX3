import NProgress from 'nprogress';
import axios from 'axios';
import store from 'store';

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
axios.interceptors.response.use((resp) => {
  NProgress.done();
  return resp;
}, (error) => {
  console.log(error,'我是用户未登录拦截====》》》》》》》》')
  if (error.data) {
    switch (error.data.status) {
      case 400: 
        // 返回 400 清除token信息并跳转到登录页面
        console.log('清除token信息并跳转到登录页面====....')
        localStorage.removeItem("token")
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  NProgress.done();
  return Promise.reject(error);
});
