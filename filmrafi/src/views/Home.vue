<template>
  <div class="home">
    <Container>
      <div class="topButtons">
        <router-link :to="{ name: 'Popular', params: { page: 1 } }"
          >Popular</router-link
        >
        <router-link :to="{ name: 'TopRated', params: { page: 1 } }"
          >Top Rated</router-link
        >
        <router-link :to="{ name: 'NowPlaying', params: { page: 1 } }"
          >Now Playing</router-link
        >
        <router-link :to="{ name: 'Upcoming', params: { page: 1 } }"
          >Up coming</router-link
        >
      </div>
      <div v-if="this.$route.name === 'Home'">
        <Popular />
      </div>
      <router-view />
    </Container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Popular from "@/views/home/Popular";
import Container from "@/components/Container";

export default {
  name: "Home",
  components: { Popular, Container },
  computed: {
    ...mapGetters("auth", ["activeUser"])
  },
  methods: {
    ...mapActions("movies", ["genresList", "WatchList", "popularMovies"]),
    myList() {
      this.WatchList();
    }
  },
  created() {
    this.genresList();
    if (this.activeUser) {
      this.myList();
    };
    this.popularMovies(1)
  }
};
</script>

<style scoped>
.home {
  margin-top: 90px;
}

.topButtons a {
  border: 1px solid black;
  padding: 10px;
  background-color: #cac4ce;
  color: #242038;
  border-radius: 5px;
  margin-right: 5px;
  transition: 300ms all;
}

.topButtons a:hover {
  background-color: white;
  color: black;
}

.myPage {
  margin-top: 50px;
}

.latestMovie {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image img {
  width: 100%;
  height: 300px;
}

.router-link-active {
  background-color: #725ac1 !important;
  color: white !important;
}

@media only screen and (max-width: 820px) {
  .topButtons {
    display: flex;
    justify-content: center;
  }
  .topButtons a {
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    margin-right: 2px;
  }
}
</style>
