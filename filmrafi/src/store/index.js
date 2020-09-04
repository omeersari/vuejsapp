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
    detailMovie: {},
    castOfMovie: [],
    galeryOfMovie: [],
  },
  getters: {
    PopMovies: state => state.PopularMovies,
    LastMovie : state => state.latestMovie,
    genreList: state => state.Types,
    topRated: state => state.TopRated,
    upComingMovies: state => state.upComing,
    nowPlayingMovies: state => state.nowPlaying,
    detailMovie: state => state.detailMovie,
    movieCast: state => state.castOfMovie,
    movieGalery: state => state.galeryOfMovie
  },
  mutations: {
    POPULAR_MOVIES(state, movies) {
      state.PopularMovies = movies;
    },
    GET_DETAIL(state, detail) {
      state.detailMovie = detail
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
    },
    GET_CAST(state, response) {
      state.castOfMovie = response.cast.filter((item) => item.profile_path !== null)
    },
    GET_GALERY(state, response) {
      state.galeryOfMovie = response.backdrops.filter((item) => item.iso_639_1 === null).map((item) => item.file_path)
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
        "https://api.themoviedb.org/3/movie/popular?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=1"
      );
      commit("POPULAR_MOVIES", response.data.results);
    },
    async getDetail({ commit }, id) {
      const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US`
      );
      commit("GET_DETAIL", response.data);
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
    async getCast ({commit}, id) {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c038ce1188345d8eaab23ae93ef8532d`);
      commit("GET_CAST", response.data)
    },
    async getGalery ({commit}, id) {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=c038ce1188345d8eaab23ae93ef8532d`);
      commit("GET_GALERY", response.data)
      console.log(response.data)
    }
  },
  modules: {}
});
