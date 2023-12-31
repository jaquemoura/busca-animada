import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    searchShow: false
  },
  mutations: {
    searchToggle(state, payload) {
      state.searchShow = payload
    }
  }
})


