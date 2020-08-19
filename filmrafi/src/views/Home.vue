<template>
  <div class="home">

    <router-link to="/popular">Popular</router-link>
    <router-link to="/toprated">Top Rated</router-link>
    <router-link to="/nowplaying">Now Playing</router-link>
    <router-link to="/upcoming">Up coming</router-link>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapGetters(["Movies"])
  }
};
</script>


<style scoped>

.home a {
  border: 1px solid black;
  padding: 10px;
  background-color: #423a2d;
  color:white;
  border-radius: 5px;
}

</style>
