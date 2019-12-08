import Vue from 'vue'
import VueRouter from 'vue-router'
import TestOverview from '@/views/TestOverview.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'test-overview',
    component: TestOverview
  },
  {
    path: '/test/:id/edit', // dynamic route
    name: 'test-edit', // this can be referenced with :to="{ name: 'home' }"
    // props: true,
    // passes the $route.params to the component as props
    // https://router.vuejs.org/api/#route-object-properties
    // seems redundant as $route.params are still seen in Vue console
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "show" */ '@/views/TestEdit.vue')
  },
  {
    path: '/test/:id/run',
    name: 'test-run',
    props: true,
    component: () => import('@/views/TestRun.vue')
  },
  {
    path: '/test/create',
    name: 'test-create',
    component: () => import('@/views/TestCreate.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  }
];

const router = new VueRouter({
  // always use index.html - see:
  // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  // https://router.vuejs.org/guide/essentials/history-mode.html#caveat (404 page)
  base: process.env.BASE_URL,
  // use history.pushState API rather than hash mode (removes leading /#)
  mode: 'history',
  routes
});

export default router;
