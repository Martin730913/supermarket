import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index"
import toast from "./components/common/toast/index"
import fastClick from "fastclick"
import lazyLoad from "vue-lazyload"
Vue.config.productionTip = false;
Vue.prototype.$bus=new Vue();//添加事件总线
Vue.use(toast);//本质上会执行toast文件里导出对象的install,同时传入vue对象
Vue.use(lazyLoad,{
  loading:require("./assets/img/common/placeholder.png")
});
fastClick.attach(document.body);//解决移动端300ms的延迟
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
