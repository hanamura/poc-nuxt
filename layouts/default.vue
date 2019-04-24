<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 16px;
}

body {
  margin: 0;
}
</style>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
