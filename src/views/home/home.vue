<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div> </nav-bar>
		<tab-control ref="tabControl1" :titles="['流行','新款','精选']" @tabClick="tabClick" class="tab-control" v-show="isFixed"></tab-control>
		<b-scroll class="content" 
							ref="scroll" 
							:probe-type="3" 
							@scroll="contentScroll"
							:pull-up-load="true"
							@pullingUp="loadMore"><!-- 不加冒号引号里的值就会被当成字符串 -->
			<!-- 加上 ref="scroll"后就可以获取该组件对象-->
			<home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
			<recommend :recommend="recommends"></recommend>
			<feature></feature>
			<tab-control ref="tabControl2" :titles="['流行','新款','精选']" @tabClick="tabClick" ></tab-control>
			<goods :goods="showGoods"></goods>
		</b-scroll>
		<back-top @click.native="backTop" v-show="isShow"></back-top>
		<!-- 组件无法直接监听点击，所以加了native -->
	</div>
</template>

<script>
	//以下是公共组件
	import NavBar from "../../components/common/navbar/NavBar.vue";
	import tabControl from "../../components/content/tabControl";
	import goods from "../../components/content/goods/goods.vue";
	import BScroll from "../../components/common/BScroll/BScroll.vue";
	import BackTop from "../../components/content/backTop/backTop.vue";
	import {debounce} from "../../common/utils.js";
	import {itemImageLoadMixin} from "../../common/mixin.js"
	
	//以下是子组件
	import homeSwiper from "./childComps/homeSwiper";
	import recommend from "./childComps/recommend";
	import feature from "./childComps/feature";
	
	//以下是方法组件
	import {getHomeMultidata,getHomeGoods} from "../../network/home.js";
	
	export default{
		name:"home",
		components:{
			NavBar,
			homeSwiper,
			recommend,
			feature,
			tabControl,
			goods,
			BScroll,
			BackTop
		},
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					"pop":{page:0,list:[]},
					"new":{page:0,list:[]},
					"sell":{page:0,list:[]}
				},
				currentType:"pop",
				isShow:false,
				tabOffsetTop:0,
				isFixed:false,
				saveY:0,
				itemImageLoad:null
				
			}
		},
		mixins:[itemImageLoadMixin],
		created(){
			this.getHomeMultidata(),
			this.getHomeGoods("pop"),
			this.getHomeGoods("new"),
			this.getHomeGoods("sell")
			
		},
		mounted(){
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		activated() {
			this.$refs.scroll/scrollTo(0,this.saveY,0);
			this.$refs.scroll.refresh();
		},
		deactivated(){
			this.saveY=this.$refs.scroll.scroll.y;
			this.$bus.$off("itemImageLoad",this.itemImageLoadMixin)
		},
		methods:{
			/* 
			 事件监听相关
			 */
			loadMore(){
				this.getHomeGoods(this.currentType);
			},
			tabClick(index){
				switch(index){
					case 0:
					this.currentType="pop";
					break;
					case 1:
					this.currentType="new";
					break;
					case 2:
					this.currentType="sell";
					break;
				}
				this.$refs.tabControl1.currentIndex=index;
				this.$refs.tabControl2.currentIndex=index;
			},
			backTop(){
				this.$refs.scroll.scrollTo(0,0,500);
			},
			contentScroll(position){
				//console.log(position);
				if(-position.y>1500){
					this.isShow=true;
				}else{
					this.isShow=false;
				}
				this.isFixed=-position.y>this.tabOffsetTop
			},
			swiperImageLoad(){
				this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
			},
			/* 
			 网络请求相关
			 */
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					this.banners=res.data.banner.list;
					this.recommends=res.data.recommend.list;
				})
			},
			getHomeGoods(type){
				const page=this.goods[type].page+1;
				getHomeGoods(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list);
					this.goods[type].page+=1;
					this.$refs.scroll.finishPullUp();
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#home{
		/* padding-top: 44px; */
		height: 100vh;
	}
	.home-nav{
		background-color: pink;
		color: #fff;
	}
	.content{
		
		position: absolute;
		overflow: hidden;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.fixed{
		position: fixed;
		left: 0;
		right: 0;
		top:44px; 
	}
	.tab-control{
		position: relative;
		z-index: 9;
	}
</style>
