<template>
	<div class="profile">
    <nav-bar class="nav">
      <div slot="center">熊猫商城</div>
    </nav-bar>
    <sign-in></sign-in>
    <user-info></user-info>
    <more-info></more-info>
  </div>
</template>

<script>
  import navBar from "../../components/common/navbar/NavBar";
  import signIn from "./childComps/signIn";
  import userInfo from "./childComps/userInfo";
  import moreInfo from "./childComps/moreInfo";
	export default{
		name:"profile",
    components:{
      navBar,
      signIn,
      userInfo,
      moreInfo
    }
	}
</script>

<style scoped>
/* @import url("../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css"); */
.nav{
  background-color: #ff8083;
  color: #fff;
  font-weight: bold;
}
</style>>
</style>
