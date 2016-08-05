import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

var s = Date.now()
new Vue(Vue.util.extend({ router }, App)).$mount('#app')
console.log(`client render took ${(Date.now() - s)}ms`)
