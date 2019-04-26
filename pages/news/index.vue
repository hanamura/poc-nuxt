<template>
  <div>
    <h1>News</h1>
    <ol>
      <li v-for="post in posts" :key="post.slug">
        <NuxtLink :to="`/news/${post.slug}`">
          {{ post.date }}: {{ post.title }}
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  asyncData() {
    const context = require.context('~/content/news/posts', false, /^.*.yml$/)
    const posts = context
      .keys()
      .sort()
      .reverse()
      .slice(0, 10)
      .map(key => {
        const post = context(key)
        return {
          title: post.title,
          slug: post.slug,
          date: post.date
        }
      })
    return { posts }
  }
}
</script>
