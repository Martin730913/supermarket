<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-bind:style="activeStyle">
			<slot name="item-icon"></slot>
		</div>
		<slot name="item-text"></slot>
	</div>
</template>

<script>
	export default{
		name:"tabbarItem",
		props:{
			path:String,
			activeColor:{
				type:String,
				default:"#B8860B"
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path)
			}
		},
		computed:{
			isActive(){
				// console.log("活跃的路由是"+this.path);
				// console.log(this.$route.path);
				return this.$route.path.indexOf(this.path)!==-1
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{};
			}
		}
	}
</script>

<style>
</style>
