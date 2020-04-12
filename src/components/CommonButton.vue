<template>
  <div>
    <button>
      <slot>some</slot>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
button {
  background: @gray4;
  padding: 1em 2em;
  border-radius: 2px;
}
</style>