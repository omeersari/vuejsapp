<template>
  <div class="popMovies" @click="gotoDetails(movie.id)">
    <div class="image">
      <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" />
    </div>
    <div class="information">
      <span class="rate">
        {{ movie.vote_average }}
      </span>
      <span class="title">
        {{ movie.title }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    gotoDetails(id) {
      this.$router.push({ name: 'Detail', params: {id}})
    }
  }
};
</script>

<style scoped>
.information {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: black;
  color: white;
  height: 100px;
  padding: 5px;
}

.image {
  height: 300px;
}
.popMovies {
  position: relative;
  top: 0;
  transition: top ease 0.5s;
  width: 200px;
  height: auto;
}
.popMovies:hover {
  top: -10px;
}
.image img {
  width: 100%;
  height: 300px;
}

.rate {
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 50%;
  background-color: black;
  color: yellow;
  padding: 5px;
}

.title {
  width: 85%;
}

.genres {
  display: flex;
  justify-content: flex-start;
  font-size: 10px;
  width: 85%;
}

@media only screen and (max-width: 820px) {
  .information {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: black;
    color: white;
    height: auto;
  }
  .image img {
    width: 100%;
    height: 300px;
  }
}
</style>
