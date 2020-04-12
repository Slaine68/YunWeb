<template>
  <div>
    <ul>
      <li v-for="game in games" :key="game.id">
        {{game.name}},{{game.author}}
        <span @click="gotoPlay(game.code,game.author_code)">>play</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dats: "aa",
      games: []
    };
  },
  methods:{
    gotoPlay(code,authorCode){
      this.$router.push(`/play/${authorCode}/${code}`);
    }
  }
  ,
  mounted() {
    let that = this;
    //查找我喜欢的游戏

    //查找我创作的游戏
    this.$axios
      .post(this.$const.path + "findUserCreatedGames.php", { code: "yunming" })
      .then(function(res) {
        that.dats = res.data;
        if (res.data.status) {
          that.games = res.data.result;
        }
        // that.state = res.data.status;
        // that.res = res.data.tip;

        //触发跳转
        //如果已登陆，转跳到个人界面
        //进入主界面，所有内容列表。
        //创建、编辑游戏可以在“我的”里查看。
      });
  }
};
</script>

<style>
</style>