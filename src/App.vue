<template>
  <div id="app">
     <img src="./assets/logo.png">
     <button @click='increment'>Increment +1</button>
     <button @click='decrement'>Decrement -1</button>
     <ul>
       <li><router-link to="/" exact>Home</router-link></li>
       <li><router-link to="/topics">Topics</router-link></li>
       <li><router-link to="/display">Display</router-link></li>
       <li><router-link to="/about">About</router-link></li>
     </ul>
     <router-view class="view"></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import store from './vuex/store'
  export default {
    methods: {
      ...mapActions([
        'increment',
        'decrement',
        'getTopics'
      ])
    },
    store
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  .router-link-active{
    color: red ;
  }
</style>
