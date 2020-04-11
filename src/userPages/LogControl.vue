<template>
  <div id="outBody">
    <div id="middleBlock">
      <component :is="current"></component>
      <div>
        <a @click="current='Signin'" :class="current=='Signin'?'active':''">注册</a>
        <a @click="current='Login'" :class="current=='Login'?'active':''">登陆</a>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login.vue";
import Signin from "./SignIn.vue";
export default {
  data() {
    return {
      current: "Login"
    };
  },
  components: {
    Login,
    Signin
  }
};
</script>

<style scoped lang="less">
#outBody {
  background: @theme-back;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#middleBlock {
  height: auto;
  background: white; //@gray4;
  box-shadow: @shadow;
  border-radius: 2px;
  width: 90%;
  max-width: 30rem;
  height: 70%;
  max-height: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#middleBlock a {
    color: @gray1;
    padding: 0.7rem;
    margin:0.2rem;
  cursor: pointer;
}
#middleBlock a.active,#middleBlock a:hover{
    color: @gray0;
    border-bottom:2px solid @theme;
}
</style>

<style lang="less">
.middleContent {
  height: 70%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.middleContent input {
  display: inline-block;
  width: 100%;
  max-width: 100%;
  padding: 0.8rem 0rem;
}
.loginButton,
.loginButton:focus {
  width: 100%;
  padding: 0.8rem;
  margin-top: 2rem;
  background: @theme-btn;
  color: @theme-btn-font;
  box-shadow: @shadow-btn;
}
.loginButton:hover {
  background: @theme-btn-click;
}
</style>