<template>
  <div class="full-body-content">
    <h1>我的收藏</h1>
    <ul>
      <li v-for="game in games" :key="game.id">
        {{game.name}},{{game.author}}
        <span @click="gotoPlay(game.code,game.author_code)">>play</span>
      </li>
    </ul>
    <h1>我的游戏</h1>
    <ul>
      <li v-for="game in games" :key="game.id">
        {{game.name}},{{game.author}}
        <span @click="gotoPlay(game.code,game.author_code)">>play</span>
        <span @click="gotoEdit(game.code)">>edit</span>
      </li>
    </ul>
    <div @click="modeShow = true">+新增</div>
    <h1>可能感兴趣</h1>
    <ul>
      <li v-for="game in games" :key="game.id">
        {{game.name}},{{game.author}}
        <span @click="gotoPlay(game.code,game.author_code)">>play</span>
      </li>
    </ul>
    <Model
      v-if="modeShow"
      @close="modeShow = false"
      @submit="$router.push(`/edit`);"
      heights="20em"
      widths="20em"
    >
      <template v-slot:header>请填写游戏名</template>
      <input type="text" v-model="newGameVal" />
      <template v-slot:footer>
        <button @click="gotoNew">提交</button>
      </template>
    </Model>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dats: "aa",
      games: [],
      modeShow: false,
      newGameVal:'sss'
    };
  },
  methods: {
    gotoPlay(code, authorCode) {
      this.$router.push(`/play/${authorCode}/${code}`);
    },
    gotoNew() {
      this.$router.push({path:`/edit/${this.newGameVal}/main`});
    },
    gotoEdit(gameCode){
      this.$router.push({path:`/edit/${gameCode}/main`});
    }
  },
  mounted() {
    let that = this;
    //查找我喜欢的游戏

    //查找我创作的游戏
    this.$axios
      .post(this.$const.path + "findUserCreatedGames.php")
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

<style lang="less" scoped>
</style>