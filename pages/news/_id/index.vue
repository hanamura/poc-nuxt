<template>
  <div>
    <h1>News Detail</h1>
    <ul>
      <li>News ID: {{ $route.params.id }}</li>
      <li>News Title: {{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData({ payload }) {
    return { title: payload ? payload.title : 'Dummy Title' }
  }
}
</script>
