<template>
  <div>
    <h1>Home</h1>
    <section>
      <h1>News</h1>
      <ul>
        <li v-for="post in posts" :key="post.slug">
          <nuxt-link :to="`/news/${post.slug}`">
            {{ post.title }}
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section>
      <h1>Assets</h1>
      <ul>
        <li><a href="/export.css">export.css</a></li>
      </ul>
    </section>
    <section>
      <h1>Components</h1>
      <div>
        <Counter />
      </div>
    </section>
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue'

export default {
  components: {
    Counter
  },
  asyncData() {
    const context = require.context('~/content/news/posts', false, /^.*.yml$/)
    const posts = context.keys().map(key => {
      const post = context(key)
      return {
        title: post.title,
        slug: post.slug
      }
    })
    return { posts: posts.slice(0, 3) }
  }
}
</script>
