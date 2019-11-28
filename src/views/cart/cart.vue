<template>
	<div class="cart">
    <nav-bar class="nav">
      <div slot="center">购物车(&nbsp;{{length.length}}&nbsp;)</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bar></cart-bar>
  </div>
</template>

<script>
import navBar from "../../components/common/navbar/NavBar";
import cartList from "./childComps/cartList";
import {mapGetters} from "vuex";
import cartBar from "./childComps/cartBar"
	export default{
    name:"cart",
    components: {
      navBar,
      cartList,
      cartBar
    },
    computed: {
      /* 将vuex的getters里的函数返回值转换成计算属性 */
      /* 方法一 */
      //...mapGetters(["cartList"])
      /* 方法二 */
      ...mapGetters({
        length:"cartList"//将getters里函数返回值作为对象的属性值
      })
    }
	}
</script>

<style scoped>
  .nav{
    background-color:#ff8083;
    color: #ffffff;
    font-weight: 700;
  }
  
</style>
