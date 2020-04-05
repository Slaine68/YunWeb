<template>
  <div id="app">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1734100_w6n6iao6d9o.css" />
    <header class="bar-block">
      <router-link to="/battle">battle</router-link>
      <router-link to="/main">main</router-link>
      <router-link to="/edit">edit</router-link>
    </header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
export default {};
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
textarea {
  resize: none;
}
</style>
<style scoped>
a,
a:link {
  background: rgba(255, 255, 255, 0.7);
}
a.router-link-active,
a:hover {
  background: rgba(0, 0, 0, 0.05);
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
  background: #f9f9f9;
}
header.bar-block a {
  padding: 20px;
  display: inline-block;
}
</style>