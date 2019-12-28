import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import routes from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = store.getters['user/isLogin'];
  if (to.meta.access !== false && !isLogin) {
    return next({ name: 'Login' });
  }
  return next();
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
