<template>
  <div class="home">
    <div class="main" v-if="!getStarted">
      <h1>Morleng</h1>
      <p>There are more languages in the world than these stars you see now.</p>
      <h5>Why don't you start learning one of them right now ?</h5>
      <button @click="goToLogin">Get Started</button>
    </div>
    <small class="by">
      <a href="https://www.instagram.com/_shotinraw/"
        >Photo by Juan from Pexels</a
      ></small
    >
    <Login v-if="getStarted" @goBack="comeBack" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login";

export default {
  name: "Home",
  data() {
    return {
      getStarted: false
    }
  },
  components: {
    Login,
  },
  methods: {
    goToLogin() {
      this.getStarted = true
    },
    comeBack() {
      this.getStarted = false
    }
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  background-image: url("../../assets/background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.by {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.by a {
  text-decoration: none;
  color: white;
  transition: 300ms all;
}

.by a:hover {
  text-decoration: underline;
}

.main {
  color: white;
}

.main h1 {
  margin-top: 0px;
  margin-bottom: 50px;
  text-transform: uppercase;
  font-family: "Courgette", cursive;
}

.main p {
  font-size: 22px;
  font-weight: bold;
  font-family: "Courgette", cursive;
}

.main h5 {
  font-family: "Courgette", cursive;
}

button {
  margin-top: 15px;
  padding: 1rem;
  border: 2px solid white;
  border-radius: 3px;
  color: white;
  text-transform: uppercase;
  background-color: rgba(143, 173, 185, 0.1);
  font-weight: bold;
  transition: 300ms all;
  font-family: "Courgette", cursive;
}

button:hover {
  background-color: black;
  cursor: pointer;
}
</style>
