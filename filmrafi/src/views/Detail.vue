<template>
  <div class="detail" :style="
       `background-image: url(${API.IMAGE_URL}${detailMovie.backdrop_path})`
  ">
    <div class="head">
      <div class="title">
        <h1>{{ detailMovie.title }}</h1>
        <p>{{ detailMovie.vote_average }}</p>
        <small v-for="(genres, id) in detailMovie.genres" :key="id">
          <span class="genres">{{ genres.name }}</span>
        </small>
      </div>
      <div class="movie">
        <div class="left">
          <img
            class="poster"
            :src="`${API.IMAGE_URL}${detailMovie.poster_path}`"
          />
        </div>
        <div class="right">
          <small> Release Date: {{ detailMovie.release_date }} </small>
          <small> Duration: {{ detailMovie.runtime }} min</small>
          <span class="imdb">
            <p>{{ detailMovie.vote_average }}</p>
            <button
              v-if="activeUser"
              :class="isAdded ? 'removeButton' : 'myButton'"
              @click="addToList"
            >
              <i class="far fa-bookmark"></i>
              {{ isAdded ? "Remove from WatchList" : "Add To Watch List" }}
            </button>
            <div class="warning" v-else>
              To use add to watchlist please
              <router-link to="/login" tag="a">login.</router-link>
            </div>
          </span>
          <h4 style="font-style: italic; margin-top: 15px;">
            {{ detailMovie.tagline }}
          </h4>
          <h1 class="overview">Overview</h1>
          <p class="overview">{{ detailMovie.overview }}</p>
        </div>
      </div>
    </div>
    <Cast :cast="movieCast" />
    <Galery :galery="movieGalery" />
    <Rec :rec="movieRec" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import API from "../../api";
import Cast from "@/components/Cast";
import Galery from "@/components/Galery";
import Rec from "@/components/Rec";
import firebase from "firebase";
export default {
  name: "Detail",
  components: {
    Cast,
    Galery,
    Rec
  },
  data() {
    return {
      API
    };
  },
  computed: {
    ...mapGetters("movies", [
      "detailMovie",
      "movieCast",
      "movieGalery",
      "movieRec",
      "watchList"
    ]),
    ...mapGetters("auth", ["activeUser"]),
    isAdded() {
      const detail = this.watchList.find(
        item => item.movie.id === this.detailMovie.id
      );

      if ( detail && detail.isListed === true) {
        return true;
      } else {
        return false;
      }
    }
    /*
    isListed() {

      
      const index = this.activeUser.bookmarks.filter(
        a => a.id === this.detailMovie.id
      );
      if (index.length === 0) {
        return false;
      } else return true;
      
    },*/
  },
  methods: {
    ...mapActions("movies", ["getDetail", "getCast", "getGalery", "getRec"]),
    ...mapMutations("auth", ["REMOVE_FROM_LIST"]),
    /*
    addToList() {
      if (true) {
        this.REMOVE_FROM_LIST(this.detailMovie);
      } else {
        const index = this.activeUser.bookmarks.find(
          a => a.id === this.detailMovie.id
        );
        if (!index) {
          this.$store.commit("auth/ADD_TO_LIST", this.detailMovie);
        }
      }
    }*/
    addToList() {
      if (this.isAdded) {
        const docId = this.watchList.filter(item => item.movie.id === this.detailMovie.id)[0].id;
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .collection("watchlist")
          .doc(docId)
          .delete();
      } else {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .collection("watchlist")
          .add({
            movie: this.detailMovie,
            isListed: true
          });
      }
      /*
      firebase.database().ref('users').where('')
      firebase.database().ref('users').doc(this.activeUser.uid).push
      (this.detailMovie)*/
    }
  },
  created() {
    this.getDetail(this.$route.params.id);
    this.getCast(this.$route.params.id);
    this.getGalery(this.$route.params.id);
    this.getRec(this.$route.params.id);
  }
};
</script>

<style scoped>
.head {
  position: relative;
  z-index: 1;
  height: 500px;
  top: 90px;
  background-color: rgba(114, 90, 193, 0.6);
  width: 90%;
  margin: 0px auto;
}
.detail {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}

.title {
  color: white;
  padding: 1em;
}

.genres {
  display: inline;
  margin-left: 5px;
  font-size: 16px;
  background-color: #725ac1;
  border: 1px solid #725ac1;
  border-radius: 10px;
  padding: 1px;
  color: white;
}

.movie {
  margin-left: 15px;
  color: white;
  font-weight: bold;
}

.right {
  margin-left: 300px;
}

.myButton {
  padding: 1em;
  margin-left: 30px;
  background-color: lightgreen;
  border: 1px green solid;
  border-radius: 10px;
  font-weight: bold;
}

.removeButton {
  padding: 1em;
  margin-left: 30px;
  background-color: lightcoral;
  border: 1px red solid;
  border-radius: 10px;
  font-weight: bold;
}
.removeButton i {
  margin-right: 5px;
}
.myButton i {
  margin-right: 5px;
}

.left {
  float: left;
  clear: both;
}

.poster {
  width: 200px;
  height: 300px;
}

.imdb {
  display: flex;
  justify-content: flex-start;
}

.imdb p {
  background-color: black;
  border: 0.5px solid darkblue;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  text-align: center;
  padding-top: 10px;
  color: gold;
  margin-left: 15px;
}

.warning {
  margin-top: 10px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
}

.warning a {
  text-decoration: underline;
}

.overview {
  background-color: rgba(202, 196, 206, 0.7);
  color: black;
}

@media only screen and (max-width: 820px) {
  .head {
    height: auto;
  }
  .head .about {
    height: auto;
  }
}
</style>
