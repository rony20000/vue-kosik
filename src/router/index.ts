import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Cart from '../components/Cart.vue'
import DeliveryAndPayment from '../components/DeliveryAndPayment.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/kosik',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/doprava-a-platba',
    name: 'deliveryAndPayment',
    component: DeliveryAndPayment
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
