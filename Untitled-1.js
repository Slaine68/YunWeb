var target = ["重复项目", "repeat", "repeat", "重复", "重复项目", "重复", "aaa", "bbb", "repeat"];

/**
 * 试着完成下面的函数，根据上面数据，进行重复内容查找，找到重复数量第二多的数据
 * 
 * @name find
 * @param {array} src - 包含重复项的数据
 * @return {string|array} - 返回结果
 */
function find(src) {
    var obj={};
    for(var item of src){
        if(obj[item]){
            obj[item]++;
        }
        else{
            obj[item]=1;
        }
    }
    var obj_rev=[];
    for(var i in obj){
        obj_rev.push
    }

  return name;
}

