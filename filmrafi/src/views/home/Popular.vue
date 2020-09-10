<template>
  <div>
  <Container>
  <div class="popbody">
    <MovieCard
      v-for="item in PopMovies"
      :key="item.id"
      :movie="item"
    ></MovieCard>
  </div>
  </Container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieCard from "@/components/MovieCard";
import Container from "@/components/Container";
export default {
  name: "Popular",
  components: {
    MovieCard,
    Container
  },
  computed: {
    ...mapGetters("movies", ["PopMovies"])
  },
  methods: {
    ...mapActions("movies", ["popularMovies", "getDetail"]),
  },
  created() {
    this.popularMovies();
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
