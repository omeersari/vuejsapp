<template>
  <div class="home">
    <Container>
      <div class="topButtons">
        <router-link to="/popular">Popular</router-link>
        <router-link to="/toprated">Top Rated</router-link>
        <router-link to="/nowplaying">Now Playing</router-link>
        <router-link to="/upcoming">Up coming</router-link>
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
import { mapActions } from "vuex";
import Popular from "@/views/home/Popular";
import Container from "@/components/Container";

export default {
  name: "Home",
  components: { Popular, Container },
  computed: {},
  methods: {
    ...mapActions("movies", ["genresList"])
  },
  created() {
    this.genresList();
  }
};
</script>

<style scoped>
.topButtons a {
  border: 1px solid black;
  padding: 10px;
  background-color: #0f4c75;
  color: white;
  border-radius: 5px;
  margin-right: 5px;
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
  background-color: #bbe1fa !important;
}

@media only screen and (max-width: 820px) {
  .topButtons {
    display: flex;
    justify-content: center;
  }
  .topButtons a {
    border: 1px solid black;
    padding: 5px;
    background-color: #0f4c75;
    color: white;
    border-radius: 5px;
    margin-right: 2px;
  }
}
</style>
