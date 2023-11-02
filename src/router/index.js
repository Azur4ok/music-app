import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageView from '@/views/ManageView.vue'
import useUserStore from '@/stores/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manage',
    name: 'manage',
    component: ManageView,
    beforeEnter: (to, from, next) => {
      console.log()
      next()
    },
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {name: 'home'}
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return;
  }

  const store = useUserStore()
  if (store.isLoggedIn) {
    next()
  } else {
    next({name: 'home'})
  }
})

export default router
