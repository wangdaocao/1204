import Vue from 'vue'
import Vuex from 'vuex'
import axios from ""
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allList:[],
    curIndex:0,
    keyword:''
  },
  mutations: {
    setList(state,payload){
      state.allList=payload
    },
    changeIndex(state,payload){
      state.curIndex=payload
    },
    search(state,payload)){
      state.keyword=payload
    },
  
  actions: {
    getList(context){
      axios.get('/getList').then(res=>{
        context.commit('setList',res.data)
      })
    }
  },
  getters:{
    list(state){
      list=this.allList.filter(v=>v.name.includes(state.keyword))
    }
  }
  modules: {
  }
})
