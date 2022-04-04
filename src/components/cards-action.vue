<template>
    <div class="cards-action">

      <div class="card-action">
        <div class="img-action">img</div>
        <h3 class="title-action">accessoires</h3>
      </div>

      <div class="card-action">
        <div class="img-action">img</div>
        <h3 class="title-action">accessoires</h3>
      </div>
      <div class="card-action">
        <div class="img-action">img</div>
        <h3 class="title-action">accessoires</h3>
      </div>
      <div class="card-action">
        <div class="img-action">img</div>
        <h3 class="title-action">accessoires</h3>
      </div>
      <div class="card-action">
        <div class="img-action">img</div>
        <h3 class="title-action">accessoires</h3>
      </div>
      <div class="card-action">
        <div class="img-action">img</div>
        <h3 class="title-action">accessoires</h3>
      </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">
  .cards-action {
    padding-left: 5vw;
    height: 15vh;
    width: 95vw;
    margin-top: 22vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    overflow-x: scroll;
    .card-action {
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 24px;
      background-color: rgb(255, 234, 0);
      .title-action {
        width: 120px;
        text-align: center;
        color: black;
      }
    }
  }
</style>
