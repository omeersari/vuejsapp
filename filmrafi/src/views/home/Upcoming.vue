<template>
  <div class="popbody">
    <div
      class="popMovies"
      v-for="(item, i) in upComingMovies"
      :key="i"
      @click="gotoDetails(item.id)"
    >
      <div class="image">
        <img :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`" />
      </div>
      <div class="information">
        <span class="rate">
          {{ item.vote_average }}
        </span>
        <span class="title">
          {{ item.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Upcoming",
  computed: {
    ...mapGetters("movies", ["upComingMovies"])
  },
  methods: {
    ...mapActions("movies", ["upcoming"]),
    gotoDetails(id) {
      this.$router.push({ name: "Detail", params: { id } });
    }
  },
  created() {
    this.upcoming();
  }
};
</script>

<style scoped></style>
