<template>
	<div class="cart">
    <nav-bar class="nav">
      <div slot="center">购物车(&nbsp;{{length}}&nbsp;)</div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "../../components/common/navbar/NavBar";
import {mapGetters} from "vuex"
	export default{
    name:"cart",
    components: {
      navBar
    },
    computed: {
      /* 将vuex的getters里的函数返回值转换成计算属性 */
      /* 方法一 */
      //...mapGetters(["cartLength"])
      /* 方法二 */
      ...mapGetters({
        length:"cartLength"//将getters里函数返回值作为对象的属性值
      })
    }
	}
</script>

<style scoped>
  .nav{
    background-color: hotpink;
    color: #ffffff;
    font-weight: 700;
  }
</style>
