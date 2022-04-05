<template>
  <main>
    <navbar></navbar>
    <div class="container">
      <div class="cards-accessoire">

        <div class="card-accessoire">
          <font-awesome-icon icon="fa-regular fa-heart" class="fav" />
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <h3 class="title-accessoire">Accessoire</h3>
        </div>
        <div class="card-accessoire">
          <font-awesome-icon icon="fa-solid fa-heart" class="fav red" />
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <h3 class="title-accessoire">Accessoire</h3>
        </div>
        <div class="card-accessoire">
          <font-awesome-icon icon="fa-regular fa-heart" class="fav" />
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <h3 class="title-accessoire">Accessoire</h3>
        </div>
        <div class="card-accessoire">
          <font-awesome-icon icon="fa-regular fa-heart" class="fav" />
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <h3 class="title-accessoire">Accessoire</h3>
        </div>
        <div class="card-accessoire">
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <font-awesome-icon icon="fa-regular fa-heart" class="fav" />
          <h3 class="title-accessoire">Accessoire</h3>
        </div>
        <div class="card-accessoire">
          <font-awesome-icon icon="fa-solid fa-heart" class="fav red" />
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <h3 class="title-accessoire">Accessoire</h3>
        </div>
        <div class="card-accessoire">
          <font-awesome-icon icon="fa-solid fa-heart" class="fav red" />
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <h3 class="title-accessoire">Accessoire</h3>
        </div>
        <div class="card-accessoire">
          <font-awesome-icon icon="fa-regular fa-heart" class="fav" />
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <h3 class="title-accessoire">Accessoire</h3>
        </div>
        <div class="card-accessoire">
          <font-awesome-icon icon="fa-regular fa-heart" class="fav" />
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <h3 class="title-accessoire">Accessoire</h3>
        </div>
        <div class="card-accessoire">
          <font-awesome-icon icon="fa-regular fa-heart" class="fav" />
          <img src="../assets/images/accessoire.svg" class="img-accessoire">
          <h3 class="title-accessoire">Accessoire</h3>
        </div>

      </div>
    </div>
  </main>
</template>

<script>

import navbar from '../components/product/navbar.vue'

export default {
  name: 'accessoires',
  components: {
    navbar
  }
}
</script>

<style scoped lang="scss">
  main {
    height: 100vh;
    .cards-accessoire {
      margin: 0 auto;
      padding: 2vh;
      width: 90vw;
      display: grid;
      gap: 3vh;
      overflow: scroll;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      padding-bottom: 11vh;
      .card-accessoire {
        height: 25vh;
        border-radius: 12px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.126);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        position: relative;
        .fav {
          &.red {
            color: #FF0000;
          }
          position: absolute;
          right: 2vh;
          top: 2vh;
          font-size: 1.3rem;
        }
        .img-accessoire {
          width: 12vh;
          height: 12vh;
          border-radius: 12px;
          margin-top: 3vh;
        }
        .title-accessoire {
          width: 120px;
          text-align: center;
        }
      }
    }
  }
</style>
