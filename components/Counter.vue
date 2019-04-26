<template>
  <div class="counter">
    Count: {{ count }} <button @click="increment">+1</button>
  </div>
</template>

<style scoped>
.counter {
  background: #eee;
  border: 1px solid #ddd;
  padding: 1em;
}
</style>

<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
