<template>
  <div class="navbar">
    <div class="navbar-item">
      <img src="../../assets/images/live.svg">
      <p>Live</p>
    </div>
    <div class="navbar-item">
      <img src="../../assets/images/search.svg">
      <p>Recherche</p>
    </div>
    <div id="main-item">
      <div class="red">
        <img src="../../assets/images/m-icon.svg" class="logo-moulinex">
      </div>
    </div>
    <div class="navbar-item">
      <img src="../../assets/images/panier.svg">
      <p>panier</p>
    </div>
    <div class="navbar-item">
      <img src="../../assets/images/profile.svg">
      <p>Mon profile</p>
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
      width: 20vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3px;
      img {
        height: 3vh;
        width: 3vh;
      }
      p {
        margin: 0;
        font-weight: 100;
        font-size: 0.9rem;
        color: rgb(184, 184, 184);
      }
    }
  }
</style>
