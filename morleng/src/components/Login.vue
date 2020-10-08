<template>
  <div class="login">
    <a @click="goBack">Go back</a>
    <div class="formRegister">
      <h1>{{ isLogin ? "Sign in" : "Sign up" }}</h1>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
      <button type="submit">{{ isLogin ? "SIGN IN" : "SIGN UP" }}</button>
      <p>
        {{ isLogin ? "Don't have an account ? " : "Already have an account ?" }}
        <a @click="changeForm"> {{ isLogin ? "sign up" : "sign in" }}.</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    changeForm() {
      this.isLogin = !this.isLogin;
    },
    goBack() {
      this.$emit('goBack', false)
    }
  }
};
</script>

<style scoped>
.login {

}

.formRegister {
  color: white;
  font-family: "Courgette", cursive;
  padding: 50px;
}

.formRegister form {
  display: flex;
  flex-direction: column;
  padding: 30px 30px 15px 30px;
}

.formRegister form input {
  height: 30px;
  padding: 0 20px;
  border: 2px solid rgb(219, 219, 219);
  margin-bottom: 20px;
  width: 190px;
  border-radius: 3px;
}

.formRegister button {
  padding: 10px;
  background-color: rgba(143, 173, 185, 0.1);
  color: white;
  border: 1px solid white;
  width: 90px;
  transition: 300ms all;
  border-radius: 3px;
  font-family: "Courgette", cursive;
}

.formRegister button:hover {
  background-color: black;
  cursor: pointer;
}

p {
  color: white;
  font-family: "Courgette", cursive;
}

a {
  color: white;
  text-decoration: underline;
  cursor: pointer;
  font-family: "Courgette", cursive;

}
</style>
