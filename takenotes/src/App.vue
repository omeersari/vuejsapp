<template>
  <div id="app">
    
    <Home @add="add" @update="update" :notes="notes"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      notes: []
    }
  },
  methods: {
    add(data) {
      this.notes.push(data)
    },

    update(data) {
      const item = this.notes.find(x => x.id == data.id)
      
    }

    
    
    
  }
}
</script>

<style>

</style>
