<template>
    <div class="cartBar">
      <div class="checkContent">
        <check-button
         class="checButton"
         :is-checked="isSelectAll"
         @click.native="checkClick"></check-button>
        <span>全选</span>
      </div>
      <div class="totalPrice">
        ￥{{totalPrice}}
      </div>
      <div class="caculate" @click="caculate">
        去计算(&nbsp;{{checkLength}}&nbsp;)
      </div>
    </div>
</template>

<script>
import checkButton from "../../../components/content/checkButton/checkButton"
import { mapGetters } from 'vuex';
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
    ...mapGetters(["cartList"]),
    totalPrice(){
      return this.cartList.filter(item=>{
        return item.checked;
      }).reduce((preValue,item)=>{
        return preValue+item.price*item.count
      },0).toFixed(2);
    },
    checkLength(){
      return this.cartList.filter(item=>{
        return item.checked;
      }).length;
    },
    isSelectAll(){
      if(this.cartList.length===0) return false;
      //return !(this.cartList.filter(item=>!item.checked).length);====>方案一
      return !this.cartList.find(item=>!item.checked);//方案二====>性能高
    }
  },
  methods: {
    checkClick(){
      if (this.isSelectAll) {
        this.cartList.forEach(item=>item.checked=false);
      }else{
        this.cartList.forEach(item=>item.checked=true);
      }
    },
    caculate(){
      if(!this.isSelectAll){
        console.log("ok");
        
        this.$toast.show("请选择商品");
      }
    }
  }
}
</script>
<style scoped>
  .cartBar{
    height: 40px;
    background-color: #e8e8e8;
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
    background-color: #ff0000;
  }
</style>