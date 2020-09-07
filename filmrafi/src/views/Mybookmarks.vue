<template>
  <Container>
    <h1>Watchlist</h1>
  <div class="films">
    <div v-for="(item, id) in favs" :key="id" class="filmCard">
      <img class="filmCardImage" :src="`${API.IMAGE_URL}${item.poster_path}`">
    </div>
  </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import API from "../../api";
import {mapGetters} from 'vuex';
export default {
  name: "BookMarks",
  components: {
    Container
  },
  data() {
    return {
      favs: {},
      API
    }
  },
  computed: {
    ...mapGetters('auth', ["activeUser"]),
  },
  methods: {
    myList() {
      this.favs = this.activeUser.bookmarks
    }
  },
  created() {
    if (this.activeUser) {
      this.myList()
    }
  }
}
</script>

<style scoped>

.films {
  display: flex;
  justify-content: flex-start;
}

.filmCard  {
  margin-left: 20px;
}

.filmCardImage {
  width: 200px;
  height: auto;
}

</style>