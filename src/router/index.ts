import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TopPage',
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
    name: '質問投稿',
    component: () => import('../views/PostQuestionPage.vue'),
  },
  {
    path: '/list',
    name: '質問一覧',
    component: () => import('../views/QuestionList.vue'),
  },
  {
    path: '/mypage',
    name: 'マイページ',
    component: () => import('../views/MyPage.vue'),
  },
  {
    path: '/mypage/detail',
    name: '自分の質問詳細',
    component: () => import('../views/MyDetailPage.vue'),
  },
  {
    path: '/detail',
    name: '質問詳細',
    component: () => import('../views/DetailPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
