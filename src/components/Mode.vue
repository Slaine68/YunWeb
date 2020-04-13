<template>
  <div id="mainMode">
    <div id="mask" @click="$emit('close')"></div>
    <div id="block">
      <div class="header-body-footer content-middle max-width-3">
        <header>插入图片</header>
        <div class="body flex-row">
          <Card v-for="item in list" :key="item.id">
            <CardImg :name="item.name" :src="item.src"></CardImg>
          </Card>
        </div>
        <ul style="display:none">
          <li v-for="item in list" :key="item.id">
            <span>{{item.name}}</span>
            <span class="iconSpan" v-if="operators.indexOf($const.ResourseOperator.DELETE)>-1">
              <i class="iconfont icon-delete" @click="deleteItem(id)"></i>
            </span>
            <span class="iconSpan" v-if="operators.indexOf($const.ResourseOperator.CHOOSE)>-1">
              <i class="iconfont icon-chose" @click="$emit('choose',item.name)"></i>
            </span>
          </li>
        </ul>
        <footer>
          <button>点击确定</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import CardImg from "./CardImg.vue";
export default {
  data() {
    return {
      list: [
        { id: "1", name: "a.jpg", src: "/1.png" },
        { id: "2", name: "b.jpg", src: "/2.png" },
        { id: "3", name: "c.jpg", src: "/3.png" }
      ],
      musicList: [
        { id: "1", name: "a.mp3", src: "/a.mp3" },
        { id: "2", name: "b.mp3", src: "/a.mp3" },
        { id: "3", name: "c.mp3", src: "/a.mp3" }
      ]
    };
  },
  props: {
    //操作
    operators: {
      type: Array,
      required: true,
      validator: function(val) {
        return val.length;
      }
    },
    //类型
    type: {
      type: Symbol,
      required: true
    }
    //原始数据
  },
  mounted() {
    if (this.type == this.$const.ResourseType.MUSIC) {
      this.list = this.musicList;
    }
  },
  methods: {
    deleteItem(val) {
      console.log(`delete+${val}`);
    }
  },
  components: {
    Card,
    CardImg
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
  box-shadow: @shadow;
  overflow: scroll;
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