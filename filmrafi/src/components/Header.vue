<template>
  <div>
    <div class="navigation">
      <div class="logo">
        <router-link to="">
          <i class="fas fa-file-video"></i>
          Filmrafi
        </router-link>
      </div>

      <form class="search"><input type="text" placeholder="Search a movie" /> <i class="fas fa-search"></i> </form>

      <nav class="right">
        <router-link to="">
          <i class="far fa-bookmark"></i>
          <i class="fas fa-bookmark"></i>
          My Favorites</router-link
        >
        <router-link to="">
          <i class="fab fa-github"></i>
          Github</router-link
        >
        <router-link to=""><i class="fas fa-sign-in-alt"></i> Login</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {}
};
</script>

<style scoped>
.navigation {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: auto;
  padding: 1em;
  font-size: 20px;
  background-color: #feb236;
}

.logo {
  justify-self: start;
  margin-left: 5px;
  font-size: 30px;
}

.search {
  display: flex;
  justify-content: center;
}
.search input {
  padding: 1em;
  padding-left: 20px;
  width: 342px;
  height: 38px;
  border-radius: 4px;
}

.search i {
  background-color: white;
  display: grid;
  align-items: center;
  padding-right: 7px;
}

.right {
  display: flex;
  justify-content: space-evenly;
}
</style>
