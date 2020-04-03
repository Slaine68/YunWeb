<template>
  <div id="body-page" class="full-body-content">
    <nav :class="navState?'nav-open':'nav-close'">
      <router-link to="/edit/">
        <span>edit</span>
        <li>E</li>
      </router-link>
      <router-link to="/edit/config">
        <span>config</span>
        <li>C</li>
      </router-link>
      <router-link to="/edit/resource">
        <span>resource</span>
        <li>R</li>
      </router-link>
      <button id="change-size" @click="changeBarSize">
        <transition name="width-change">
          <span v-if="!navState" key="open">关</span>
          <span v-else key="close">开</span>
        </transition>
      </button>
    </nav>
    <div id="body-flex">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      navState: true
    };
  },
  methods: {
    changeBarSize: function() {
      this.navState = !this.navState;
    }
  }
};
</script>

<style scoped>
a.router-link-exact-active,
a:hover {
  color: crimson;
}

#body-page {
  display: flex;
}
.nav-open {
  width: 300px;
}
.nav-close {
  width: 70px;
}
.nav-close a span {
  display: none;
}
.nav-open a li {
  display: none;
}
nav {
  box-sizing: border-box;
  height: 100%;
  border-right: solid 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: width 0.3s ease;
}
#change-size,
nav a {
  padding: 20px;
}
#body-flex {
  flex: 1;
}
#change-size span{
	position: relative;
	left: 0;
}
/* 动画 */
.width-change-enter-active,
.width-change-leave-active {
  transition: all 0.8s;
}
.width-change-enter,.width-change-leave-to {
  opacity: 0;
  color: red;
}
</style>