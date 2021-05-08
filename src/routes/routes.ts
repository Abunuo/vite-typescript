/**
 * 加载各组件的 route.js
 * 
 */
import {RouteRecordRaw} from 'vue-router';

import MainLayout from '../layout/Main/index.vue'
import NotFound from '../views/not-found/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/main/report"
  }, {
    name: 'MainLayout',
    path: '/main',
    redirect: "/main/report",
    component: MainLayout,
    children: [
      {
        name: 'Report',
        path: 'report',
        component: () => import('../views/report/index.vue')
      }
    ]
  }, {
    name: 'NotFound',
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

export default routes;

