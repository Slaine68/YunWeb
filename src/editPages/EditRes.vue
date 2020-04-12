<template>
  <div>
    <div v-if="resList.length==0">您还没有资源，请新增</div>
    <input type="file" multiple="multiplt" @change="addRes($event)" />
    <ImgShower :data="resList" :type="'img'"></ImgShower>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //资源类型
      type: "img",
      //游戏名
      gameCode: this.$route.params.code,
      //资源列表
      resList: [],
      //待上传列表（input）
      waitingFiles: []
    };
  },
  methods: {
    showResList() {
      this.$axios
        .post(this.$const.path + "findFileList.php", {
          code: this.gameCode,
          type: this.type
        })
        .then((res)=> {
          if (res.data.status) {
            //刷新列表
            //this.resList = res.data.result;
            this.$set(this,'resList',res.data.result);
          }
        });
    },
    addRes(event) {
      let files = event.target.files;
      let data = new FormData();
      data.append("type", this.type);
      data.append("type_id", this.gameCode);
      for (let file of files) {
        data.append("files[]", file);
      }
      this.$axios
        .post(this.$const.path + "addRes.php", data, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          if(res.data.true)
          this.showResList();
        });
    }
  },
  mounted() {
    this.showResList();
  }
};
</script>

<style>
</style>