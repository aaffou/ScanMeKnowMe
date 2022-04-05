<template>
  <main>
    <navbar></navbar>
    <div class="container">
      <div class="flash-notice">
        <h3>Consulter la notice <br> de mon produit</h3>
        <img src="../assets/images/cookeo-notice.svg">
      </div>

      <h4>Mettre en marche votre Cookeo</h4>

      <div class="cards-video">
        <div class="card-video">
          <img src="../assets/images/1.gif" class="video">
          <div class="card-video-content">
            <h5>Étape 1 <br> Le débalage</h5>
            <p>
              Découvrez votre Cookeo Connect
            </p>
          </div>
        </div>

        <div class="card-video">
          <img src="../assets/images/2.gif" class="video">
          <div class="card-video-content">
            <h5>Étape 2 <br>Le Nettoyage</h5>
            <p>
              Nettoyez votre Cookeo Connect
            </p>
          </div>
        </div>

        <div class="card-video">
          <img src="../assets/images/3.gif" class="video">
          <div class="card-video-content">
            <h5>Étape 3 <br>Connexion </h5>
            <p>
              Connectez votre Cookeo à votre réseau
            </p>
          </div>
        </div>

        <div class="card-video">
          <img src="../assets/images/4.gif" class="video">
          <div class="card-video-content">
            <h5>Étape 4 <br>Compte Moulinex</h5>
            <p>
              Créez votre compte Moulinex
            </p>
          </div>
        </div>
      </div>

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
    padding: 5vw;
    .flash-notice {
      border: 1px solid grey;
      border-radius: 12px;
      height: 14vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 24px;
      h3 {
        font-size: 1.1rem;
        margin: 0;
      }
      img {
        height: 100%;
        border-radius: 12px;
      }
    }
    h4 {
      margin-top: 32px;
      margin-bottom: 12px;
      font-size: 1.2rem;
      letter-spacing: 0.5px;
    }
    .cards-video {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      .card-video {
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        height: 30vh;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.152);
        .video {
          object-fit: cover;
          height: 55%;
          width: 100%;
          border-radius: 12px 12px 0 0;
        }
        .card-video-content {
          padding: 0 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          h5 {
            font-size: 1rem;
            margin: 0;
          }
          p {
            font-size: 0.9rem;
            margin: 0;
            color: rgb(153, 153, 153);
            font-weight: 100;
          }
        }
      }

    }
  }
</style>
