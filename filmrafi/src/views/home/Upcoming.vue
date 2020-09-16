<template>
  <div>
    <Container>
      <div class="popbody">
        <MovieCard
          v-for="item in upComingMovies"
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
import MovieCard from "@/components/MovieCard";
import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
export default {
  name: "Upcoming",
  data() {
    return {
      page: 1
    };
  },
  components: {
    MovieCard,
    Container,
    Pagination
  },
  computed: {
    ...mapGetters("movies", ["upComingMovies"])
  },
  methods: {
    ...mapActions("movies", ["upcoming"]),
    changeRoute(page) {
      this.$router.replace({params: {page}})
    },
    getPop() {
      this.upcoming(this.$route.params.page)
    }
  },
  created() {
    this.getPop();
  },

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
