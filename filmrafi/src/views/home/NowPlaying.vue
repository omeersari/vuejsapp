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
    </Container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Container from "@/components/Container";
import MovieCard from "@/components/MovieCard";
export default {
  name: "NowPlaying",
  components: {
    Container, MovieCard
  },
  computed: {
    ...mapGetters("movies", ["nowPlayingMovies"])
  },
  methods: {
    ...mapActions("movies", ["nowplaying"]),
  },
  created() {
    this.nowplaying();
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
    grid-template-columns: 1fr 1fr;
  }
}

</style>
