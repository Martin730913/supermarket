<template>
  <div class="cartList">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" v-bind:key="index" :product="item">{{item}}</cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scroll from "../../../components/common/BScroll/BScroll";
import cartListItem from "./cartListItem";
export default {
  name: "cartList",
  computed: {
    ...mapGetters(["cartList"])
  },
  components: {
    cartListItem,
    scroll
  },
  activated() {
    //每次点到购物车界面都刷新一次BScroll高度
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
  .content {
    /* height: 677px; */
    height: calc(100% - 135px);
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style> 