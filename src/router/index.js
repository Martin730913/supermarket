import Vue from 'vue'
import Router from 'vue-router';
const home=()=>import("../views/home/home");
const category=()=>import("../views/category/category");
const cart=()=>import("../views/cart/cart");
const profile=()=>import("../views/profile/profile");
const detail=()=>import("../views/detail/detail")

Vue.use(Router)
const routes=[
	{
		path:"",redirect:"/home"
	},
	{
		path:"/home",component:home
	},
	{
		path:"/category",component:category
	},
	{
		path:"/cart",component:cart
	},
	{
		path:"/detail/:iid",component:detail
	},
	{
		path:"/profile",component:profile
	}
];
const router=new Router({
  routes
});
export default router

