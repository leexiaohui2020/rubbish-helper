export default {
  state: {
    token: null,
  },

  getters: {
    isLogin(state) {
      return !!state.token;
    },
  },
};
