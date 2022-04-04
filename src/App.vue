<template>
  <main>
    <navbar></navbar>
    <banner></banner>
    <cardObject></cardObject>
    <cardsAction></cardsAction>
  </main>
</template>

<script>
import navbar from './components/navbar.vue'
import banner from './components/banner.vue'
import cardObject from './components/card-object.vue'
import cardsAction from './components/cards-action.vue'
export default {
  name: 'App',
  components: {
    navbar, banner, cardObject, cardsAction
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    main {
      height: 100vh;
      width: 100vw;
    }
  }
</style>
