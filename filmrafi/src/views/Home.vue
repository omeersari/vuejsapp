<template>
  <div class="home">
    <div class="topButtons">
      <router-link to="/popular">Popular</router-link>
      <router-link to="/toprated">Top Rated</router-link>
      <router-link to="/nowplaying">Now Playing</router-link>
      <router-link to="/upcoming">Up coming</router-link>
    </div>
    <div class="myPage">
      <div class="body">
        <div class="latestMovie" v-if="$route.name === 'Home'">
          <h1>Latest Movie</h1>
          <div class="image">
            <img
              v-if="LastMovie.poster_path"
              :src="LastMovie.poster_path"
              alt=""
            />
            <img v-else src="@/assets/no-image.png" />
          </div>
          <div class="information">
            {{ LastMovie.title }}
            <template v-if="LastMovie.vote_average !== 0">{{
              LastMovie.vote_average
            }}</template>
            <p v-for="genres in LastMovie.genres" :key="genres.id">
              {{ genres.name }}
            </p>
          </div>
        </div>
        <div class="info" v-if="$route.name === 'Home'">
          <p> Welcome to Filmrafi. Here you can search for movies, look for popular, top-rated, now-playing and up-coming movies. By clicking
          on them you can find the details. With login, you can add a movie to your favourites. This app is designed by OmerSari for HTML, CSS AND VUE.js
          practise. You can simply click on GitHub tab at navbar to see my GitHub profile.</p>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["LastMovie"])
  },
  methods: {
    ...mapActions(["latestMovie", "genresList"])
  },
  created() {
    this.latestMovie();
    this.genresList();
  }
};
</script>

<style scoped>
.topButtons a {
  border: 1px solid black;
  padding: 10px;
  background-color: #423a2d;
  color: white;
  border-radius: 5px;
  margin-right: 5px;
}

.myPage {
  margin-top: 50px;
}

.body {
  display: flex;
  justify-content: space-between;
}

.latestMovie {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.info {
  width: 300px;
  margin-top: 45px;
}
.image {
  border-bottom: 1px solid black;
  background-color: white;
}
.image img {
  width: 100%;
  height: 300px;
}

.information {
  width: 100%;
  height: 80px;
  color: white;
  background-color: black;
  padding: 5px;
}

.router-link-active {
  background-color: #ffa004 !important;
}
</style>
