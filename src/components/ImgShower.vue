<template>
    <ul class="resShower">
      <li v-for="res in data" :key="res.file_path">
        <img :src="$const.path+res.small_path" alt />
        <span>{{res.file_name}}</span>
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      imgs: this.data
    }
  },
  props: {
    data: {
      type: Array,
      required: false
    },
    type:{
      type:String,
      required:true
    }
  }
};
</script>

<style scoped>
.resShower{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.resShower li{
    display: flex;
    flex-direction: column;
}
</style>