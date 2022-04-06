<template>
  <main>
    <topbar :topbar="{ title: 'Pièce Cookeo',
                       route: 'repair' }">
    </topbar>
    <navbar></navbar>
    <div class="container">
      <div class="cards-repair">
        <card-repair :repair="{ img: 'water-tank.svg',
                                title: 'Récupérateur de Condensation',
                                ref: 'ref: SS-993440',
                                price: '0,90€'
                              }">
        </card-repair>
        <card-repair :repair="{ img: 'visse.svg',
                                title: 'Écrou <br> du couvercle',
                                ref: 'ref: SS-997355',
                                price: '0,90€'
                              }">
        </card-repair>
        <card-repair :repair="{ img: 'machin.svg',
                                title: 'Soupage <br> blanche',
                                ref: 'ref: SS-993429',
                                price: '0,90€'
                              }">
        </card-repair>
        <card-repair :repair="{ img: 'truc.svg',
                                title: 'Soupage blanche <br> et violette',
                                ref: 'ref: SS-993429',
                                price: '0,90€'
                              }">
        </card-repair>

      </div>
    </div>
  </main>
</template>

<script>

import navbar from '../components/product/navbar.vue'
import cardRepair from '../components/card-repair.vue'
import topbar from '../components/topbar.vue'
export default {
  name: 'piece',
  components: {
    navbar, cardRepair, topbar
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
      .card-repair {
        padding: 12px;
        height: 23vh;
        border-radius: 12px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.126);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        position: relative;
        .img-repair {
          width: 12vh;
          height: 12vh;
          border-radius: 12px;
        }
        .description {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 100%;
          .title {
            margin: 0;
            font-size: 0.8rem;
            color: rgba(0, 0, 0, 0.659);
          }
          .ref {
            font-size: 0.8rem;
            margin: 0;
            font-weight: 100;
            color: rgb(160, 160, 160);
            margin-bottom: 4px;
          }
          .buy-it {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          .price {
            letter-spacing: 0.5px;
            margin: 0;
            font-weight: bold;
            color: rgba(0, 0, 0, 0.698);
          }
          .panier {
          width: 2.5vh;
          height: 2.5vh;
          img {
            width: 100%;
          }
        }
      }
    }
    }
    }
  }
</style>
