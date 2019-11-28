<template>
    <div class="cartBar">
      <div class="checkContent">
        <check-button class="checButton"></check-button>
        <span>全选</span>
      </div>
      <div class="totalPrice">
        ￥{{totalPrice}}
      </div>
      <div class="caculate">
        去计算(&nbsp;{{checkLength}}&nbsp;)
      </div>
    </div>
</template>

<script>
import checkButton from "../../../components/content/checkButton/checkButton"
export default {
  name:"cartBar",
  components: {
    checkButton
  },
  data() {
    return {

    };
  },
  computed: {
    totalPrice(){
      return this.$store.state.cartList.filter(item=>{
        return item.checked;
      }).reduce((preValue,item)=>{
        return item.price*item.count
      },0)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item=>{
        return item.checked;
      }).length;
    }
  }
}
</script>
<style scoped>
  .cartBar{
    height: 40px;
    background-color: #ff0000;
    position: absolute;
    bottom: 53px;
    left: 0;
    right: 0;
    line-height: 40px;
    display: flex;
  }
  .checkContent{
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 90px;
  }
  .checButton{
    width: 20px;
    height: 20px;
    line-height: 25px;
    margin-right: 10px;
  }
  .totalPrice{
    margin-right: 10px;
    flex: 1;
  }
  .caculate{
    width: 90px;
    color: #ffffff;
    text-align: center;
  }
</style>