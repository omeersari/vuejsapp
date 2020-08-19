import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    AllMovies: []
  },
  getters: {
    Movies: state => state.AllMovies
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.AllMovies = movies
    }
  },
  actions: {
    async fetchMovies({ commit }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/550?api_key=c038ce1188345d8eaab23ae93ef8532d"
      );
      commit("SET_MOVIES", response);
    }
  },
  modules: {}
});
