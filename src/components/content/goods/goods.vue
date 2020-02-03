<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem";
export default {
  name: "goods",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    goodsListItem
  }
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  z-index: 0;
  justify-content: space-around;
}
</style>
