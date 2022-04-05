<template>
    <div class="cards-action">

      <router-link to="/accessoires" class="card-action">
        <img src="../../assets/images/plat-icon.svg" alt="" class="img-action">
        <h3 class="title-action">Accessoires et Ustensile</h3>
      </router-link>

      <router-link to="/repair" class="card-action">
        <img src="../../assets/images/frame.svg" alt="" class="img-action">
        <h3 class="title-action">Réparabilité</h3>
      </router-link>

      <router-link to="/entretien" class="card-action">
        <img src="../../assets/images/cookeo-icon.svg" alt="" class="img-action">
        <h3 class="title-action">Entretien de mon Cookeo</h3>
      </router-link>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">
  .cards-action {
    padding-left: 5vw;
    height: 20vh;
    width: 95vw;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    .card-action {
      text-decoration: none;
      height: 16vh;
      margin-right: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      border-radius: 24px;
      background-color: white;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.253);
      .title-action {

        width: 16vh;
        text-align: center;
        color: black;
        margin: 0;
      }
      .img-action {
        width: 4vh;
      }
    }
  }
</style>
