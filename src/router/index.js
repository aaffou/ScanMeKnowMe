import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ValidationView from '../views/ValidationView.vue'
import ProductView from '../views/ProductView.vue'
import PieceView from '../views/PieceView.vue'
import RepairView from '../views/RepairView.vue'
import DiscoverView from '../views/DiscoverView.vue'
import AccessoiresView from '../views/AccessoiresView.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab)
library.add(fas)
library.add(far)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }, {
    path: '/product',
    name: 'product',
    component: ProductView
  }, {
    path: '/validation',
    name: 'validation',
    component: ValidationView
  }, {
    path: '/piece',
    name: 'piece',
    component: PieceView
  }, {
    path: '/discover',
    name: 'discover',
    component: DiscoverView
  }, {
    path: '/repair',
    name: 'repair',
    component: RepairView
  }, {
    path: '/accessoire',
    name: 'accessoire',
    component: AccessoiresView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
