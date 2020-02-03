<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <b-scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <shop-info :shop="shopInfo"></shop-info>
      <goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></goods-info>
      <params-info :param-info="itemParams" ref="params"></params-info>
      <comment-info :comment-info="commentInfo" ref="comment"></comment-info>
      <goods :goods="recommend" ref="recommend"></goods>
    </b-scroll>
    <buttom-bar @addCart="addToCart" @buy="addToCart"></buttom-bar>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
    <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>

<script>
import detailNavBar from "./childComps/detailNavBar";
import { getDetail, Goods, getRecommend } from "../../network/detail.js";
import detailSwiper from "./childComps/detailSwiper.vue";
import detailBaseInfo from "./childComps/DetailBaseInfo.vue";
import BScroll from "../../components/common/BScroll/BScroll.vue";
import shopInfo from "./childComps/shopInfo";
import goodsInfo from "./childComps/goodsInfo";
import paramsInfo from "./childComps/paramsInfo";
import commentInfo from "./childComps/commentInfo";
import goods from "../../components/content/goods/goods";
import { debounce } from "../../common/utils.js";
import { itemImageLoadMixin, backTopMixin } from "../../common/mixin.js";
import buttomBar from "./childComps/buttomBar";
import { mapActions } from "vuex";
//import toast from "../../components/common/toast/toast";
export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    BScroll,
    shopInfo,
    goodsInfo,
    paramsInfo,
    commentInfo,
    goods,
    buttomBar
    //toast
  },
  mixins: [itemImageLoadMixin, backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommend: [],
      themeTops: [],
      getThemeTops: null,
      currentIndex: 0,
      cart:null
      // message:"",
      // show:false
    };
  },
  created() {
    // console.log(this.$route.params);
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shopInfo = data.shopInfo;
      this.detailInfo = data.detailInfo;
      this.itemParams = data.itemParams;
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then(res => {
      this.recommend = res.data.list;
    });
    this.$nextTick(() => {
      //这里仍然无发获取到值
      //即使获取到值，在首次进入的情况下值也是不正确的，这是因为首次进入时只渲染了DOM，图片并没有计算在内
    });
    //对给ThemeTops赋值的操作进行防抖
    this.getThemeTops = debounce(() => {
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.params.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE); //这个值用于优化contentScroll里的for循环
    });
  },
  methods: {
    ...mapActions(["addCart"]),
    detailImageLoad() {
      this.newRefresh();
      this.getThemeTops();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100);
      //console.log(index);
    },
    contentScroll(position) {
      const positionY = -position.y;
      //此处的i为字符串，可以通过*1来转换为数字
      // for (const i in this.themeTops) {
      //   if(positionY>this.themeTops[i]&&positionY<this.themeTops[i+1]){
      //     console.log("ok");
      //   }
      // }
      // for (let i = 0,length=this.themeTops.length; i < length; i++) {
      //   if (this.currentIndex!==i &&((i<length-1&&positionY>=this.themeTops[i]&&positionY<this.themeTops[i+1])||(i===length-1&&positionY>this.themeTops[i]))) {
      //     this.currentIndex=i;
      //     this.$refs.nav.currentIndex=this.currentIndex;
      //   }
      // }
      //对上面for循环的优化
      for (let i = 0, length = this.themeTops.length; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTops[i] && positionY < this.themeTops[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      if (-position.y > 1500) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    addToCart(flag) {
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        iid: this.iid
      };
      this.cart=this.addCart(product);
      
      if (flag) {
        this.$router.push("/cart/");
      } else {
        this.cart.then(res => {
          // this.show=true;
          // this.message=res;
          // setTimeout(() => {
          //   this.show=false;
          // }, 1500);
          this.$toast.show(res, 1500);
        });
      }

      /* Actions可以返回一个promise */
    }
  },
  mounted() {
    /* 
      由于params-info，comment-info，goods三个组件中的数据是异步获取的，并不能保证在mounted里数据就获取到，所以不能在这里给themeTops添加值
      */
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImageLoadMixin);
  }
};
</script>

<style scoped="scoped">
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.content {
  background-color: #fff;
  position: absolute;
  top: 44px;
  bottom: 53px;
  left: 0;
  right: 0;
}
</style>
