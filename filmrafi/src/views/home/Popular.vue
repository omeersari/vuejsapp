<template>
  <div class="popbody">
    <div class="popMovies" v-for="(item, i) in PopMovies" :key="i">
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Popular",
  computed: {
    ...mapGetters(["PopMovies", "genreList"]),
  },
  methods: {
    ...mapActions(["popularMovies"])
  },
  created() {
    this.popularMovies();
  }
};
</script>

<style>
.popbody {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}

.information {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: black;
  color: white;
  height: 100px;
  padding:5px;
}

.image {
  height: 300px;
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
  width:85%;
}

.genres {
  display: flex;
  justify-content: flex-start;
  font-size: 10px;
  width: 85%;
}

</style>
