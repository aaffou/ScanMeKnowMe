<template>
  <div class="navbar">
    <div class="navbar-item">
      <img src="https://www.cookeo.com/img/icon-user.svg">
      <p>label</p>
    </div>
    <div class="navbar-item">
      <img src="">
      <p>label</p>
    </div>
    <div id="main-item">
      <div class="red">
        <img src="../../assets/images/m-icon.svg" class="logo-moulinex">
      </div>
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
    height: 7vh;
    width: 100vw;
    border-top: 1px solid rgb(154, 154, 154);
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    #main-item {
      transform: translateY(-35%);
      height: 7vh;
      width: 7vh;
      border-radius: 50%;
      border: 2px solid #91A1B2;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      .red {
        height: 5vh;
        width: 5vh;
        background-color: red;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo-moulinex {
          width: 3vh;
        }
      }
    }
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
