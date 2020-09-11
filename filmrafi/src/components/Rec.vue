<template>
  <div class="mainRec">
    <h1>RECOMMENDATIONS</h1>
    <div class="rec">
      <div class="popMovies" v-for="item in rec" :key="item.id" @click="gotoDetails(item.id)">
        <div class="image">
          <img :src="`${API.IMAGE_URL}${item.poster_path}`" />
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
  </div>

</template>

<script>
import API from "../../api";
export default {
name: "Rec",
  props: {
    rec: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      API
    }
  },
  methods: {
    gotoDetails(id) {
      this.$router.push( {name: "Detail", params: {id}})
    }
  }
}
</script>

<style scoped>

.mainRec {
  width: 90%;
  margin: 40px auto 20px auto;
}

.mainRec h1 {
  color: white;
  margin-bottom: 20px;
}

.rec {
  display: grid;
  width: 70%;
  margin: 40px auto 20px auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
}
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
  .rec {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
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