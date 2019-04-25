<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/news/${post.slug}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData() {
    const context = require.context('~/content/news/posts', false, /^.*.yml$/)
    return { posts: context.keys().map(key => context(key)) }
  }
}
</script>
