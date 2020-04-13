import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    usercode:''
}

export default new Vuex.Store({
    state:state,
    getters:{
        sure:state=>{
            return state.usercode
        }
    },
    mutations:{
        login(state,val){
            state.usercode=val;
        }
    }
  });