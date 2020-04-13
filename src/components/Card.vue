<template>
  <div class="card flex-row shadow">
    <!-- 传入对象、操作 -->
    <div class="card-item">
      <slot>Shwo item here</slot>
    </div>
    <div class="card-operator">
      <span class="iconSpan">
        <i class="iconfont icon-delete" @click="deleteItem(id)"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    operator: {
      type: Array,
      required: false
    }
  },
  methods: {}
};
</script>

<style scoped lang="less">
.card {
  width: 200px;
  height: 100px;
}

</style>