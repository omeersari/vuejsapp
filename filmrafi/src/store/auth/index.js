import firebase from "firebase";
const auth = {
  namespaced: true,
  state: {
    activeUser: null
  },
  getters: {
    activeUser: state => state.activeUser,

  },
  actions: {
  },
  mutations: {
    LOGOUT(state) {
      state.activeUser = null;
    },
    SET_USER(state, payload) {
      if (payload) {
        state.activeUser = firebase.auth().currentUser
      }else {
        state.activeUser = null
      }
    },
    ADD_TO_LIST(state, payload) {
      const user = state.activeUser;
      user.bookmarks.push(payload);
    },
    REMOVE_FROM_LIST(state, payload) {
      const user = state.activeUser;
      const index = user.bookmarks.findIndex(a => a.id === payload.id);
      if (index > -1) {
        user.bookmarks.splice(index, 1);
      }
    },
    REGISTER(state) {
      console.log(state)
    }
  }
};

export default auth;
