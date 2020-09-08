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
      const user = state.activeUser
      user.bookmarks.push(payload)
    },
    REMOVE_FROM_LIST(state, payload) {
      const user = state.activeUser
      const index = user.bookmarks.findIndex(a => a.id === payload.id)
      if (index > -1) {
        user.bookmarks.splice(index, 1)
      }
    }

  }
};

export default auth