<template>
    <div class="first-try">
      <h3>Première utilisation ?</h3>
      <p>Enregistez votre produit Moulinex et bénéficiez de la garantie, d'une assistance personnalisée</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .first-try {
    left: 0;
    right: 0;
    width: 90vw;
    height: 12vh;
    margin: 20vh auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    background-color: rgb(204, 0, 0);
    border-radius: 12px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.253);
    h3 {
      color: white;
      letter-spacing: .5px;
      font-size: 1.2rem;
      margin: 0 12px;
      font-weight: 400;
    }
    p {
      font-weight: 100;
      margin: 0 12px;
      color: white;
      font-size: 0.9rem;
    }
  }
</style>
