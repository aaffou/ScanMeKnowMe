<template>
  <main>
    <navbar></navbar>
    <banner></banner>
    <cardObject></cardObject>
    <cardsAction></cardsAction>
  </main>
</template>

<script>
import navbar from '../components/product/navbar.vue'
import banner from '../components/product/banner.vue'
import cardObject from '../components/product/card-object.vue'
import cardsAction from '../components/product/cards-action.vue'
export default {
  name: 'product',
  components: {
    navbar, banner, cardObject, cardsAction
  }
}
</script>

<style scoped lang="scss">
 main {
      height: 100vh;
      width: 100vw;
    }
</style>
