<template>
  <div>
    <div class="navigation" :class="{ changeColor: scrollPosition > 200 }">
      <div :class="isDetail ? 'containerDetail' : 'container'">
        <div class="logo">
          <router-link to="/">
            <i class="fas fa-file-video"></i>
            <span class="text"> Filmrafi </span>
          </router-link>
        </div>

        <form class="search">
          <input
            type="text"
            @input="debounceInput"
            placeholder="Search a movie"
          />
        </form>

        <nav class="right">
          <router-link v-if="activeUser" to="/bookmarks" class="bookmarks">
            <i v-if="$route.name === 'BookMarks'" class="fas fa-bookmark"></i>
            <i v-else class="far fa-bookmark"></i>
            <span class="text">My Watchlist</span>
          </router-link>
          <a href="https://github.com/omeersari" class="github" target="_blank">
            <i class="fab fa-github"></i>
            <span class="text">Github</span>
          </a>
          <router-link v-if="!activeUser" to="/login"
            ><i class="fas fa-sign-in-alt"></i> <span class="text">Login</span>
          </router-link>
          <span v-else @click="logout"> Logout </span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from "vue-debounce";
import { mapGetters, mapMutations } from "vuex";

import firebase from "firebase";
export default {
  name: "Header",
  data() {
    return {
      query: "",
      scrollPosition: null
    };
  },
  methods: {
    ...mapMutations("auth", ["LOGOUT", "SET_USER"]),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.SET_USER(null);
          if (this.$route.path !== "/") {
            this.$router.replace("/");
          }
        });

      /*
      this.LOGOUT();
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }*/
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    debounceInput: debounce(function(e) {
      console.log(e.target.value)
      if (e.target.value !== "") {
        this.$store.dispatch("movies/Search", e.target.value);
        this.$router.push({ name: "Search", params: { query: e.target.value } })
      }
    }, 300)
  },
  computed: {
    ...mapGetters("auth", ["activeUser"]),
    isDetail() {
      if (this.$route.name === "Detail") {
        return true;
      } else return false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style scoped>
.navigation {
  background-color: #242038;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  transition: 300ms all;
}

.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  height: auto;
  padding: 1em;
  font-size: 20px;
}

.containerDetail {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  height: auto;
  padding: 1em;
  font-size: 20px;
}

.logo {
  justify-self: flex-start;
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
  border: 1px gray solid;
  border-radius: 10px;
}

.search i {
  background-color: rgb(248, 248, 248);
  display: grid;
  align-items: center;
  padding: 5px;
}

.right {
  display: flex;
  justify-content: flex-end;
}
.github {
  margin-right: 30px;
}

.bookmarks {
  margin-right: 30px;
}

.right span {
  cursor: pointer;
}

.changeColor {
  background-color: #f7ece1;
  color: black;
}

@media only screen and (max-width: 820px) {
  .logo {
    margin-right: 10px;
  }
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
