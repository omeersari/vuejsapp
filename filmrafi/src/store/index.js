import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    PopularMovies: [],
    latestMovie: {},
    Types: [],
    TopRated: [],
    upComing: [],
    nowPlaying: [],

  },
  getters: {
    PopMovies: state => state.PopularMovies,
    LastMovie : state => state.latestMovie,
    genreList: state => state.Types,
    topRated: state => state.TopRated,
    upComingMovies: state => state.upComing,
    nowPlayingMovies: state => state.nowPlaying
  },
  mutations: {
    POPULAR_MOVIES(state, movies) {
      state.PopularMovies = movies;
    },
    LATEST_MOVIE(state, latest) {
      state.latestMovie = latest
    },
    GENRES_LIST(state, genres) {
      state.Types = genres;
    },
    TOP_RATED_MOVIES(state, response) {
      state.TopRated = response
    },
    UPCOMING(state, response) {
      state.upComing = response
    },
    NOW_PLAYING(state, response) {
      state.nowPlaying = response
    }
  },
  actions: {
    async genresList ({commit}) {
      const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US"
      );
      commit("GENRES_LIST", response.data)
    },
    async popularMovies({ commit }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=2"
      );
      commit("POPULAR_MOVIES", response.data.results);
    },
    async latestMovie({ commit }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/latest?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US"
      );
      commit("LATEST_MOVIE", response.data);
    },
    async topRatedMovies ({ commit}) {
      const response = await axios.get("" +
          "https://api.themoviedb.org/3/movie/top_rated?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=1");
      commit("TOP_RATED_MOVIES", response.data.results)
    },
    async upcoming({ commit}) {
      const response = await axios.get("" +
          "https://api.themoviedb.org/3/movie/upcoming?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=1");
      commit("UPCOMING", response.data.results)
    },
    async nowplaying({ commit}) {
      const response = await axios.get("" +
          "https://api.themoviedb.org/3/movie/now_playing?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=1");
      commit("NOW_PLAYING", response.data.results)
    },







  },
  modules: {}
});
