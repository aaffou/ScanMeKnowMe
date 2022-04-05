<template>
  <main>
    <navbar></navbar>
    <div class="container">

    </div>
  </main>
</template>

<script>

import navbar from '../components/product/navbar.vue'
export default {
  name: 'repair',
  components: {
    navbar
  }
}
</script>

<style scoped lang="scss">
  .container {
    width: 90vw;
  }
</style>
