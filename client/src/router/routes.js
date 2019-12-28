export default [
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录',
      access: false,
    },
    component: () => import('@/views/Login'),
  },
];
