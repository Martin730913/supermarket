<template>
  <div id="app">
		<keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
		<tabbar>
			<tabbar-item path="/home">
				<i class="fa fa-home fa-2x"  slot="item-icon"></i>
				<span slot="item-text">首页</span>
			</tabbar-item>
			<tabbar-item path="/category">
				<i class="fa fa-bars fa-2x" slot="item-icon" ></i>
				<span slot="item-text">分类</span>
			</tabbar-item>
			<tabbar-item path="/cart">
				<i class="fa fa-cart-plus fa-2x" slot="item-icon"></i>
				<span slot="item-text">购物车</span>
			</tabbar-item>
			<tabbar-item path="/profile">
				<i class="fa fa-user-circle fa-2x" slot="item-icon"></i>
				<span slot="item-text">我的</span>
			</tabbar-item>
		</tabbar>
  </div>
</template>

<script>
	import tabbar from "./components/common/tabbar/tabbar"
	import tabbarItem from "./components/common/tabbar/tabbar_item"
	export default {
		name: 'App',
		components:{
			tabbar,
			tabbarItem
		}
	}
</script>
<style>
	/* @import url("../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css");
	@import url("../../../assets/css/base.css"); */
	
		@import url("./assets/css/font-awesome-4.7.0/css/font-awesome.min.css");
		@import url("./assets/css/base.css");
</style>