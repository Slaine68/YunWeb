<template>
<div>
  <!-- <Mode
    v-if="mode.modeShow"
    @choose="changeVal"
    @close="closeMode"
    :operators="mode.modeOpers"
    :type="mode.modeType"
  />-->
  <Model v-if="mode.modeShow" @close="closeMode" @submit="changeVal" heights="60em" widths="50em">
    <template v-slot:header>请填写游戏名</template>
    <ImgShower :data="res.img" :type="'img'"></ImgShower>
  </Model>
  <header>
    <div>
      <div v-if="gameChaps.length==0">您还没有章节，请新增章节</div>
      <CommonButton v-show="!newCha.state" @click.native="newCha.state=true">新增</CommonButton>
      <CommonButton v-show="newCha.state" @click.native="newCha.state=false">取消</CommonButton>
      <div v-if="newCha.state">
        <input type="text" v-model="newCha.name" />
        <CommonButton @click.native="addCha()">确认</CommonButton>
      </div>
    </div>
    <div class="chapters">
      <ul>
        <h3
          v-for="chap in gameChaps"
          :key="chap.file_path"
          @click="getFile(chap.file_path)"
        >{{chap.file_name}}</h3>
      </ul>
    </div>
  </header>
  <body v-if="gameChaps.length>0">
    <div id="tools" style="padding-bottom:10px">
      <span @click="openMode();modeType=$const.ResourseType.PICTRUE">
        <p>
          图
          <br />片
        </p>
        <i class="iconfont icon-beauty"></i>
      </span>
      <span @click="openMode();modeType=$const.ResourseType.MUSIC">
        <p>
          音
          <br />乐
        </p>
        <i class="iconfont icon-visible"></i>
      </span>
    </div>
    <textarea spellcheck="false" v-model="txt.content"></textarea>
    <CommonButton v-show="txt.state" @click.native="saveFile">保存</CommonButton>
  </body>
</div>
</template>

<script>
export default {
  data() {
    return {
      //游戏章节
      gameChaps: [],
      //文本
      txt: {
        state: false,
        //文本内容
        content: "",
        //文本路径
        path: ""
      },
      //游戏名
      gameCode: this.$route.params.code,
      //模态框
      mode: {
        modeType: this.$const.ResourseType.PICTRUE,
        modeOpers: [
          this.$const.ResourseOperator.LOOK,
          this.$const.ResourseOperator.CHOOSE,
          this.$const.ResourseOperator.DELETE
        ],
        modeShow: false
      },
      //新章节控制
      newCha: {
        name: "",
        state: false
      },
      //资源对象
      res: {
        img: []
      }
    };
  },
  methods: {
    changeVal(val) {
      this.closeMode();
      this.txt.content += val;
    },
    closeMode() {
      this.mode.modeShow = false;
    },
    openMode() {
      this.mode.modeShow = true;
    },
    addCha() {
      this.$axios
        .post(this.$const.path + "addFile.php", {
          code: this.gameCode,
          txtName: this.newCha.name
        })
        .then(function(res) {
          if (res.data.status) {
            //刷新列表
          }
        });
    },
    showScriptList() {
      this.$axios
        .post(this.$const.path + "findFileList.php", {
          code: this.gameCode,
          type: "script"
        })
        .then(res => {
          if (res.data.status) {
            //刷新列表
            this.gameChaps = res.data.result;
          }
        });
    },
    getFile(path) {
      this.txt.path = path;
      this.$axios
        .get(this.$const.path + path + "?rad=" + Math.random())
        .then(res => {
          this.txt.content = res.data;
          this.txt.state = true;
        });
    },
    saveFile() {
      this.$axios
        .post(this.$const.path + "saveFile.php", {
          path: this.txt.path,
          content: this.txt.content
        })
        .catch(function() {
          alert("存档失败");
        });
    }
  },
  mounted() {
    //展示
    this.showScriptList();
    //获取资源对象
    this.$axios
      .post(this.$const.path + "findFileList.php", {
        code: this.gameCode,
        type: "img"
      })
      .then(res => {
        if (res.data.status) {
          //刷新列表
          this.$set(this.res, "img", res.data.result);
        }
      });
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
  font-family: "微软雅黑";
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  flex: 1;
  line-height: 1.5rem;
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
body {
  display: flex;
  flex-direction: column;
}
</style>