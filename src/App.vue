<template>
<div class="contextBody">
    <div class="charactorsDiv">
    <Charactor v-for="enemy in enemys" :key="enemy.id" :item="enemy"/>
  </div>
  <div class="charactorsDiv">
    <Charactor v-for="chara in charas" :key="chara.id" :item="chara"/>
  </div>
    <div class="OperatorDiv">
        <button @click="show=!show">技能</button>
        <transition  name="fade">
            <Operator v-if="show">
                <template #head="name">{{name.cha}}</template>
                <template #item="{item}">
    {{item.name}}，<span v-if="item.cost>10">高</span><span v-if="item.cost<=10">低</span>
                </template>
            </Operator>
        </transition >
    </div>
</div>
</template>

<script>
import Charactor from './components/Charactor.vue'
import Operator from './components/Operator.vue'
    
export default {
  name: 'App',
    data:function(){
        return {
            charas:[
            {id:1,name:"青寒",hp:1200},
            {id:2,name:"金寒",hp:1000},
            {id:3,name:"星展",hp:1050},
            ],
            enemys:[
            {id:1,name:"冬月",hp:12000},
            {id:2,name:"夏月",hp:10050},
            {id:3,name:"黑阳",hp:10050},
            ],
            show:false
        }
    },
  components: {
    Charactor,Operator
  }
}
</script>

<style>
html,body{
    height: 100%;
    width: 100%;
}
*{
    padding: 0px;
    margin: 0px;
}
.contextBody {
  display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60%
}
.charactorsDiv{
    display: flex;
    flex-flow:row nowrap;
    justify-content: center;
}
.OperatorDiv button{
    display: flex;
    flex-flow:row nowrap;
}
.fade-enter-active,.fade-leave-active{
    transition:all .5s ease;
}
.fade-enter, .fade-leave-to{
    transform: translateX(10px);
    opacity: 0
}
</style>
