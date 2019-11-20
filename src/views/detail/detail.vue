<template>
	<div class="detail">
		<detail-nav-bar></detail-nav-bar>
		<detail-swiper :top-images="topImages"></detail-swiper>
		<detail-base-info :goods="goods"></detail-base-info>
	</div>
</template>

<script>
	import detailNavBar from "./childComps/detailNavBar";
	import {getDetail,Goods} from "../../network/detail.js";
	import detailSwiper from "./childComps/detailSwiper.vue";
	import detailBaseInfo from "./childComps/DetailBaseInfo.vue"
	export default{
		name:"detail",
		components:{
			detailNavBar,
			detailSwiper,
			detailBaseInfo
		},
		data(){
			return{
				iid:null,
				topImages:[],
				goods:null
			}
		},
		created() {
			// console.log(this.$route.params);
			this.iid=this.$route.params.iid;
			getDetail(this.iid).then(res=>{
				const data=res.result;
				this.topImages=data.itemInfo.topImages;
				this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
			})
		}
	}
</script>

<style>
</style>
