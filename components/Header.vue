<template>
  <header class="header">
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
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
</style>
