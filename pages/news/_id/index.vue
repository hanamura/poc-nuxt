<template>
  <div>
    <h1>News Detail</h1>
    <ul>
      <li>News ID: {{ id }}</li>
      <li>News Title: {{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ payload }) {
    return (
      payload || {
        id: 0,
        title: 'Dummy Title'
      }
    )
  }
}
</script>
