import axios from 'axios';

const state = {
  income: []
};

const getters = {
  getIncome: state => state.income
};

const actions = {
  async fetchIncome({ commit }) {
    const response = await axios.get(
      `http://localhost:3000/api/ingresos/${new Date().getFullYear()}/all`
    );
    commit('setIncome', response.data);
  },
  async filterIndicators({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const response = await axios.get(
      `http://localhost:3000/api/ingresos/${limit}/all`
    );
    commit('setIncome', response.data);
  }
};

const mutations = {
  setIncome: (state, income) => (state.income = income)
};

export default {
  state,
  getters,
  actions,
  mutations
};
