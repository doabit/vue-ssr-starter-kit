import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const defaultState = {
  topics: [],
  count: 0
}

const state = typeof __INITIAL_STATE__ !== 'undefined' ? __INITIAL_STATE__ : defaultState

// const mutations = {
//   TOPICS_LIST (state, topics) {
//     state.topics = topics
//   }
// }
const mutations = {
  TOPICS_LIST (state, topics) {
    state.topics = topics
  },

  INCREMENT (state) {
    state.count++
  },

  DECREMENT (state) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: Object.assign({}, getters)
})
