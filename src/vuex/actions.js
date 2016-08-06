import request from 'axios'

export const getTopics = ({ commit, state }) => {
  request.get('https://cnodejs.org/api/v1/topics').then((response) => {
     // console.log(response)
     commit('TOPICS_LIST', response.data.data)
  }).catch((error) => {
    console.log(error)
  })
}


export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
