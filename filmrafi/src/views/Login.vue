<template>
  <Container style="margin-top:100px">
  <div class="loginForm">
    <h1>LOGIN</h1>
    <form class="login">
      <label for="">Email</label>
      <input type="email">
      <label for="">Password</label>
      <input type="password">
      <button>LOGIN</button>
    </form>
    <p>
      Don't have an account ? You can go and<a href="#" style="margin-left:1.5px; text-decoration:underline"> sign in.</a>
    </p>

    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
export default {
  name: "Login",
  components: {
    Container
  }
}
</script>

<style scoped>
.loginForm {
  border: 1px solid black;
  background-color: #f9e9d1;
  width: 400px;
  padding: 30px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
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