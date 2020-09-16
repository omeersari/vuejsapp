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
      <template v-if="this.$route.name !== 'Home'">
        <Pagination :pageNumber=parseInt(this.$route.params.page) @changeRoute="changeRoute" />
      </template>
    </Container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import Container from "@/components/Container";
export default {
  name: "Popular",
  components: {
    MovieCard,
    Container,
    Pagination
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("movies", ["PopMovies"])
  },
  methods: {
    ...mapActions("movies", ["popularMovies", "getDetail"]),
    changeRoute(page) {
      this.$router.replace({ params: { page } });
    },
    getPop() {
      this.popularMovies(this.$route.params.page);
    }
  },
  created() {
    this.getPop();
  }
};
</script>

<style>
.popbody {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  justify-items: center;
  background-color: rgba(202, 196, 206, 0.4);
  padding: 20px;
}

@media only screen and (max-width: 820px) {
  .popbody {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
