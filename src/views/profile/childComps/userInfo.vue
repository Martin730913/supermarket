<template>
    <div class="userInfo">
      <ul>
        <li class="info" v-for="(item,index) in info" v-bind:key="index">
          <p><span class="number">{{item.number}}</span><span class="unit">{{item.unit}}</span></p>
          <p class="name">{{item.name}}</p>
        </li>
      </ul>
      <div class="space"></div>
    </div>
</template>

<script>
export default {
  name:"userInfo",
  data() {
    return {
      info:[
        {name:"我的余额",unit:"元",number:"0.00"},
        {name:"我的优惠",unit:"个",number:0},
        {name:"我的积分",unit:"分",number:0}
      ]
    };
  },
}
</script>
<style scoped>
  .userInfo ul{
    list-style: none;
    display: flex;
  }
  li{
    border-right: 1px solid #eee;
    width: calc(100% / 3);
    height: 45px;
    text-align: center;
    padding: 20px 0px;
  }
  .number{
    display: inline-block;
    margin-right: 6%;
    font-weight: bold;
    color: #ff5f3e;
    font-size: 23px;
  }
  .name,.unit{
    font-size: 14px;
  }
  .space{
    width: 100%;
    height: 10px;
    background-color: #eee;
  }
</style>