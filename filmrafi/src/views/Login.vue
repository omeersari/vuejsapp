<template>
  <Container style="margin-top:100px">
    <div class="loginForm" v-if="isLoading">
      <h1>LOGIN</h1>
      <form class="login" @submit.prevent="onLogin">
        <label for="">Email</label>
        <input type="email" v-model="formModel.email" />
        <label for="">Password</label>
        <input type="password" v-model="formModel.password" />
        <button type="submit">LOGIN</button>
      </form>
      <div class="bottom">
        <p>Don't have an account ?</p>
        <p class="register" @click="goToRegister">Register.</p>
      </div>
      <p v-if="error" style="color: red">{{ error }}</p>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import { mapActions, mapMutations, mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      formModel: {
        email: "",
        password: ""
      },
      error: "",
      isLoading: true
    };
  },
  components: {
    Container
  },
  computed: {
    ...mapGetters("auth", ["activeUser"])
  },
  methods: {
    ...mapActions({
      login: "auth/login"
    }),
    ...mapMutations("movies", ["SET_LOADING"]),
    ...mapMutations("auth", ["SET_USER"]),
    onLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.formModel.email,
          this.formModel.password
        )
        .then(() => {
          this.SET_USER(true);
          this.$router.push("/");
        })
        .catch(err => (this.error = err));
      /*
      this.login(this.formModel)
      if (this.activeUser !== null) {
        this.$router.push('/')
      }else {
        this.error = "Login failed please try again"
        setTimeout( () => { this.error = "" }, 3000 )
      }*/
    },
    goToRegister() {
      this.isLoading = false
      this.SET_LOADING(true)
      setTimeout(() => this.$router.push({ path: "/register" }), 1000);
    }
  },
  created() {
    this.SET_LOADING(false)
  }
};
</script>

<style scoped>
.loginForm {
  border: 1px solid black;
  background-color: #cac4ce;
  width: 400px;
  padding: 30px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  color: black;
}

.loginForm h1 {
  text-align: center;
}

.loginForm p {
  display: flex;
  justify-content: center;
}
.login {
  width: 200px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.login label {
  font-size: 1.5em;
}
.login input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
}

.login button {
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 20px;
  margin-top: 10px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #33312d;
  color: white;
  transition: 300ms all;
}

.login button:hover {
  background-color: white;
  color: black;
}

.bottom {
  display: flex;
  justify-content: center;
}

.register {
  margin-left: 2px;
  text-decoration: underline;
  cursor: pointer;
}

@media only screen and (max-width: 820px) {
  .loginForm {
    width: 300px;
  }
  .loginForm p {
    display: inline;
  }
}
</style>
