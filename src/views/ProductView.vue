<template>
  <main>
    <div class="moulinex">
      <img src="../assets/images/moulinex.svg">
    </div>
    <navbar></navbar>
    <cardObject></cardObject>
    <div class="banner">
      <div class="cache"></div>

      <firstTry></firstTry>
      <cardsAction></cardsAction>
    </div>
  </main>
</template>

<script>

import navbar from '../components/product/navbar.vue'
import cardObject from '../components/product/card-object.vue'
import cardsAction from '../components/product/cards-action.vue'
import firstTry from '../components/product/first-try.vue'

export default {
  name: 'product',
  components: {
    navbar, cardObject, cardsAction, firstTry
  }
}
</script>

<style scoped lang="scss">
  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    .moulinex {
      position: absolute;
      top: 5vh;
      left: 0;
      right: 0;
      margin: 0 auto;
      display: flex;
      justify-content: center;
        img {
          width: 150px;
      }
    }
    .banner {
      height: 70vh;
      width: 100vw;
      background-image: url('../assets/images/pommes.jpg');
      background-size: cover;
      display: flex;
      flex-direction: column;
      gap: 3vh;
      position: relative;
      .cache {
        height: 20vh;
        width: 100vw;
        background: linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0));
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
</style>
