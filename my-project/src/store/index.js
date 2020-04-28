import Vue from 'vue'
import Vuex from 'vuex'
//使用Vuex
Vue.use(Vuex);

//创建Vuex实例
const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    //类似vue的computed
    getStateCount: function (state) { //上面的state
      return state.count + 1;
    }
  },
  mutations:{
      add(state){
          //上面的定义state对象
          state.count = state.count+1
      },
      reduction(state,n){
          //上面的定义state对象
          state.count = state.count - n
        }
  },
  actions:{//注册actions类似vue里的mothods
    addFun(context) {
        context.commit('add')
    },
    reductionFun(context,n){
        context.commit('reduction',n)
    }
}
})







export default store
