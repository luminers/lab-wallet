import { createStore } from "vuex";

export default createStore({
  state: {
    Id: "",
    Cripto: "",
    loggedIn: false,
  },
  getters: {},
  mutations: {
    loggedIn(state) {
      state.loggedIn = true;
    },
  },
  actions: {
    mockLogin(context) {
      context.commit("loggedIn");
    },
  },
});
