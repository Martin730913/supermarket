import Toast from "./toast.vue"
const obj={};
obj.install=function (vue) {
  //1.创建组件构造器
  const toastConstrustor=vue.extend(Toast);
  //2. new的方式根据组件构造器可以创建出一个组件对象
  const toast=new toastConstrustor();
  //3. 将组件对象手动挂载到某个元素
  toast.$mount(document.createElement("div"));
  //4. toast.$el就是刚才挂载的div
  document.body.appendChild(toast.$el);
  vue.prototype.$toast=toast;//将toast添加到vue原型中
}
export default obj;