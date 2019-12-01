<template>
	<div class="recommend">
		<div v-for="(item,index) in recommend" v-bind:key="index" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" />
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"recommend",
		props:{
			recommend:{
				type:Array,
				default(){
					return[];
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.recommend{
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 12px;
		padding: 15px 0 30px 0;
		border-bottom: 8px solid #eee;
	}
	.recommend-item{
		flex:1;
	}
	.recommend-item img{
		width: 70px;
		margin-bottom: 10px;
	}
</style>
