<template>
  <header class="header">
    <ul>
      <li :class="{ 'is-selected': selection === '/' }">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li :class="{ 'is-selected': selection === '/about' }">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li :class="{ 'is-selected': selection === '/news' }">
        <nuxt-link to="/news">News</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style>
.header {
  background: #eee;
  padding: 1em;
}

.header ul {
  display: flex;
  margin: 0;
  padding: 0;
}

.header li {
  list-style-type: none;
}

.header li + li {
  margin-left: 1em;
}

.header a {
  text-decoration: none;
}

.header li.is-selected a {
  text-decoration: underline;
}
</style>

<script>
export default {
  props: {
    selection: {
      type: String,
      default: ''
    }
  }
}
</script>
