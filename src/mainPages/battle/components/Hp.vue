<template>
<div>
    <span :style="hpCss">{{value}}/{{max_value}}</span>
</div>
</template>

<script>
export default {
  name: 'Hp',
  data:function(){
      return {
          //nowValue:value
      }
  },
  computed:{
    leftHpStr:function(){
        return "padding-right:"+((this.max_value-this.value)/this.max_value*100)+"%;";
    },
      hpColor:function(){
          let color={100:"darkturquoise",50:"coral",20:"red"};
          for(let index in color){
              if(this.value/this.max_value<index/100){
                  return "background-color:"+color[index];
              }
          }
          return "";
      },
      hpCss:function(){
          return this.leftHpStr+this.hpColor;
      }
  },
  props: {
    value: Number,
    max_value:Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
        display: inline-block;
        width: 100px;
        line-height: 30px;
    }
    span{
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color:darkturquoise;
        background-clip:content-box;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px rgba(0,0,0,0.5) solid;
        transition: padding 0.5s,background 0.5s;
        -moz-transition: padding 0.5s,background 0.5s;	/* Firefox 4 */
        -webkit-transition: padding 0.5s ease-in-out,background 0.5s;	/* Safari 和 Chrome */
        -o-transition: padding 0.5s,background 0.5s;	/* Opera */
    }
</style>
