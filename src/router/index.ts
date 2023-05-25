import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import {isNotLoggedIn} from "@/router/middlewares/isNotLoggedIn";
import {isLoggedIn} from "@/router/middlewares/isLoggedIn";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      beforeEnter: [isNotLoggedIn],
      component: LoginView
    },
    {
      path: '/game',
      name: 'game',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      beforeEnter: [isLoggedIn],
      component: () => import('../views/GameView.vue')
    }
  ]
})

export default router
