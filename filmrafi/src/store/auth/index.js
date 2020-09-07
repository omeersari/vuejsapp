const auth = {
  namespaced: true,
  state: {
    users: [],
    activeUser: null,

  },
  getters: {
    activeUser: state => state.activeUser,
    userList: state => state.users
  },
  actions: {
    register({commit}, payload) {
      commit("REGISTER_USER", payload)
    },
    login({commit}, payload) {
      commit("LOGIN_USER", payload)
    }

  },
  mutations: {
    REGISTER_USER(state, payload) {
      payload.bookmarks = [];
      state.users.push(payload)
      console.log(state.users)
    },
    LOGIN_USER(state, payload) {
      const index = state.users.findIndex(
          (obj) =>
              obj.email === payload.email &&
              obj.password === payload.password
      );
      if (index !== -1) {
        state.activeUser = state.users[index]
      }
    },
    LOGOUT(state) {
      state.activeUser = null
    },
    ADD_TO_LIST(state, payload) {
      console.log(state.activeUser)
      const user = state.activeUser
      user.bookmarks.push(payload)
    }

  }
};

export default auth