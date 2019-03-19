import axios from 'axios';

const state = {
  income: [],
  expenses: [],
  utility: []
};

const getters = {
  getIncomeDates: state => state.income.map(obj => obj.fecha),
  getIncomeData: state => state.income.map(obj => obj.monto),
  getExpensesDates: state => state.expenses.map(obj => obj.fecha),
  getExpensesData: state => state.expenses.map(obj => obj.monto * -1),
  getUtilityDates: state => state.utility.map(obj => obj.fecha),
  getUtilityData: state => state.utility.map(obj => obj.utilidad)
};

const actions = {
  async fetchIncome({ commit }) {
    const response = await axios.get(
      `http://localhost:3000/api/ingresos/${new Date().getFullYear()}/all`
    );
    commit('setIncome', response.data);
  },
  async fetchExpenses({ commit }) {
    const response = await axios.get(
      `http://localhost:3000/api/gastos/${new Date().getFullYear()}/all`
    );
    commit('setExpenses', response.data);
    await commit('setUtility');
  },
  makeUtility({ commit }) {
    commit('setUtility');
  },
  // Filter all indicators
  async filterIndicators({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    const incomeResponse = await axios.get(
      `http://localhost:3000/api/ingresos/${limit}/all`
    );
    const expensesResponse = await axios.get(
      `http://localhost:3000/api/gastos/${limit}/all`
    );
    commit('setIncome', incomeResponse.data);
    commit('setExpenses', expensesResponse.data);
    await commit('setUtility');
  }
};

const mutations = {
  setIncome: (state, income) => (state.income = income),
  setExpenses: (state, expenses) => (state.expenses = expenses),
  setUtility: state => {
    let utility = [];
    for (let i = 0; i < state.income.length; i++) {
      utility.push({
        utilidad: state.income[i].monto - state.expenses[i].monto,
        fecha: new Date(state.income[i].fecha).getMonth()
      });
    }
    state.utility = utility;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
