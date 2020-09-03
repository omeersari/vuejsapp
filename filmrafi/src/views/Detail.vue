<template>
  <div>
    <div class="head">
      <div
        class="about"
        :style="
          `background-image: url(${API.IMAGE_URL}${detailMovie.backdrop_path})`
        "
      ></div>
      <div class="title">
        <h1>{{ detailMovie.title }}</h1>
        <small v-for="(genres, id) in detailMovie.genres" :key="id">
          {{ genres.name }} |
        </small>
      </div>
      <div class="movie">
        <div class="left">
          <img
            class="poster"
            :src="`${API.IMAGE_URL}${detailMovie.poster_path}`"
          />
        </div>
        <div class="right">
          <small> Release Date: {{ detailMovie.release_date }} </small>
          <small> Duration: {{ detailMovie.runtime }} min</small>
          <span class="imdb">
            <img src="../assets/imdb.png" style="width: 65px; height: auto" />
            <p>{{ detailMovie.vote_average }}</p>
          </span>
          <h4 style="font-style: italic; margin-top: 15px;">
            {{ detailMovie.tagline }}
          </h4>
          <h1>Overview</h1>
          <p>{{ detailMovie.overview }}</p>
        </div>
      </div>
    </div>
    <Cast :cast="movieCast" />
    <Galery :galery="movieGalery" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import API from "../../api";
import Cast from "@/components/Cast";
import Galery from "@/components/Galery";
export default {
  name: "Detail",
  components: {
    Cast,
    Galery
  },
  data() {
    return {
      API
    };
  },
  computed: {
    ...mapGetters(["detailMovie", "movieCast", "movieGalery"])
  },
  methods: {
    ...mapActions(["getDetail", "getCast", "getGalery"])
  },
  created() {
    this.getDetail(this.$route.params.id);
    this.getCast(this.$route.params.id);
    this.getGalery(this.$route.params.id);
  }
};
</script>

<style scoped>
.head {
  position: relative;
  z-index: 1;
  background-color: blue;
  height: 500px;
}
.head .about {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.6;
  width: 100%;
  height: 500px;
}

.title {
  color: white;
  padding: 1em;
}

.movie {
  margin-left: 15px;
  color: white;
  font-weight: bold;
}

.right {
  margin-left: 300px;
}

.left {
  float: left;
  clear: both;
}

.poster {
  width: 200px;
  height: 300px;
}

.imdb {
  display: flex;
  justify-content: flex-start;
}

.imdb p {
  background-color: black;
  border: 0.5px solid darkblue;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  text-align: center;
  padding-top: 10px;
  color: gold;
  margin-left: 15px;
}
</style>
