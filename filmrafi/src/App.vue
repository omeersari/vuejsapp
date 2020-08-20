<template>
  <div id="app">
    <Header />
    <Container>
      <router-view />
    </Container>
  </div>
</template>


<script>
import Container from "@/components/Container";
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Container,
    Header
  }
}
</script>

<style>

* {
  margin:0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color:inherit;
}
#app {
  font-family: 'Baloo Tamma 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

body {
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Baloo Tamma 2', cursive;
  background-color: #f2c67e;
}

</style>
