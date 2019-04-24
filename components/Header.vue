<template>
  <header class="header">
    <ul>
      <nuxt-link tag="li" to="/" exact><a>Home</a></nuxt-link>
      <nuxt-link tag="li" to="/about"><a>About</a></nuxt-link>
      <nuxt-link tag="li" to="/news"><a>News</a></nuxt-link>
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

.header li.is-active a {
  text-decoration: underline;
}
</style>
