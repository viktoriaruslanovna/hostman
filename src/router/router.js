import Home from '@/pages/Home';
import PostPage from '@/pages/PostPage';
import CurrentPostPage from '@/pages/CurrentPostPage';
import ComeIn from '@/pages/ComeIn';

import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/post',
    component: PostPage,
  },
  {
    path: '/post/:id',
    component: CurrentPostPage,
  },
  {
    path: '/login',
    component: ComeIn,
  },
  {
    path: '/signup',
    component: ComeIn,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URl),
});

export default router;
