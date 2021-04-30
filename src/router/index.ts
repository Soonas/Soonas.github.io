import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Simulation from '../pages/Simulation/index.vue'
import Loan from '../pages/Loan/index.vue'
import Details from '../pages/Details/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Simulation',
    component: Simulation
  },
  {
    path: '/loan',
    name: 'Loan',
    component: Loan
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
