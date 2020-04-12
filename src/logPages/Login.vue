<template>
  <div class="middleContent">
    <input class="code" spellcheck="false" placeholder="请输入登陆账号" type="text" v-model="user.code" />
    <input
      class="psw"
      spellcheck="false"
      placeholder="请输入密码"
      type="password"
      v-model="user.password"
    />
    <button class="loginButton" @click="login">登 陆</button>
    <div>{{res}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        code: "",
        password: ""
      },
      state: false,
      res: ""
    };
  },
  methods: {
    login() {
      let that = this;
      if (this.vary()) {
        this.$axios
          .post(this.$const.path + "login.php", this.user)
          .then(function(res) {
            that.state = res.data.status;
            that.res = res.data.tip;
            //触发跳转
            //如果已登陆，转跳到个人界面
            //进入主界面，所有内容列表。
            //创建、编辑游戏可以在“我的”里查看。
          });
      }
    },
    vary() {
      //校验
      let flag = true;
      if (this.user.code == "") {
        flag = false;
      }
      if (this.user.name == "") {
        flag = false;
      }
      return flag;
    }
  },
  created() {
    let that = this;
    this.$axios
      .post(this.$const.path + "sure.php", this.user)
      .then(function(res) {
        that.state = res.data.status;
        that.res = res.data.tip;
        //如果已登陆，转跳到个人界面
        // if (that.state) {
        //   console.log("转跳！");
        //   that.$router.push("main");
        // }
      });
  },
  watch:{
    state(news){
      if(news){
        this.$router.push("main");
      }
    }
  }
};
</script>

<style scoped lang="less">
.shocking {
  border: 1px solid @theme-btn-click;
}
</style>