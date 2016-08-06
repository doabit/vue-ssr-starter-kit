<template>
  <div>
    <h3>Count is {{ count }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  }
}
</script>