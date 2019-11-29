import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index"
import toast from "./components/common/toast/index"
Vue.config.productionTip = false;
Vue.prototype.$bus=new Vue();//添加事件总线
Vue.use(toast);//本质上会执行toast文件里导出对象的install,同时传入vue对象
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
