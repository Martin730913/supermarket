<template>
	<div id="detail-nav-bar">
		<nav-bar>
			<div slot="left" class="back" @click="backClick">
				<img src="../../../assets/img/common/back.svg" alt="">
			</div>
			<div slot="center" class="title">
				<div v-for="(item,index,key) in titles" 
						 v-bind:key="key"
						 class="title-item"
						 :class="{active:index===currentIndex}"
						 @click="titleClick(index)">{{item}}</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from "../../../components/common/navbar/NavBar.vue";
	export default{
		name:"detailNavBar",
		components:{
			NavBar
		},
		data(){
			return{
				titles:["商品","参数","评论","推荐"],
				currentIndex:0
			}
		},
		methods:{
			titleClick(index){
        this.currentIndex=index;
        this.$emit("titleClick",index);
			},
			backClick(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped="scoped">
	.title{
		display: flex;
	}
	#detail-nav-bar{
		border-bottom: 0.5px solid whitesmoke;
		position: relative;
		z-index: 9999;
		background-color: #fff;
	}
	.title-item{
		flex: 1;
		font-size: 13px;
	}
	.active{
		color: hotpink;
	}
	.back img{
		margin: 11px 0;
	}
</style>
