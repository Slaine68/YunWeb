<template>
  <div id="gameBack">
    <div id="gameBody" :style="{width:width+'px',height:height+'px'}">
      <span v-html="gameConfig"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      heigh: 0,
      gameConfig: ""
    };
  },
  mounted() {
    const that = this;
    //初始化
    //游戏本身配置：图片、音乐
    this.$axios
      .post(`${this.$const.path}/findGame.php`, {
        code: this.$route.params.code
      })
      .then(function(res) {
        if (res.data.status) {
          that.gameConfig = res.data.result;
        }
      });
    //用户个性设置：第几关卡、图片、音乐、音乐开关、战斗开关

    //用户存档读取
    this.$axios
      .post(`${this.$const.path}/findUserSaves.php`, {
        code: this.$route.params.code
      })
      .then(function(res) {
        if (res.data.status) {
          that.gameConfig = res.data.result;
        }
      });
    //绑监听函数
    that.changeWH(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
      1.77
    );
    window.addEventListener("resize", function() {
      that.changeWH(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
        1.77
      );
    });
  },
  methods: {
    changeWH(w, h, b) {
      if (w / h > b) {
        this.height = h;
        this.width = h * b;
      } else {
        this.width = w;
        this.height = w / b;
      }
    }
  }
};
</script>

<style scoped lang="less">
#gameBack {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

#gameBody {
  // 高宽响应
  background: white;
  box-shadow: @shadow;
}
</style>