const state = {
  menuOpened: false
}

const getters = {
  getMenuOpened: state => state.menuOpened
}

const actions = {
  toggleMenu({ commit }) {
    commit('setMenuOpened')
  }
}

const mutations = {
  setMenuOpened: state => (state.menuOpened = !state.menuOpened)
}

export default {
  state,
  getters,
  actions,
  mutations
}
