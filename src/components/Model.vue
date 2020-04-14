<template>
  <!-- 模态框，可以有个返回值 -->
  <div id="mainMode">
    <div id="mask" @click="$emit('close')"></div>
    <div id="block" :style="{maxHeight:heights,maxWidth:widths}" class="header-body-footer padding2">
      <header>
        <slot name="header"></slot>
      </header>
      <div class="body flex-row-wrap padding-top2">
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
  .absolute;
  .full-screen;
  .flex-row-center;
}
#mask {
  .absolute;
  .full-screen;
  background: rgba(0, 0, 0, 0.5);
}
#block {
  background: white;
  border-radius: 2px;
  .float-center-block;
  .shadow-btn;
  .flex-col;
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
.header-body-footer{
  header{
    .bottom-gray-line;
    font-size: 1.1rem;
    line-height: 3rem;
  }
  footer{
    .top-gray-line;
  }
}
</style>