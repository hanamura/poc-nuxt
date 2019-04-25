<template>
  <div>
    <h1>News Detail</h1>
    <ul>
      <li>News Date: {{ date }}</li>
      <li>News Title: {{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title
    }
  },
  async validate({ params }) {
    try {
      await import(`~/content/news/posts/${params.id}.yml`)
    } catch {
      return false
    }
    return true
  },
  async asyncData({ payload, params }) {
    if (payload) {
      return payload
    }
    const post = await import(`~/content/news/posts/${params.id}.yml`)
    return post
  }
}
</script>
