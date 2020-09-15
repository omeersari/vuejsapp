<template>
  <Container style="margin-top:100px">
    <div class="registerForm" v-if="isLoading">
      <h1>REGISTER</h1>
      <form class="login" @submit.prevent="onRegister">
        <label for="">Email</label>
        <input type="email" v-model="formModel.email" required />
        <label for="">Password</label>
        <input type="password" v-model="formModel.password" required />
        <button type="submit">REGISTER</button>
      </form>
      <div class="bottom">
        <p>Have an account ?</p>
        <p class="register" @click="goToLogin">Login.</p>
      </div>
      <p v-if="error" style="color:red;">{{ error }}</p>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import { mapActions, mapGetters, mapMutations } from "vuex";
import firebase from "firebase";

export default {
  name: "Register",
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
  methods: {
    ...mapActions({
      register: "auth/register",
      login: "auth/login",
    }),
    ...mapMutations('auth', ['SET_USER']),
    ...mapMutations("movies", ["SET_LOADING"]),
    onRegister() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formModel.email,
          this.formModel.password
        )
        .then(() => {
          this.SET_USER(true);
          this.$router.push("/");
        })
        .catch(err => (this.error = err));

      /*
      const index = this.userList.findIndex((obj) =>
          obj.email === this.formModel.email)
      if (index === -1) {
        this.register(this.formModel).then(() => {
          this.$router.push("/");
          this.login(this.formModel)
        });
      }else {
        this.error = "This email is already used"
        setTimeout( () => { this.error = "" }, 3000 )
      }*/
    },
    goToLogin() {
      this.isLoading = false
      this.SET_LOADING(true)
      setTimeout(() => this.$router.push({ path: "/login" }), 1000);
    }
  },
  computed: {
    ...mapGetters("auth", ["userList"])
  },
  created() {
    this.SET_LOADING(false)
  }
};
</script>

<style scoped>
.registerForm {
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

.registerForm h1 {
  text-align: center;
}

.registerForm p {
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
  background-color: #fff;
  color:black;
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
  .registerForm {
    width: 300px;
  }
  .registerForm p {
    display: inline;
  }
}
</style>
