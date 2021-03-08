<template>
  <div>
     <h3 :class="{ completed: todo.completed }">{{ todo.title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: Object
  }
}
</script>

<style>
  .completed {
    color: red;
    text-decoration: line-through;
  }
</style>
