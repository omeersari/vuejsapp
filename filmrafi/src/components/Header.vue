<template>
  <div>
    <div class="navigation">
      <div class="logo">
        <router-link to="/">
          <i class="fas fa-file-video"></i>
          <span class="text"> Filmrafi </span>
        </router-link>
      </div>

      <form class="search">
        <input type="text" placeholder="Search a movie" />
        <i class="fas fa-search"></i>
      </form>

      <nav class="right">
        <router-link v-if="activeUser" to="/bookmarks">
          <i v-if="$route.name === 'BookMarks'" class="fas fa-bookmark"></i>
          <i v-else class="far fa-bookmark"></i>
          <span class="text">My Watchlist</span>
        </router-link>
        <a href="https://github.com/omeersari" target="_blank">
          <i @click="searchMovie" class="fab fa-github"></i>
          <span class="text">Github</span>
        </a>
        <router-link v-if="!activeUser" to="/login"
          ><i class="fas fa-sign-in-alt"></i> <span class="text">Login</span>
        </router-link>
        <span v-else @click="LOGOUT"
        > Logout
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Header",
  components: {},
  methods: {
    ...mapMutations('auth', ['LOGOUT']),
    searchMovie() {}
  },
  computed: {
    ...mapGetters("auth", ["activeUser"])
  }

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
  background-color: #0f4c75;
  color: white;
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
}

.search i {
  background-color: rgb(248, 248, 248);
  display: grid;
  align-items: center;
  padding: 5px;
}

.right {
  display: flex;
  justify-content: space-evenly;
}
.text {
  margin-left: 5px;
}

.right span {
  cursor: pointer;
}


@media only screen and (max-width: 820px) {
  .search {
    justify-content: flex-start;
  }
  .search input {
    width: 150px;
    height: 38px;
  }
  .right {
    margin-left: 15px;
  }
  .right a {
    margin-right: 10px;
  }
  .text {
    display: none;
  }
}

/*
@media only screen and (max-width: 1005px) {

  .right {
    margin-left: 60px;
  }
  .right a {
    margin-right: 50px;
  }
  .text {
    display: none;
  }
}*/
</style>
