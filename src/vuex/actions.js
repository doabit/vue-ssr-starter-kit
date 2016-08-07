import request from 'axios'

request.defaults.baseURL = 'https://cnodejs.org/api/v1/';

export const getTopics = ({ commit, state }) => {
  return request.get('topics').then((response) => {
    if (response.statusText === 'OK') {
      commit('TOPICS_LIST', response.data.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
