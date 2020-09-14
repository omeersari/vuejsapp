import Vue from "vue";
import Vuex from "vuex";


import auth from "./auth";
import movies from "./movies";

/*
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

*/

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    movies
  },
  //plugins: [vuexLocal.plugin]
});
