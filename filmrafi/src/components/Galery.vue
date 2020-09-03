<template>
  <div>
      <div v-for="(item,id) in galery" :key="id" >
        <img :src="`${API.IMAGE_URL}${item.file_path}`">
      </div>
  </div>
</template>

<script>
import API from "../../api";
export default {
  name:"Galery",
  data() {
    return {
      API
    }
  },
  props: {
    galery: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>