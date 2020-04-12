<template>
  <div id="app">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1734100_w6n6iao6d9o.css" />
    <header class="bar-block">
      <router-link to="/home">首 页</router-link>
      <router-link to="/mine">我 的</router-link>
      <span @click="exit">退出</span>
    </header>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  methods:{
    exit(){
      let that = this;
          this.$axios
      .get(this.$const.path + "exit.php")
      .then(function(res) {
        if (res.data.status) {
          that.$router.push(`/login`);
        }
      });
    }
  }
};
</script>

<style lang="less">

html,
body {
  height: 100%;
  width: 100%;
}
* {
  padding: 0px;
  margin: 0px;
}
li {
  list-style: none;
}
a,
a:link {
  text-decoration: none;
  color: black;
}
.full-body-content {
  flex: 1;
}
button,
button:focus {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
input,
button,
select,
textarea {
  outline: none;
}
input{
  border: none;
  border-bottom: 1px solid @gray2;
}
textarea {
  resize: none;
}
</style>
<style scoped lang="less">
a,
a:link {
  background: @white-mask7;
}
a.router-link-active,
a:hover {
  background: @gray2;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background: @gray4;
}
header.bar-block a {
  padding: 20px;
  display: inline-block;
}
</style>