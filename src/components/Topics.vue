<template>
  <div>
    <div v-for="topic in topics">
      <p>{{topic.title}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      topics: 'getTopics'
    })
  },
  created () {
    this.$store.dispatch('getTopics')
  }
}
</script>