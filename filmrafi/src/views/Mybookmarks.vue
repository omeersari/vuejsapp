<template>
  <Container>
    <h1>Watchlist</h1>
    <div class="films">
      <div v-for="(item, id) in favs" :key="id" class="filmCard">
        <img
          @click="gotoDetail(item.id)"
          class="filmCardImage"
          :src="`${API.IMAGE_URL}${item.poster_path}`"
        />
        <div class="info">
          <p>{{ item.original_title }}</p>
          <button @click="remove(item)">Remove</button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import API from "../../api";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "BookMarks",
  components: {
    Container
  },
  data() {
    return {
      favs: {},
      API
    };
  },
  computed: {
    ...mapGetters("auth", ["activeUser"])
  },
  methods: {
    ...mapMutations("auth", ["REMOVE_FROM_LIST"]),
    myList() {
      this.favs = this.activeUser.bookmarks;
    },
    gotoDetail(id) {
      this.$router.push({ name: "Detail", params: { id } });
    },
    remove(item) {
      this.REMOVE_FROM_LIST(item);
    }
  },
  created() {
    if (this.activeUser) {
      this.myList();
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
  margin-left: 20px;
}

.films {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.filmCard {
  margin-left: 20px;
  margin-bottom: 20px;
  height: auto;
  width: 200px;
  background-color: black;
  position: relative;
  top: 0;
  transition: top ease 0.5s;
}

.filmCard:hover {
  top: -10px;
}

.info {
  margin-left: 10px;
  color: white;
}

.info button {
  background-color: lightsalmon;
  padding: 10px;
  border: 1px orange solid;
  border-radius: 10px;
  margin-bottom: 5px;
}

.filmCardImage {
  width: 200px;
  height: auto;
  cursor: pointer;
}
</style>
