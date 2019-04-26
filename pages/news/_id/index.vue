<template>
  <div>
    <h1>News Detail</h1>
    <ul>
      <li>
        News Slug: <code>{{ slug }}</code>
      </li>
      <li>
        News Title: <code>{{ title }}</code>
      </li>
      <li>
        News Date: <code>{{ date }}</code>
      </li>
      <li>
        News Category: <code>{{ category }}</code>
      </li>
      <li>
        News Body: <code>{{ body }}</code>
      </li>
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
