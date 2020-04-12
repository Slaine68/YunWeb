'use strict'
const NAV_MAX_WIDTH = 1440;
const NAV_MIN_WIDTH = 800;

const path='http://localhost/newphp/';
const filepath='http://localhost/';
// 资源:操作
const ResourseOperator=Object.freeze({
    DELETE:Symbol('删除'),
    LOOK:Symbol('查看'),
    CHOOSE:Symbol('选择')
})
//资源：类型
const ResourseType=Object.freeze({
    MUSIC:Symbol("音乐"),
    PICTRUE:Symbol("图片"),
    TEXT:Symbol("文本")
})
export default{
    NAV_MAX_WIDTH, NAV_MIN_WIDTH,path,filepath,
    ResourseOperator,ResourseType
}