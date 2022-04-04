<template>
    <div class="card-obj">
      <div class="img-obj"></div>
      <h3 class="title-obj">Cookeo Touch</h3>
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
    height: 30vh;
    width: 90vw;
    border-radius: 24px;
    z-index: 1;
    background-color: blue;
    position: absolute;
    top: 20vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    .img-obj {
      height: 20vh;
      width: 20vh;
      border-radius: 12px;
      background-color: red;
    }
    .title-obj {

    }
  }
</style>
