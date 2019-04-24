<template>
  <div>
    <Header selection="/about" />
    <h1>News Detail</h1>
    <h2>News ID: {{ $route.params.id }}</h2>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
