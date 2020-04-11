<template>
  <div class="chaBlock" @click="subHp">
      <span>{{item.name}}</span>
    <Hp :value="hp" :max_value="maxHp"/>
  </div>
</template>

<script>
import Hp from './Hp.vue'

export default {
  name: 'Charactor',
    data:function(){
        return {
            hp:this.item.hp,
            maxHp:this.item.hp
        }
    },
    props:["item"],
  components: {
    Hp
  },
    methods:{
        subHp:function(){
            this.hp-=100;
        }
    }
    
}
</script>

<style scoped>
.chaBlock {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    
    display: flex;
    flex-flow:row nowrap;
    margin: 20px;
}
</style>
