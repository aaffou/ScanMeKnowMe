<template>
  <main>
    <navbar></navbar>
    <div class="container">
      <div class="cards-repair">
        <card-repair :repair="{ img: 'visse.svg',
                                title: 'Écrou <br> du couvercle',
                                ref: 'ref: SS-993440',
                                price: '0.90€'
                              }">
        </card-repair>
        <card-repair :repair="{ img: 'visse.svg',
                                title: 'Écrou <br> du couvercle',
                                ref: 'ref: SS-993440',
                                price: '0.90€'
                              }">
        </card-repair>
        <card-repair :repair="{ img: 'visse.svg',
                                title: 'Écrou <br> du couvercle',
                                ref: 'ref: SS-993440',
                                price: '0.90€'
                              }">
        </card-repair>

      </div>
    </div>
  </main>
</template>

<script>

import navbar from '../components/product/navbar.vue'
import cardRepair from '../components/card-repair.vue'
export default {
  name: 'piece',
  components: {
    navbar, cardRepair
  }
}
</script>

<style scoped lang="scss">
  main {
    height: 100vh;
    .cards-repair {
      margin: 0 auto;
      padding: 2vh;
      width: 90vw;
      display: grid;
      gap: 2vh;
      overflow: scroll;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      padding-bottom: 11vh;
    }
  }
</style>
