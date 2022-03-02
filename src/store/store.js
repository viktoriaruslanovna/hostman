import { createStore } from 'vuex';

export default createStore({
  state: () => {
    authorization: false;
  },
  getters: {},
  mutations: {
    setAuthorization(state, data) {
      state.authorization = data;
    },
  },
});
