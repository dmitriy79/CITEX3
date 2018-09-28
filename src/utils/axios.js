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
  NProgress.done();
  return Promise.reject(error);
});
