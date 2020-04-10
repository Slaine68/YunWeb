<template>
  <div>{{sort}},{{find}}</div>
</template>

<script>
export default {
  data(){
    return{
      list:[3,6,22,7,2,3,10,11,8,42,73,1,9,75]
    }
  },
  //https://www.cnblogs.com/AlbertP/p/10847627.html
  methods:{
    //冒泡
    bubbleSort(list){
      //把一个循环里最大的一个浮到最右：通过交换得到
      //主循环←，次循环→
      let temp=0;
      for(let i=list.length;i>0;i--){
        for(let j=1;j<i;j++){
          if(list[j]<list[j-1]){
            temp = list[j-1];
            list[j-1]=list[j];
            list[j]=temp;
          }
        }
      }
      return list;
    },
    //选择
    selectionSort(list){
      //在一个循环里找到最小的，标记它，在结束时候和最左交换
      //主循环、次循环→
      for(let i=0;i<list.length;i++){
        let mix = i;//最小位置
        for(let j=i;j<list.length;j++){
          if(list[j]<list[mix]){
            mix = j;
          }
        }
        this.swap(i,mix,list);
      }
      return list;
    },
    swap(a,b,list){
      let temp = list[a];
      list[a]=list[b];
      list[b]=temp;
    },
    //插入
    insertSort(list){
      //前半堆视为已经排好，前半堆的后一个往前插
      //主循环→，次循环←
      for(let i=1;i<list.length;i++){
        for(let j=i+1;j>=0;j--){
          if(list[j]<list[j-1]){
            this.swap(j,j-1,list);
          }
        }
      }
      return list;
    },
    //快排，取基准值，左小右大，再递归处理,基准值要从排序里去掉
    quickSort(list){
      if(list.length<=1)return list;
      let midVal=list[0];
      let leftList=[];
      let rightList=[];
      for(let i=1;i<list.length;i++){
        if(list[i]<=midVal){
          leftList.push(list[i])
        }
        else{
          rightList.push(list[i]);
        }
      }
      return this.quickSort(leftList).concat([midVal],this.quickSort(rightList));
    },
    //二分查找
    binarySearch(list,val,left,right){
      //list：有序数组
      if(!left)left=0;
      if(!right)right=list.length-1;
      let midIndex=Math.floor((right+left)/2);
      if(left==right&&list[midIndex]!=val){
        return "没找到";
      }
      if(list[midIndex]==val){
        return midIndex;
      }
      else if(list[midIndex]<val){
        return this.binarySearch(list,val,midIndex+1,right);
      }
      else{
        return this.binarySearch(list,val,left,midIndex-1);
      }
    }

  },
  computed:{
    sort(){
      return this.quickSort(this.list);
    },
    find(){
      return this.binarySearch(this.quickSort(this.list),74);
    }
  }
}
</script>

<style>

</style>