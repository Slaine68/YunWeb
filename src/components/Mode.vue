<template>
  <div id="mainMode">
    <div id="mask" @click="$emit('close')"></div>
    <div id="block">
      <header></header>
      <ul>
        <li v-for="item in list" :key="item.id">
          <span>{{item.name}}</span>
          <span class="iconSpan"
          v-if="operators.indexOf($myConst.ResourseOperator.DELETE)>-1">
            <i class="iconfont icon-delete" @click="deleteItem(id)"></i>
          </span>
          <span class="iconSpan"
          v-if="operators.indexOf($myConst.ResourseOperator.CHOOSE)>-1">
            <i class="iconfont icon-chose" @click="$emit('choose',item.name)"></i>
          </span>
        </li>
      </ul>
      <footer></footer>
    </div>
  </div>
</template>

<script>
export default {
    
  data() {
    return {
      list: [
        { id: "1", name: "a.jpg", src: "/a.jpg" },
        { id: "2", name: "b.jpg", src: "/a.jpg" },
        { id: "3", name: "c.jpg", src: "/a.jpg" }
      ],
      musicList: [
        { id: "1", name: "a.mp3", src: "/a.mp3" },
        { id: "2", name: "b.mp3", src: "/a.mp3" },
        { id: "3", name: "c.mp3", src: "/a.mp3" }
      ]
    };
  },
  props:{
      //操作
      operators:{
          type:Array,
          required:true,
          validator:function(val){
              return val.length;
          }
      },
      //类型
      type:{
          type:Symbol,
          required:true
      }
      //原始数据
  },
  mounted(){
      if(this.type==this.$myConst.ResourseType.MUSIC){
          this.list=this.musicList;
      }
  },
  methods:{
      deleteItem(val){
          console.log(`delete+${val}`);
      }
  }
};
</script>

<style scoped lang="less">
#mainMode {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
#mask {
  position: absolute;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  width: 100%;
  height: 100%;
}
#block {
  background: white;
  position: relative;
  top: 5em;
  width: 70%;
  max-width: 70rem;
  height: 50%;
  border-radius: 2px;
  margin: auto;
  box-sizing: content-box;
  border: 2px solid @black-mask6;
}
.iconSpan {
  float: right;
  margin-right: 10px;
}
.iconSpan:hover {
  color: @gray1;
}
ul {
  width: 90%;
  margin: auto;
  position: relative;
  top: 20px;
  overflow-y: scroll;
}
ul li {
  padding: 10px;
}
ul li:hover {
  background: @black-mask1;
}
</style>