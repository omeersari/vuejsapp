<template>
  <div id="app">
    <Header />
    <Spinner v-if="$store.state.movies.isLoading" />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
export default {
  name: "App",
  components: {
    Header,
    Spinner
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: "Baloo Tamma 2", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

body {
  font-size: 1rem;
  font-weight: normal;
  font-family: "Baloo Tamma 2", cursive;
  background-color: #242038;
  /*
  background-image: url("./assets/movie.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  */
   
}
</style>
