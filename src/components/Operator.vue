<template>
<div class="skillBlock">
    <slot name="head" :cha="cha"></slot>
    <ul>
        <li v-for="item in list" :key="item.id">
            <slot name="item" :item="item">{{item.name}}</slot>
        </li>
    </ul>
</div>
</template>

<script>
    export default{
        name:"Operator",
        data:function(){
            return {
                list:[{id:1,name:"风",cost:10},
                      {id:2,name:"水",cost:20},
                     {id:3,name:"火",cost:15}],
                cha:"特技"
            }
        }
    }
</script>

<style scoped>
.skillBlock{
    margin: 20px;
    display: inline-block;
    width: 200px;
    background-color: aliceblue;
    border-radius: 7px;
}
</style>