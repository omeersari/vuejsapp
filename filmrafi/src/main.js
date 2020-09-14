import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueDebounce from "vue-debounce";
import firebase from "firebase";
import paginate from "vuejs-paginate"


Vue.use(vueDebounce, {
  cancelonempty: true
});

Vue.component('paginate', paginate)

var firebaseConfig = {
  apiKey: "AIzaSyBuL3bjEH2_IrHK46-Brc2uKcY_SKu2RmQ",
  authDomain: "filmrafi-3a2ed.firebaseapp.com",
  databaseURL: "https://filmrafi-3a2ed.firebaseio.com",
  projectId: "filmrafi-3a2ed",
  storageBucket: "filmrafi-3a2ed.appspot.com",
  messagingSenderId: "1021093720163",
  appId: "1:1021093720163:web:bc3a253963828369d98856",
  measurementId: "G-RFCXK6TTCM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})


