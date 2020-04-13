<template>
  <div>
      <img :src="require('@/assets'+src)" :alt="name"/>
      <span>{{name}}</span>
  </div>
</template>

<script>


export default {
  data(){
    return{

    }
  },
  props:{
    name:{
      type:String,
      required:true
    },
    src:{
      type:String,
      required:true
    }
  },
  methods:{

  }
}
</script>

<style scoped lang="less">

</style>