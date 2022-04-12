<template>
  <main>
    <topbar :topbar="{ title: 'Accessoires',
                       route: 'product' }">
    </topbar>
    <navbar></navbar>
    <div class="container">
      <div class="cards-accessoire">
       <card-repair :repair="{ img: 'accessoires/moule.svg',
                                title: 'Moule à gâteau',
                                price: '24,90€'
                              }">
        </card-repair>
         <card-repair :repair="{ img: 'accessoires/verrines.svg',
                                title: 'Lot de 6 verrines',
                                price: '32,95€'
                              }">
        </card-repair>   <card-repair :repair="{ img: 'accessoires/transport.svg',
                                title: 'Sac de transport',
                                price: '59,99€'
                              }">
        </card-repair>   <card-repair :repair="{ img: 'accessoires/balance.svg',
                                title: 'Balance connectée',
                                price: '24,90€'
                              }">
        </card-repair>   <card-repair :repair="{ img: 'accessoires/hideOne.svg',
                                title: 'Assiette',
                                price: '5,99€'
                              }">
        </card-repair>   <card-repair :repair="{ img: 'accessoires/hideTwo.svg',
                                title: 'Epuisette',
                                price: '15,90€'
                              }">
        </card-repair>

      </div>
    </div>
  </main>
</template>

<script>
import navbar from '../components/product/navbar.vue'
import topbar from '../components/topbar.vue'
import cardRepair from '../components/card-repair.vue'

export default {
  name: 'repair',
  components: {
    navbar, topbar, cardRepair
  }
}
</script>

<style scoped lang="scss">
  main {
    height: 100vh;
    .cards-accessoire {
      margin: 0 auto;
      padding: 2vh;
      width: 90vw;
      display: grid;
      gap: 3vh;
      overflow: scroll;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      padding-bottom: 11vh;
      .card-accessoire {
        height: 25vh;
        border-radius: 12px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.126);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 24px;
        position: relative;
        .fav {
          &.red {
            color: #FF0000;
          }
          position: absolute;
          right: 2vh;
          top: 2vh;
          font-size: 1.3rem;
        }
        .img-accessoire {
          width: 12vh;
          height: 12vh;
          border-radius: 12px;
          margin-top: 3vh;
        }
        .title-accessoire {
          width: 120px;
          text-align: center;
        }
      }
    }
  }
</style>
