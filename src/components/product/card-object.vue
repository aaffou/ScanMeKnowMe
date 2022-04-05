<template>
    <div class="card-obj">
      <img src="../../assets/images/cookeo.svg" class="img-obj">
      <div class="title-ref">
        <h3 class="title-obj">Cookeo Connect</h3>
        <p class="ref">ref: CE700100</p>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .card-obj {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 26vh;
    width: 90vw;
    border-radius: 44px;
    z-index: 1;
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.253);
    position: absolute;
    top: 20vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    .img-obj {
      height: 22vh;
      border-radius: 12px;
      transform: translateY(-40%);
    }
    .title-ref {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      transform: translateY(-90%);
      color: rgba(0, 0, 0, 0.74);
      .title-obj {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        letter-spacing: 0.5px;
        color: rgba(0, 0, 0, 0.76);
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
      }
      .ref {
        margin: 0;
      }
      }
  }
</style>
