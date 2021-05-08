import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes';
/*
    mode： createWebHashHistory(#)(default)、createWebHistory、createMemoryHistory
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

router.beforeEach((to, _from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next();
    return;
  }
  next()
})

export default router;
