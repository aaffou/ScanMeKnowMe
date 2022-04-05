<template>
  <main>
    <div class="container">
      <div class="img-tick">
        <img src="../assets/images/cookeo.svg" class="img-product">
        <div class="tick-green">
          <img src="../assets/images/tick.png" class="tick">

        </div>

      </div>
      <h2>Votre Cookeo a été ajouté avec succès ! {{confidence}}</h2>
      <p>Tirez le meilleur parti de votre appareil grace à l'application Scan4me</p>
      <router-link to="/product" class="btn-go">C'est parti !</router-link>
    </div>
  </main>
</template>

<script>

export default {
  name: 'validation',
  data () {
    return {
      confidence: null
    }
  },
  beforeMount () {
    if (this.$route.query) {
      if (this.$route.query.confidence) {
        this.confidence = '(' + Math.ceil(this.$route.query.confidence) + '%)'
      } else if (this.$route.query.nfc) {
        this.confidence = '(NFC)'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  main {
    height: 100vh;
    width: 100vw;
    .container {
      width: 70vw;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .img-tick {
      height: 25vh;
      width: 25vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-bottom: 3vh;
      .img-product {
        height: 100%;
        border-radius: 12px;
      }
      .tick-green {
        height: 6vh;
        width: 6vh;
        border-radius: 50%;
        background-color: #4BAD1B;
        position: absolute;
        right: 8vw;
        bottom: 1vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .tick {
          width: 3vh;
        }
      }
    }
    h2 {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 0;
      margin-bottom: 7vh;
    }
    p {
      text-align: center;
      margin: 0;
      margin-bottom: 14vh;
      font-size: 1.2rem;
    }
    .btn-go {
      padding: 8px 22px;
      text-decoration: none;
      background-color: rgb(220, 0, 0);
      border-radius: 24px;
      color: white;
    }
  }
</style>
