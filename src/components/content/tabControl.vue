<template>
	<div class="tabControl">
		<div v-for="(item,index) in titles" class="tabControlItem" :class="{active:index===currentIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tabControl",
		props:{
			titles:{
				type:Array,
				default(){
					return[];
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex=index;
				this.$emit("tabClick",index);
			}
		}
	}
</script>

<style scoped="scoped">
	.tabControl{
		display: flex;
		text-align: center;
		font-size: 15px;
		background: #fff;
		z-index: 999;
		margin-bottom: 10px;
	}
	.tabControlItem{
		flex: 1;
		height: 40px;
		line-height: 40px;
	}
	.tabControlItem span{
		padding: 5px;
	}
	.active span{
		color: pink;
		border-bottom: 3px solid pink;
	}
</style>
