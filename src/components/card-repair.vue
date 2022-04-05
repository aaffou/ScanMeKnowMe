<template>
     <div class="card-repair">
      <img :src="require('../assets/images/'+repair.img)" class="img-repair">
      <img src="../assets/images/panier.svg" class="panier">
      <div class="description">
        <h3 class="title" v-html="repair.title"></h3>
        <p class="ref">{{repair.ref}}</p>
        <p class="price">{{repair.price}}</p>
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
      height: 25vh;
      border-radius: 12px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.126);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 24px;
      position: relative;
      .panier {
        position: absolute;
        bottom: 4vw;
        right: 4vw;
        width: 2.5vh;
        height: 2.5vh;
        img {
          width: 100%;
        }
      }
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
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.659);
        }
        .ref {
          margin: 0;
          font-weight: 100;
          color: rgb(160, 160, 160);
          margin-bottom: 4px;
        }
        .price {
          width: 120px;
          margin: 0;
          font-weight: bold;
          color: rgba(0, 0, 0, 0.698);
        }
      }
    }
  }
</style>
