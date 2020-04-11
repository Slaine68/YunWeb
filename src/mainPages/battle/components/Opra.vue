<template>
<div>
    <li :key="data" v-for="data in datas">{{data}}</li>
</div>
</template>
<script>
export default{
    name:"Opra",
    props:{
        datas:Array
    },
    data:function(){
        return{
            
        }
    }
}
</script>
<style></style>