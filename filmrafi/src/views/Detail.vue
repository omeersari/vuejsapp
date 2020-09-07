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
          <span class="genres">{{ genres.name }}</span>
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
            <button class="myButton">  <i class="far fa-bookmark"></i>Add To Watch List</button>
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
    <Rec :rec="movieRec" />
    <router-view></router-view>
  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import API from "../../api";
import Cast from "@/components/Cast";
import Galery from "@/components/Galery";
import Rec from "@/components/Rec";
export default {
  name: "Detail",
  components: {
    Cast,
    Galery,
    Rec
  },
  data() {
    return {
      API
    };
  },
  computed: {
    ...mapGetters(["detailMovie", "movieCast", "movieGalery", "movieRec"])
  },
  methods: {
    ...mapActions(["getDetail", "getCast", "getGalery", "getRec"])
  },
  created() {
    this.getDetail(this.$route.params.id);
    this.getCast(this.$route.params.id);
    this.getGalery(this.$route.params.id);
    this.getRec(this.$route.params.id)
  }
};
</script>

<style scoped>
.head {
  position: relative;
  z-index: 1;
  height: 500px;
  background-color: lightskyblue;
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
  opacity: 0.9;
  width: 100%;
  height: 500px;
}

.title {
  color: white;
  padding: 1em;
}

.genres {
  display: inline;
  margin-left: 5px;
  font-size: 16px;
  background-color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 10px;
  padding: 1px;
  color: #212529;
}

.movie {
  margin-left: 15px;
  color: white;
  font-weight: bold;
}

.right {
  margin-left: 300px;
}

.myButton {
  padding: 1em;
  margin-left: 30px;
  background-color: lightgreen;
  border: 1px green solid;
  border-radius: 10px;
  font-weight: bold;
}

.myButton i {
  margin-right: 5px;
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

@media only screen and (max-width: 820px) {
 .head {
   height: auto;
 }
  .head .about {
    height: auto;
  }
}
</style>
