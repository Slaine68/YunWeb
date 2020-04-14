<template>
  <div class="card flex-row shadow">
    <!-- 传入对象、操作 -->
    <div class="card-item height-full">
      <CardImg
        v-if="item.type=='img'"
        :name="item.name.split('.')[0]"
        :src="$const.path+item.small_path"
      ></CardImg>
      <CardImg
        v-else-if="item.type=='music'"
        :name="item.name.split('.')[0]"
        :src="$const.path+item.small_path"
      ></CardImg>
    </div>
    <div class="card-operator flex-col-center">
      <!-- 删除 -->
      <span class="iconSpan" v-if="operators.indexOf($const.ResourseOperator.DELETE)>-1">
        <i class="iconfont icon-delete" @click="deleteItem()"></i>
      </span>
      <!-- 选择 -->
      <span class="iconSpan" v-if="operators.indexOf($const.ResourseOperator.CHOOSE)>-1">
        <i class="iconfont icon-chose" @click="$emit('choose',item.name)"></i>
      </span>
      <!-- 播放/暂停 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    operators: {
      type: Array,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteItem() {
      this.$axios
        .post(this.$const.path + "deleteItem.php", {
          id: this.item.id
        })
        .then(res => {
          if (res.data.status) {
            this.$emit("deleted");
          }
        });
    }
  }
};
</script>

<style scoped lang="less">
.card {
  height: 100px;
}
</style>