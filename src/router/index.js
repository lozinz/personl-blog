import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // 地址默认指向
      redirect: '/home',
      children: [
        { path: 'home', name: 'home', component: () => import('../views/HomeView.vue') },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: 'text',
          name: 'text',
          component: () => import('../views/TextView.vue'),
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import('../views/DetailsView.vue'),
        },
      ],
    },
  ],
})

export default router
