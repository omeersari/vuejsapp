<template>
  <div>
    <Container>
      <div class="popbody">
        <MovieCard
          v-for="item in topRated"
          :key="item.id"
          :movie="item"
        ></MovieCard>
      </div>
    </Container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Container from "@/components/Container";
import MovieCard from "@/components/MovieCard";
export default {
  name: "TopRated",
  components: {
    Container,
    MovieCard
  },
  computed: {
    ...mapGetters("movies", ["topRated"])
  },
  methods: {
    ...mapActions("movies", ["topRatedMovies"]),
  },
  created() {
    this.topRatedMovies();
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
