<template>
  <main>
    <topbar :topbar="{ title: 'Pièces de rechange',
                      route: 'product' }">
    </topbar>
    <navbar></navbar>
    <div class="container">

      <div class="product-div">
        <img src="../assets/images/cookeo.svg" class="product-img">
        <img src="../assets/images/reparabilite.svg" class="reparable">
      </div>

      <div class="little-bar">
        <h3>Pièces Cookeo Connect</h3>
        <router-link to="/piece" class="arrow">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </router-link>
      </div>
      <p>Trouvez la pièce adapté à votre besoin. </p>

    </div>
    <div class="cards-repair">

      <div class="card-repair">
        <img src="../assets/images/water-tank.svg" class="img-repair">
        <div class="description">
          <h3 class="title">Récupérateur de Condensation</h3>
          <p class="ref">ref: SS-993440</p>
          <div class="buy-it">
            <p class="price">0.90€</p>
            <img src="../assets/images/panier.svg" class="panier">
          </div>
        </div>
      </div>

      <div class="card-repair">
        <img src="../assets/images/visse.svg" class="img-repair">
        <div class="description">
          <h3 class="title">Écrou <br> du couvercle</h3>
          <p class="ref">ref: SS-997355</p>
          <div class="buy-it">
            <p class="price">0.90€</p>
            <img src="../assets/images/panier.svg" class="panier">
          </div>
        </div>
      </div>

      <div class="card-repair">
        <img src="../assets/images/truc.svg" class="img-repair">
        <div class="description">
          <h3 class="title">Soupage blanche <br> et violette</h3>
          <p class="ref">ref: SS-993429</p>
          <div class="buy-it">
            <p class="price">0.90€</p>
            <img src="../assets/images/panier.svg" class="panier">
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<script>

import navbar from '../components/product/navbar.vue'
import topbar from '../components/topbar.vue'

export default {
  name: 'repair',
  components: {
    navbar, topbar
  }
}
</script>

<style scoped lang="scss">
  .container {
    margin-top: 2vh;
    padding: 5vw;
    .product-div {
      width: 100%;
      height: 27vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: 4vh;
      .product-img {
        height: 100%;
      }
      .reparable {
        position: absolute;
        bottom: 0;
        right: -1vh;
        height: 6vh;
      }
    }
    .little-bar {
      height: 2vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1vh;
      h3 {
        margin: 0;
      }
      .arrow {
        height: 100%;
        width: 4vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.871);
        img {
          height: 100%;
        }
      }
    }
    p {
      margin: 0;
      font-weight: 100;
    }
  }
  .cards-repair {
    padding-left: 5vw;
    margin-top: 1vh;
    height: 30vh;
    width: 95vw;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    .card-repair {
      margin-right: 2vh;
      padding: 12px;
      height: 23vh;
      border-radius: 12px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.126);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 24px;
      position: relative;
      .img-repair {
        width: 12vh;
        height: 12vh;
        border-radius: 12px;
      }
      .description {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 16vh;
        .title {
          margin: 0;
          font-size: 0.8rem;
          color: rgba(0, 0, 0, 0.659);
        }
        .ref {
          font-size: 0.8rem;
          margin: 0;
          font-weight: 100;
          color: rgb(160, 160, 160);
          margin-bottom: 4px;
        }
        .buy-it {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          .price {
            letter-spacing: 0.5px;
            margin: 0;
            font-weight: bold;
            color: rgba(0, 0, 0, 0.698);
          }
          .panier {
            width: 2.5vh;
            height: 2.5vh;
          }
        }
      }
    }
  }
</style>
