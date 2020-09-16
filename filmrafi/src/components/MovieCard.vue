<template>
  <div class="popMovies" @click="gotoDetails(movie.id)">
    <div class="image" v-if="movie.poster_path">
      <img :src="`${API.IMAGE_URL}${movie.poster_path}`" />
    </div>
    <div class="noPhoto" v-else>
      NO PHOTO
    </div>
    <div class="information">
      <span class="title">
        {{ movie.title }}
      </span>
      <span class="rate">
        {{ movie.vote_average }}
      </span>
    </div>
  </div>
</template>

<script>
import API from "../../api";
export default {
  name: "MovieCard",
  data() {
    return {
      API
    }
  },
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
  justify-content: space-between;
  background-color: black;
  color: white;
  height: 100px;
  padding: 10px;
  align-items: center;
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


.noPhoto{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  color: black;
  font-weight: bold;
  height: 300px;
}

.rate {
  border-radius: 50%;
  background-color: #242038;
  color: white;
  padding-top: 10px;
  border: 1px solid white;
  width: 48px;
  height: 48px;
  text-align: center;
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
