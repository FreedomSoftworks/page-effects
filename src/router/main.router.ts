import { createRouter, createWebHistory } from 'vue-router';
import HomeVue from 'src/components/pages/home/Home.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeVue,
    },
  ],
});
