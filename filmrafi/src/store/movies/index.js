import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";

Vue.use(Vuex);
const movies = {
  namespaced: true,
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
    recommadations: [],
    search: [],
    WatchList: [],
    isLoading: false
  },
  getters: {
    PopMovies: state => state.PopularMovies,
    LastMovie: state => state.latestMovie,
    genreList: state => state.Types,
    topRated: state => state.TopRated,
    upComingMovies: state => state.upComing,
    nowPlayingMovies: state => state.nowPlaying,
    detailMovie: state => state.detailMovie,
    movieCast: state => state.castOfMovie,
    movieGalery: state => state.galeryOfMovie,
    movieRec: state => state.recommadations,
    searchResults: state => state.search,
    watchList: state => state.WatchList
  },
  mutations: {
    POPULAR_MOVIES(state, movies) {
      state.PopularMovies = movies;
    },
    GET_DETAIL(state, detail) {
      detail.isListed = false;
      state.detailMovie = detail;
    },
    GENRES_LIST(state, genres) {
      state.Types = genres;
    },
    TOP_RATED_MOVIES(state, response) {
      state.TopRated = response;
    },
    UPCOMING(state, response) {
      state.upComing = response;
    },
    NOW_PLAYING(state, response) {
      state.nowPlaying = response;
    },
    GET_CAST(state, response) {
      state.castOfMovie = response.cast.filter(
        item => item.profile_path !== null
      );
    },
    GET_GALERY(state, response) {
      state.galeryOfMovie = response.backdrops
        .filter(item => item.iso_639_1 === null)
        .map(item => item.file_path);
    },
    GET_REC(state, payload) {
      state.recommadations = payload.results;
    },
    GET_RESULTS(state, payload) {
      state.search = payload.results;
    },
    GET_FAV_LIST(state, payload) {
      state.WatchList = payload;
    },
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    async genresList({ commit }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US"
      );
      commit("GENRES_LIST", response.data);
    },
    async popularMovies({ commit }, page) {
      commit("SET_LOADING", true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=${page}`
      );
      commit("POPULAR_MOVIES", response.data.results);
      commit("SET_LOADING", false);
    },
    async getDetail({ commit }, id) {
      commit("SET_LOADING", true);
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US`
        )
        .then(response => {
          commit("GET_DETAIL", response.data);
        });
      //commit("GET_DETAIL", response.data);
      commit("SET_LOADING", false);
    },
    async topRatedMovies({ commit }, page) {
      commit("SET_LOADING", true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=${page}`
      );
      commit("SET_LOADING", false);
      commit("TOP_RATED_MOVIES", response.data.results);
    },
    async upcoming({ commit }, page) {
      commit("SET_LOADING", true);
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=${page}`
        )
        .then(response => {
          commit("UPCOMING", response.data.results);
        });
      commit("SET_LOADING", false);
    },
    async nowplaying({ commit }, page) {
      commit("SET_LOADING", true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=${page}`
      );
      commit("SET_LOADING", false);
      commit("NOW_PLAYING", response.data.results);
    },
    async getCast({ commit }, id) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c038ce1188345d8eaab23ae93ef8532d`
      );
      commit("GET_CAST", response.data);
    },
    async getGalery({ commit }, id) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=c038ce1188345d8eaab23ae93ef8532d`
      );
      commit("GET_GALERY", response.data);
    },
    async getRec({ commit }, id) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=1`
      );
      commit("GET_REC", response.data);
    },
    async Search({ commit }, query) {
      commit("SET_LOADING", true);
      if (query !== "") {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=c038ce1188345d8eaab23ae93ef8532d&language=en-US&page=1&include_adult=false&query=${query}`
        );
        commit("SET_LOADING", false);
        commit("GET_RESULTS", response.data);
      }
    },
    async WatchList({ commit }) {
      let myWatchList = await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("watchlist");
      myWatchList.onSnapshot(snap => {
        const favs = [];
        snap.forEach(doc => {
          let movie = doc.data();
          movie.id = doc.id;
          favs.push(movie);
        });
        commit("GET_FAV_LIST", favs);
      });
    }
  },
  modules: {}
};

export default movies;
