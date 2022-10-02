import { createRouter, createWebHistory } from 'vue-router'
import PaySlips from '../views/PaySlips.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'payslips',
      component: PaySlips
    },
  ]
})

export default router
