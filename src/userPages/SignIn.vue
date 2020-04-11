<template>
  <div class="middleContent">
    <input spellcheck ="false" placeholder="请输入登陆账号" type="text" v-model="user.code" />
    <input spellcheck ="false" placeholder="请输入昵称" type="text" v-model="user.name" />
    <input spellcheck ="false" placeholder="请输入密码" type="password" v-model="user.password" />
    <button class="loginButton" @click="signin">注 册</button>
    <div v-html="result"></div>
    <div v-if="codeVilad" class="alert">空间名重复！！</div>
    <div v-if="nameVilad" class="alert">昵称重复！！</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        code: "",
        name: "",
        password: ""
      },
      result: "",
      codeVilad: false,
      nameVilad: false
    };
  },
  methods: {
    signin() {
      console.log("发送");
      let that = this;
      this.$axios
        .post(this.$const.path + "signin.php", this.user)
        .then(function(res) {
          that.result = res.data;
        });
    },
    checkCode() {
      let that = this;
      this.$axios
        .post(this.$const.path + "checkcode.php", this.user)
        .then(function(res) {
          that.codeVilad = res.data.codeStatus;
          that.nameVilad = res.data.nameStatus;
        });
    }
  },
  watch:{
      'user.code':{
          handler(){
              this.checkCode();
          },
          immediate:true
      },
      'user.name':{
          handler(){
              this.checkCode();
          },
          immediate:true
      }
  }
};
</script>

<style scoped>

</style>