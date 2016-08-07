<template>
  <div>
    <div v-for="topic in topics">
      <p>{{topic.title}}</p>
    </div>
  </div>
</template>

<script>
const fetchInitialData = store => {
  return store.dispatch(`getTopics`)
}
export default {
  prefetch: fetchInitialData,
  data () {
    return {
      topics: this.$store.getters.getTopics
    }
  },
  mounted () {
    fetchInitialData(this.$store)
  }
}
</script>