<template>
  <div id="body-page" class="full-body-content">
    <nav :class="navState?'nav-open':'nav-close'">
      <router-link to="/edit/">
        <span>编 辑</span>
        <li>
          <i class="iconfont icon-edit"></i>
        </li>
      </router-link>
      <router-link to="/edit/config">
        <span>配 置</span>
        <li>
          <i class="iconfont icon-setting"></i>
        </li>
      </router-link>
      <router-link to="/edit/resource">
        <span>资 源</span>
        <li>
          <i class="iconfont icon-collect"></i>
        </li>
      </router-link>

      <button id="change-size" v-if="canChange" @click="changeBarSize">
        <span v-if="!navState" key="open">
          <i class="iconfont icon-arrow_right"></i>
        </span>
        <span v-if="navState" key="close">
          <i class="iconfont icon-arrow_back"></i>
        </span>
      </button>
    </nav>
    <div id="body-flex">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      navState: true,
      width: document.documentElement.clientWidth,
      canChange: true
    };
  },
  mounted() {
    let wid = document.documentElement.clientWidth;
    if (wid < this.$myConst.NAV_MIN_WIDTH || wid > this.$myConst.NAV_MAX_WIDTH) {
      this.canChange = false;
    }
    const that = this;
    window.addEventListener("resize", function() {
      that.width = document.documentElement.clientWidth;
    });
  },
  watch: {
    width(news) {
      if ((news < this.$myConst.NAV_MIN_WIDTH || news > this.$myConst.NAV_MAX_WIDTH) && this.canChange) {
        this.canChange = false;
      } else if (news > this.$myConst.NAV_MIN_WIDTH && news < this.$myConst.NAV_MAX_WIDTH && !this.canChange) {
        this.canChange = true;
      }
    },
    canChange(newC) {
      if (!newC && this.width > this.$myConst.NAV_MAX_WIDTH) {
        this.navState = true;
      } else if (!newC && this.width < this.$myConst.NAV_MIN_WIDTH) {
        this.navState = false;
      }
    }
  },
  methods: {
    changeBarSize: function() {
      if (this.width > this.$myConst.NAV_MIN_WIDTH) {
        this.navState = !this.navState;
      }
    }
  }
};
</script>

<style scoped lang="less">
a.router-link-exact-active,a:hover{
  color: @theme;
}
#body-page {
  display: flex;
}
.nav-open {
  width: 20%;
  max-width: 300px;
}
.nav-close {
  width: 60px;
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
  border-right: solid 1px @gray-line;
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

#change-size span {
  position: relative;
  top: 0px;
}
#change-size span i {
  font-size: 1em;
}
/* 动画 */
</style>