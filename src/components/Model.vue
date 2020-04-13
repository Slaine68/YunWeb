<template>
  <!-- 模态框，可以有个返回值 -->
  <div id="mainMode">
    <div id="mask" @click="$emit('close')"></div>
    <div id="block" :style="{maxHeight:heights,maxWidth:widths}" class="header-body-footer">
      <header>
        <slot name="header"></slot>
      </header>
      <div class="body flex-row-wrap">
        <slot></slot>
      </div>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    heights: {
      type: String,
      required: true
    },
    widths: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteItem(val) {
      console.log(`delete+${val}`);
    }
  }
};
</script>

<style scoped lang="less">
#mainMode {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
#mask {
  position: absolute;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  width: 100%;
  height: 100%;
}
#block {
  background: white;
  width: 90%;
  max-width: 70rem;
  height: 60%;
  z-index: 10;
  max-height: 40rem;
  border-radius: 2px;
  box-sizing: content-box;
  box-shadow: @shadow;
  display: flex;
  flex-direction: column;
}
.iconSpan {
  float: right;
  margin-right: 10px;
}
.iconSpan:hover {
  color: @gray1;
}
ul {
  width: 90%;
  margin: auto;
  position: relative;
  top: 20px;
  overflow-y: scroll;
}
ul li {
  padding: 10px;
}
ul li:hover {
  background: @black-mask1;
}
</style>