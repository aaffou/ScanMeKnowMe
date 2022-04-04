<template>
  <div class="navbar">
    <div class="navbar-item">
      <img src="https://www.cookeo.com/img/icon-user.svg">
      <p>label</p>
    </div>
    <div class="navbar-item">
      <img src="https://www.cookeo.com/img/icon-user.svg">
      <p>label</p>
    </div>
    <div class="navbar-item">
      <img src="https://www.cookeo.com/img/icon-user.svg">
      <p>label</p>
    </div>
    <div class="navbar-item">
      <img src="https://www.cookeo.com/img/icon-user.svg">
      <p>label</p>
    </div>
    <div class="navbar-item">
      <img src="https://www.cookeo.com/img/icon-user.svg">
      <p>label</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .navbar {
    height: 8vh;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .navbar-item {
      height: 100%;
      width: 12vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        height: 4vh;
        width: 4vh;
      }
      p {
        margin: 0;
      }
    }
  }
</style>
