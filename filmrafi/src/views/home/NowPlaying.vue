<template>
  <div class="popbody">
    <div class="popMovies" v-for="(item, i) in nowPlayingMovies" :key="i" @click="gotoDetails">
      <div class="image">
        <img :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`"/>
      </div>
      <div class="information">
        <span class="rate">
            {{ item.vote_average }}
          </span>
        <span class="title">
          {{ item.title }}
        </span>
        <div class="genres">
          <p v-for="(name, i) in item.genre_ids" :key="i"> {{ name }}, </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "NowPlaying",
  computed: {
    ...mapGetters(["nowPlayingMovies"])
  },
  methods: {
    ...mapActions(["nowplaying"]),
    gotoDetails() {
      this.$router.push({ name: 'Detail'})
    }
  },
  created() {
    this.nowplaying()
  }


}
</script>

<style scoped>

</style>