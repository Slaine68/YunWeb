<template>
  <div id="app">
    <header class="bar-block">
      <router-link to="/battle">battle</router-link>
      <router-link to="/main">main</router-link>
      <router-link to="/edit">edit</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
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