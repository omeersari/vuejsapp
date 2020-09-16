<template>
  <div>
    <Container>
      <div class="popbody">
        <MovieCard
          v-for="item in nowPlayingMovies"
          :key="item.id"
          :movie="item"
        ></MovieCard>
      </div>
      <Pagination :pageNumber="this.$route.params.page" @changeRoute="changeRoute" />
    </Container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Container from "@/components/Container";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
export default {
  name: "NowPlaying",
  components: {
    Container,
    MovieCard,
    Pagination
  },
  computed: {
    ...mapGetters("movies", ["nowPlayingMovies"])
  },
  methods: {
    ...mapActions("movies", ["nowplaying"]),
    changeRoute(page) {
      this.$router.replace({params: {page}})
    },
    getPop() {
      this.nowplaying(this.$route.params.page);
    }
  },
  created() {
    this.getPop();
  }
};
</script>

<style scoped>
.popbody {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
}

@media only screen and (max-width: 820px) {
  .popbody {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
