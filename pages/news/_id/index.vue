<template>
  <div>
    <Header selection="/about" />
    <h1>News Detail</h1>
    <ul>
      <li>News ID: {{ $route.params.id }}</li>
      <li>News Title: {{ $route.params.title }}</li>
    </ul>
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
