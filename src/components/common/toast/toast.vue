<template>
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
</template>

<script>
export default {
  name:"toast",
  components: {},
  data() {
    return {
      message:"",
      isShow:false
    };
  },
  methods: {
    show(message,duration=2000){
      console.log("ok");
      
      this.message=message;
      this.isShow=true;
      setTimeout(() => {
        this.message="";
        this.isShow=false;
      }, duration);
    }
  }
}
</script>
<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 5px 7px;
    transform: translate(-50%, -50%);
    border: 1px solid red;
    z-index: 999;
  }
</style>