import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/post',
    name: 'PostQuestion',
    component: () => import('../views/PostQuestionPage.vue'),
  },
  {
    path: '/list',
    name: 'QuestionList',
    component: () => import('../views/QuestionList.vue'),
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('../views/MyPage.vue'),
  },
  {
    path: '/mypage/detail',
    name: 'MyDetailPage',
    component: () => import('../views/MyDetailPage.vue'),
  },
  {
    path: '/detail',
    name: 'DetailPage',
    component: () => import('../views/DetailPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
