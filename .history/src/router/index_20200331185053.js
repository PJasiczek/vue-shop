import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Search',
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
