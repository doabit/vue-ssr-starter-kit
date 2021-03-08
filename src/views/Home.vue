<template>
  <div class="container">
    <div class="block todos">
      <h1>Todos List</h1>
      <div v-for="todo in items.todos" :key="todo.id"> <todo :todo="todo" /> </div>
    </div>
    <div class="block topics">
      <h1>Users List</h1>
      <div v-for="user in items.users" :key="user.id">
         <h3>{{ user.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Todo from '../components/Todo'

export default {
  components: {
    todo: Todo
  },

  computed: {
    ...mapGetters({
      items: 'getIndexData'
    })
  },

  asyncData ({ store }) {
    return store.dispatch(`getIndexData`)
  }
}
</script>

<style>
  .container {
    display: flex
  }
  .block {
    width: 50%;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
  }
</style>
