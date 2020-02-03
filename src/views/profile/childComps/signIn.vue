<template>
    <div class="userInfo">
      <div class="user">
        <i class="fa fa-user-circle fa-4x"></i>
      </div>
      <div class="signIn">
        <p>
          <span>登录/注册</span>
        </p>
        <p>
          <i class="fa fa-mobile fa-lg"></i>
          <span>暂未绑定手机号</span>
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name:"signIn",
  components: {},
  data() {
    return {

    };
  },
}
</script>
<style scoped>
 .userInfo{
   height: 64px;
   width: 90%;
   padding: 13px 5%;
   background-color: #ff8083;
   color: #fff;
   display: flex;
 }
 .user{
   flex-grow: 1;
   margin-right: 4%;
 }
 .userInfo .signIn{
   flex-grow: 70;
   color: #fff;
   float: left;
 }
 .signIn p{
   margin-top: 3%;
 }
 .signIn p:nth-child(2) i{
   display: inline-block;
   margin-right: 1%;
 }
</style>