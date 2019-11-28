<template>
    <div class="checkButton" :class="{check:isChecked}">
      <img src="../../../assets/img/cart/tick.svg">
    </div>
</template>

<script>
export default {
  name:"checkButton",
  components: {},
  props: {
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {

    };
  },
}
</script>
<style scoped>
  .checkButton{
    background-color: #c9d4d4;
    border-radius: 50%;
    border: 3px solid #c9d4d4;
  }
  .check{
    background-color: red;
    border: 3px solid red;
  }
</style>