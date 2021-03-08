import Vue from 'vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Counter from '../views/Counter.vue'
import Topics from '../views/Topics.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default function () {
  return new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Home },
      { path: '/Topics', component: Topics },
      { path: '/Counter', component: Counter },
      { path: '/About', component: About }
    ]
  })
}
