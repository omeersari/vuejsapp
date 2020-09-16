<template>
  <div class="mainRec" v-if="rec.length > 0">
    <h1>RECOMMENDATIONS</h1>
    <div class="rec">
        <MovieCard
            v-for="item in rec"
            :key="item.id"
            :movie="item"
        ></MovieCard>
     </div>
    </div>

</template>

<script>
import API from "../../api";
import MovieCard from "@/components/MovieCard";
export default {
name: "Rec",
  props: {
    rec: {
      type: Array,
      required: true
    }
  },
  components: {
    MovieCard
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
  margin: 20px auto;
  width: 90%;
  color: white;
  background-color: rgba(202, 196, 206, 0.4);
  padding: 20px;
}

.rec {
  width: 80%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  justify-items: center;
}

.image img {
  width: 100%;
  height: 300px;
}


@media only screen and (max-width: 820px) {
  .rec {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>