import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})

const app =new Vue(Vue.util.extend({ router }, App))
export default context => {
  router.setInitialLocation(context.url)
  return app
}
