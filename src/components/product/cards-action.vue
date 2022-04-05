<template>
    <div class="cards-action">
      <router-link to="/discover" class="card-action">
        <div class="image-div">
          <img src="../../assets/images/cookeo-icon.svg" alt="" class="img-action">
        </div>
        <h3 class="title-action">Je découvre <br>mon Cookeo</h3>
      </router-link>

      <router-link to="/repair" class="card-action">
        <div class="image-div">
          <img src="../../assets/images/frame.svg" alt="" class="img-action">
        </div>
        <h3 class="title-action">Je répare</h3>
      </router-link>

      <router-link to="/piece" class="card-action">
        <div class="image-div">
          <img src="../../assets/images/plat-icon.svg" alt="" class="img-action">
        </div>
        <h3 class="title-action">J'équipe mon Cookeo</h3>
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
      border-radius: 24px;
      background-color: white;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.253);
      .title-action {
        width: 16vh;
        text-align: center;
        margin: 0;
        font-weight: 400;
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.932);
      }
      .image-div {
        display: flex;
        justify-content: center;
        height: 7vh;
        .img-action {
          width: 4vh;
        }
      }
    }
  }
</style>
