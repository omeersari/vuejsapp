<template>
  <div class="about">
    <h1>This is an detail page</h1>
    <div>
      {{detailMovie.original_title}}
      <img :src="`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`" />
    </div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  name:"Detail",
  computed: {
    ...mapGetters(["detailMovie"])
  }
}
</script>

<style scoped>
img {
  width: 200px;
  height: 300px;
}
</style>
