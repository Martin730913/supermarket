<template>
  <div class="moreInfo">
    <ul>
      <li v-for="(item,index) in items" 
          :key="index"
          :class="index==2?'divide':null"
          @click="toCart(index)">
        <span class="icon">
          <i :class="item.class"></i>
        </span>
        <span class="border name">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "moreInfo",
  data() {
    return {
      items: [
        { name: "我的消息", class: "fa fa-user fa-lg" },
        { name: "积分商城", class: "fa fa-gift fa-lg" },
        { name: "会员卡", class: "fa fa-diamond fa-lg" },
        { name: "我的购物车", class: "fa fa-shopping-cart fa-lg",flag:true},
        { name: "点赞购物APP", class: "fa fa-thumbs-up fa-lg" }
      ]
    };
  },
  methods:{
    toCart(index){
      if (index==3) {
        this.$router.push("/cart/");
      }
    }
  }
};
</script>
<style scoped>
.moreInfo ul {
  list-style: none;
  width: 100%;
}
.moreInfo ul li {
  height: 45px;
  padding-left: 6%;
}
.moreInfo ul li span {
  display: inline-block;
  height: 25px;
  padding: 10px 0px;
}
.name {
  width: 93%;
}
.icon {
  width: 7%;
}
.border {
  border-bottom: 1px solid #eee;
}
.divide {
  border-bottom: 10px solid #eee;
}
</style>