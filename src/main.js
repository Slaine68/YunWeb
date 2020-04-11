import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Const from './config/constConfig'
import less from 'less'
import axios from 'axios'
//跨域session会刷新的问题
axios.defaults.withCredentials=true;
import VueAxios from 'vue-axios'
//登录
import Login from './userPages/LogControl.vue'
//battle组件
import Battle from './mainPages/battle/Battle.vue'
//game主体
import GameBody from './mainPages/MainGame.vue'
//game编辑器
import Ide from './editPages/EditControl.vue';
import IdeMain from './editPages/EditMain.vue';
import IdeConfig from './editPages/EditConfig.vue';
import IdeRes from './editPages/EditRes.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(less)
Vue.use(VueAxios,axios)
Vue.prototype.$axios = axios;
Vue.prototype.$const = Const;

const routes=[
    {
        path:'/login',
        component:Login
    },
    {
        path:'/signin',
        component:Login
    },
    {
        path:'/battle',
        component:Battle
    },{
        path:'/main',
        component:GameBody
    },{
        path:'/edit',
        component:Ide,
        children:[
            {
                path:'',
                component:IdeMain
            },{
                path:'config',
                component:IdeConfig
            },{
                path:'resource',
                component:IdeRes
            }
        ]
    }
]

const router  = new VueRouter({
    routes
}
)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
