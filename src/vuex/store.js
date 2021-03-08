import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  indexData: { todos: [], users: [] },
  topics: [],
  count: 0
}

const mutations = {
  TOPICS_LIST: (state, topics) => {
    state.topics = topics
  },

  INDEX_TODOS_LIST: (state, data) => {
    Vue.set(state.indexData, 'todos', data)
  },

  INDEX_USERS_LIST: (state, data) => {
    Vue.set(state.indexData, 'users', data)
  },

  INCREMENT: (state) => {
    state.count++
  },

  DECREMENT: (state) => {
    state.count--
  }
}

export default function () {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}
