<template>
  <Container>
    <div>
      <h1>SEARCH RESULTS</h1>
      <div class="popbody">
        <MovieCard
          v-for="item in searchResults"
          :key="item.id"
          :movie="item"
        ></MovieCard>
      </div>
    </div>
  </Container>
</template>

<script>
import { mapGetters } from "vuex";
import MovieCard from "@/components/MovieCard";
import Container from "@/components/Container";
export default {
  name: "Search",
  components: {
    MovieCard,
    Container
  },
  computed: {
    ...mapGetters("movies", ["searchResults"])
  }
};
</script>

<style scoped>
.popbody {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
}

h1 {
  color: white;
}

@media only screen and (max-width: 820px) {
  .popbody {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>
