<template>
  <div id="gameBack">
    <div id="gameBody" :style="{width:width+'px',height:height+'px'}">aaa</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      heigh: 0
    };
  },
  mounted() {
    const that = this;
    //初始化
    this.$axios.post()
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
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

#gameBody {
  // 高宽响应
  background: white;
}
</style>