import request from 'axios'

request.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

export const getTopics = ({ commit, state }) => {
  return request.get('posts').then((response) => {
    if (response.statusText === 'OK') {
      commit('TOPICS_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}

export const getIndexData = ({ commit, state }) => {
  const requestUsers = request.get('users')
  const requestTodos = request.get('todos')
  return request.all([requestUsers, requestTodos]).then(request.spread((...responses) => {
    const requestUsers = responses[0]
    const responseTodos = responses[1]
    if (requestUsers.statusText === 'OK') {
      commit('INDEX_USERS_LIST', requestUsers.data)
    }
    if (responseTodos.statusText === 'OK') {
      commit('INDEX_TODOS_LIST', responseTodos.data)
    }
    // use/access the results
  })).catch(errors => {
    // react on errors.
    console.log(errors)
  })
}

export const increment = ({ commit }) => commit('INCREMENT')
export const decrement = ({ commit }) => commit('DECREMENT')
