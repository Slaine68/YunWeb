import Vue from 'vue'
import VueRouter from 'vue-router'
//登录
import Login from './Login.vue'
//battle组件
import App from './App.vue'
//game主体
import Main from './Main.vue'
//game编辑器
import Ide from './Ide.vue';


Vue.config.productionTip = false
Vue.use(VueRouter)


const router  = new VueRouter(
    {
        path:'/login',
        component:Login
    },
    {
        path:'/battle',
        component:App
    },{
        path:'/main',
        component:Main
    },{
        path:'/edit',
        component:Ide
    }
)

new Vue({
  render: h => h(Login),
  routes:router
}).$mount('#app')
