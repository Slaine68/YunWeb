<template>
  <div class="height-full cardImg">
    <!-- <img :src="require('@/assets'+src)" :alt="name"/> -->
    <img class="height-full" :src="src" :alt="name" />
    <div class="cardImgName"><span>{{name}}</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  },
  methods: {}
};
</script>

<style scoped lang="less">
.cardImg {
  overflow: hidden;
  padding: 1px;
  img {
    display: block;
  }
}
.cardImgName {
  position: relative;
  line-height: 1.2rem;
  box-sizing: content-box;
  .white-bottom-font;
  bottom: 1.2rem;
  width: 100%;
  text-align: center;
  opacity: 0.7;
  .transition(all 0.5s ease);
  &:hover {
    opacity: 1;
    line-height: 100px;
    bottom: 100%;
    span{
      opacity: 0;
    }
  }
}
</style>