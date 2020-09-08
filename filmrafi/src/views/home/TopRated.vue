<template>
  <div class="popbody">
    <div
      class="popMovies"
      v-for="(item, i) in topRated"
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TopRated",
  computed: {
    ...mapGetters("movies", ["topRated"])
  },
  methods: {
    ...mapActions("movies", ["topRatedMovies"]),
    gotoDetails(id) {
      this.$router.push({ name: "Detail", params: { id } });
    }
  },
  created() {
    this.topRatedMovies();
  }
};
</script>

<style scoped></style>
