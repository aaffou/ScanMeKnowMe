<template>
  <div class="card-repair">
    <img :src="require('../assets/images/'+repair.img)" class="img-repair">
    <div class="description">
      <h3 class="title" v-html="repair.title"></h3>
      <p class="ref">{{repair.ref}}</p>
      <div class="buy-it">
        <p class="price">{{repair.price}}</p>
        <img src="../assets/images/panier.svg" class="panier">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repair: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  main {
    height: 100vh;
    .card-repair {
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
        width: 100%;
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
