<template>
  <div class="main-block">
      <div class="center-body">
        <div id="tools" style="padding-bottom:10px">
          <i class="iconfont icon-beauty"></i>
          <i class="iconfont icon-visible"></i>
        </div>
        <textarea rows="30"></textarea>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped lang="less">
#tools i{
  font-size: 1.6em;
}
#tools i:hover,#tools i:checked{
  color: @theme;
  border-bottom: @theme 1px solid;
}
.main-block{
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.center-body{
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
}

</style>