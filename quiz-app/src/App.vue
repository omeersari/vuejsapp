<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Welcome to Vue.JS Quizz App</h2>
    <p>Every quizz has 10 questions. After 10. question you will be able to see the results.</p>
    <small>Designed by: OmerSari for Vue.js practise</small>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
