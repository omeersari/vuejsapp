<template>
  <Container>
    <h1>Watchlist</h1>
    <div class="films">
      <div v-for="(item, id) in watchList" :key="id" class="filmCard">
        <img
          @click="gotoDetail(item.movie.id)"
          class="filmCardImage"
          :src="`${API.IMAGE_URL}${item.movie.poster_path}`"
        />
        <div class="info">
          <p>{{ item.movie.original_title }}</p>
          <button @click="remove(item.id)">Remove</button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import API from "../../api";
import { mapGetters, mapMutations, mapActions } from "vuex";
import firebase from "firebase";
export default {
  name: "BookMarks",
  components: {
    Container
  },
  data() {
    return {
      favs: [],
      API
    };
  },
  computed: {
    ...mapGetters("auth", ["activeUser"]),
    ...mapGetters("movies", ["watchList"])
  },
  methods: {
    ...mapMutations("auth", ["REMOVE_FROM_LIST"]),
    ...mapActions("movies", ["WatchList"]),

    //myList() {
      //this.WatchList()
      /*
      let myWatchList = firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("watchlist");
      myWatchList.onSnapshot(snap => {
        this.favs = [];
        snap.forEach(doc => {
          let movie = doc.data();
          movie.id = doc.id;
          this.favs.push(movie);
        });
      });
      this.favs = this.activeUser.bookmarks;
      */
    //},
    gotoDetail(id) {
      this.$router.push({ name: "Detail", params: { id } });
    },
    remove(docId) {
      firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("watchlist")
        .doc(docId)
        .delete();
      //this.REMOVE_FROM_LIST(item);
    }
  },
  //created() {
    //if (this.activeUser) {
      //this.myList();
    //}
  //}
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
