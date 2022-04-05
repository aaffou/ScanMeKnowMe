<template>
  <main>
    <div class="moulinex">
      <img src="../assets/images/moulinex.svg">
    </div>
    <div class="chat">
      <img src="../assets/images/chat.svg">
    </div>
    <div class="add-product">
      <img src="../assets/images/plus.svg">
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
    .chat {
      position: absolute;
      bottom: 6vh;
      right: 0vw;
      height: 12vh;
      z-index: 2;
      img {
        height: 100%;
      }
    }
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
    .add-product {
      position: absolute;
      top: 5.3vh;
      right: 5vw;
      display: flex;
      justify-content: center;
      img {
         width: 28px;
      }
    }
    .banner {
      height: 70vh;
      width: 100vw;
      background-image: url('../assets/images/pommes.jpg');
      background-size: cover;
      display: flex;
      flex-direction: column;
      gap: 2vh;
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
