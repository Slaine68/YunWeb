<template>
  <div class="main-block">
    <Mode
      v-if="modeShow"
      @choose="changeVal"
      @close="closeMode"
      :operators="modeOpers"
      :type="modeType"
    />
    <div class="center-body">
      <div id="tools" style="padding-bottom:10px">
        <span @click="openMode();modeType=that.$const.ResourseType.PICTRUE">
          <p>
            图
            <br />片
          </p>
          <i class="iconfont icon-beauty"></i>
        </span>
        <span @click="openMode();modeType=that.$const.ResourseType.MUSIC">
          <p>
            音
            <br />乐
          </p>
          <i class="iconfont icon-visible"></i>
        </span>
      </div>
      <textarea rows="30" spellcheck="false" v-model="content"></textarea>
    </div>
  </div>
</template>

<script>
import Mode from "../components/Mode.vue";
export default {
  data() {
    return {
      content: "",
      modeShow: false,
      modeType: this.$const.ResourseType.PICTRUE,
      modeOpers: [
        this.$const.ResourseOperator.LOOK,
        this.$const.ResourseOperator.CHOOSE,
        this.$const.ResourseOperator.DELETE
      ],
      that: this
    };
  },
  components: {
    Mode
  },
  methods: {
    changeVal(val) {
      this.closeMode();
      this.content += val;
    },
    closeMode() {
      this.modeShow = false;
    },
    openMode() {
      this.modeShow = true;
    }
  }
};
</script>
<style scoped lang="less">
textarea {
  box-shadow: 0px 0px -5px @gray-line;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid @gray-line;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  padding: 15px;
  line-height: 1.5em;
}
#tools {
  display: flex;
  flex-direction: row;
}
#tools span {
  box-sizing: border-box;
  width: 1.5em;
  margin-right: 1em;
  display: flex;
  flex-direction: row;
  text-align: center;
  overflow: hidden;
}
#tools i {
  position: relative;
  left: -0.4em;
  font-size: 1.6em;
  transition: font-size 0.3s ease;
  transition: left 0.3s ease-in;
}
#tools p {
  font-size: 0.6em;
  opacity: 0;
  transition: opacity 0.3s ease-in;
}
#tools span:hover p {
  opacity: 1;
}
#tools span:hover i {
  left: 0em;
}
#tools span:hover {
  // color: @theme;
  // border-bottom: @theme 1px solid;
  // border-top: @theme 1px solid;
}
.main-block {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.center-body {
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
}
</style>