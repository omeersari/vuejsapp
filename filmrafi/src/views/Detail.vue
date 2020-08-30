<template>
  <div class="head">
  <div class="about" :style="`background-image: url(https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path})`"> </div>
    <h1 class="title">{{detailMovie.title}}</h1>
    <div class="movie">
      <img class="poster" :src="`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`" />
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

.head {
  position: relative;
  z-index: 1;
  background-color: blue;
}
.head .about {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.6;
  width: 100%;
  height: 100%;
}

.title {
  color: white;
  padding: 1em;
}

.movie {
  margin-left: 35px;
}
.poster {
  width: 200px;
  height: 300px;
}


</style>
