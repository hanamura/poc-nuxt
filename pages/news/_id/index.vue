<template>
  <div>
    <Header selection="/news" />
    <h1>News Detail</h1>
    <ul>
      <li>News ID: {{ $route.params.id }}</li>
      <li>News Title: {{ title }}</li>
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
  },
  asyncData({ payload }) {
    return { title: payload ? payload.title : 'Dummy Title' }
  }
}
</script>
