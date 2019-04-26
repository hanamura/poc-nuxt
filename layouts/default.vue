<template>
  <div>
    <Header />
    <main><nuxt /></main>
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

main {
  padding: 1em;
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
