<template>
	<swiper>
		<swiper-item v-for="(item,index) in banners" :key="index">
			<a :href="item.link">
				<img :src="item.image" alt="" :title="item.title" @load="imageLoad">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from "../../../components/common/swiper/index.js";
	export default{
		name:"homeSwiper",
		props:{
			banners:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		data(){
			return{
				isLoad:false
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods:{
			imageLoad(){//防止每次加载轮播图都调用这个事件
				if (!this.isLoad) {
					this.$emit("swiperImageLoad");
				}
			}
		}
	}
</script>

<style>
</style>
