<template>
  <header class="header">
    <h1>POC Nuxt</h1>
    <ul>
      <nuxt-link tag="li" to="/" exact><a>Home</a></nuxt-link>
      <nuxt-link tag="li" to="/about"><a>About</a></nuxt-link>
      <nuxt-link tag="li" to="/news"><a>News</a></nuxt-link>
    </ul>
  </header>
</template>

<style scoped>
.header {
  align-items: baseline;
  background: #eee;
  display: flex;
  padding: 1em;
}

.header h1 {
  margin: 0;
}

.header ul {
  display: flex;
  margin: 0 0 0 2em;
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

.header li.is-active a {
  text-decoration: underline;
}
</style>
