<template>
  <div class="category">
    <nav-bar class="nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="detials">
      <left-cate></left-cate>
      <right-cate></right-cate>
    </div>
    
  </div>
</template>

<script>
import leftCate from "./childComps/leftCate";
import rightCate from "./childComps/rightCate";
import navBar from  "../../components/common/navbar/NavBar";
export default {
  name: "category",
  data() {
    return {
    };
  },
  components: {
    navBar,
    leftCate,
    rightCate
  },
  methods:{
  },
  created() {},
  mounted() {}
};
</script>

<style scoped="scoped">
  .detials{
    display: flex;
  }
  .nav{
  background-color: #ff8083;
  color: #fff;
  font-weight: bold;
}
</style>
