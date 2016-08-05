<template>
  <div id="app">
     <img src="./assets/logo.png">
     <ul>
       <li><router-link to="/">Home</router-link></li>
       <li><router-link to="/about">About</router-link></li>
     </ul>
     <router-view class="view"></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>
