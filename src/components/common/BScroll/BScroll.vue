<template>
	<div class="wrapper" ref="wrapper">
		<!-- 因为一个项目里可能有若干个wrapper，所以这里加了一个ref，这样不管有几个，通过this.$refs获取的一定是这一个 -->
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from "better-scroll"
	export default{
		name:"BScroll",
		data(){
			return {
				scroll:null
			}
		},
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		mounted() {
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,/* 控制div等元素是否可以点击  */
				probeType:this.probeType,
				pullUpLoad:this.pullUpLoad
			})
			if (this.probeType===2||this.probeType===3) {
				this.scroll.on("scroll",(position)=>{
					this.$emit("scroll",position)
				})
			}
			//console.log(this.scroll);
			//this.scroll.refresh();
			//
			if (this.pullUpLoad) {//有的组件不需要监听，所以需要判断
				this.scroll.on("pullingUp",()=>{
					this.$emit("pullingUp")
				})
			}
		},
		methods:{
			scrollTo(x,y,time=300){
				//console.log(this.$refs.scroll.BScroll);
				this.scroll && this.scroll.scrollTo(0,0,time);
				/* scrollTo方法参数详解
				 参数一：目标位置的横坐标
				 参数二：目标位置的纵坐标
				 参数三：返回所消耗的事件
				 */
			},
			refresh(){
				this.scroll && this.scroll.refresh();
			},
			finishPullUp(){
				this.scroll && this.scroll.finishPullUp();
			}
		}
	}
</script>

<style>
</style>
