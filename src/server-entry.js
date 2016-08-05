import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

const app =new Vue(Vue.util.extend({ router }, App))
export default context => {
  router.setInitialLocation(context.url)
  return app
}
