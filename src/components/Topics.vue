<template>
  <div>
    <div v-for="topic in topics">
      <p>{{topic.title}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = store => {
  return store.dispatch(`getTopics`)
}
export default {
  prefetch: fetchInitialData,
  computed: {
    ...mapGetters({
      topics: 'getTopics'
    })
  },
  mounted () {
    fetchInitialData(this.$store)
  }
}
</script>