<template>
	<div class="detail">
		<detail-nav-bar></detail-nav-bar>
		<b-scroll class="content">
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<shop-info :shop="shopInfo"></shop-info>
			<goods-info :detail-info="detailInfo"></goods-info>
			<params-info :param-info="itemParams"></params-info>
		</b-scroll>
	</div>
</template>

<script>
	import detailNavBar from "./childComps/detailNavBar";
	import {getDetail,Goods} from "../../network/detail.js";
	import detailSwiper from "./childComps/detailSwiper.vue";
	import detailBaseInfo from "./childComps/DetailBaseInfo.vue";
	import BScroll from "../../components/common/BScroll/BScroll.vue";
	import shopInfo from "./childComps/shopInfo";
	import goodsInfo from "./childComps/goodsInfo";
	import paramsInfo from "./childComps/paramsInfo";
	export default{
		name:"detail",
		components:{
			detailNavBar,
			detailSwiper,
			detailBaseInfo,
			BScroll,
			shopInfo,
			goodsInfo,
			paramsInfo
		},
		data(){
			return{
				iid:null,
				topImages:[],
				goods:null,
				shopInfo:{},
				detailInfo:null,
				itemParams:null
			}
		},
		created() {
			// console.log(this.$route.params);
			this.iid=this.$route.params.iid;
			getDetail(this.iid).then(res=>{
				const data=res.result;
				this.topImages=data.itemInfo.topImages;
				this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
				this.shopInfo=data.shopInfo;
				this.detailInfo=data.detailInfo;
				this.itemParams=data.itemParams;
			})
		},
		
	}
</script>

<style scoped="scoped">
	.detail{
		height: 100vh;
		background-color: #FFF;
		position: relative;
	}
	.content{
		background-color: #FFF;
		position: absolute;
		top: 44px;
		bottom: 53px;
		left: 0;
		right: 0;
	}
</style>
