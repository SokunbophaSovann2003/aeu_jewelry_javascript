import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ring',
      name: 'ring',
      component: () => import('../views/ring/RingView.vue')
    },
    {
      path: '/earring',
      name: 'earring',
      component: () => import('../views/EarringView.vue')
    },
    {
      path: '/ring-detail',
      name: 'ringDetail',
      component: () => import('../views/ring/RingDetail.vue')
    },
    {
      path: '/necklace',
      name: 'necklace',
      component: () => import('../views/necklace/NecklaceView.vue')
    },
    {
      path: '/necklace-detail',
      name: 'necklaceDetail',
      component: () => import('../views/necklace/NecklaceDetail.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/WishlistView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/ShoppingCartView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: () => import('../views/ForgetPasswordView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
