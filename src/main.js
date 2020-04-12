import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Const from './config/constConfig'
import less from 'less'
import axios from 'axios'
import VueAxios from 'vue-axios'
//跨域session会刷新的问题
axios.defaults.withCredentials = true;
//登录组件
import Login from './logPages/LogControl.vue'
//我的组件
import Mine from './minePages/MineControl.vue'
//首页组件
import Home from './homePages/HomeControl.vue'

//game主体
import GameBody from './gamePages/MainGame.vue'
//game编辑器
import Ide from './editPages/EditControl.vue';
import IdeMain from './editPages/EditMain.vue';
import IdeConfig from './editPages/EditConfig.vue';
import IdeRes from './editPages/EditRes.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(less)
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios;
Vue.prototype.$const = Const;

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/play/:author/:code',
        component: GameBody,
    },
    {
        path: '/edit',
        component: Ide,
        children: [
            {
                path: '',
                component: IdeMain
            }, {
                path: 'config',
                component: IdeConfig
            }, {
                path: 'resource',
                component: IdeRes
            }
        ]
    }
]

const router = new VueRouter({
    routes
}
)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
