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
      <Pagination :pageNumber="this.$route.params.page" @changeRoute="changeRoute"/>
    </Container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Container from "@/components/Container";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
export default {
  name: "TopRated",
  components: {
    Container,
    MovieCard,
    Pagination
  },
  computed: {
    ...mapGetters("movies", ["topRated"])
  },
  methods: {
    ...mapActions("movies", ["topRatedMovies"]),
    changeRoute(page) {
      this.$router.replace({params: {page}})
    },
    getPop() {
      this.topRatedMovies(this.$route.params.page)
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
