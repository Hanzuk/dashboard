import axios from 'axios'

const state = {
  income: [],
  expensesByPeriod: [],
  expensesByHeadquarter: [],
  utility: [],
  customers: []
}

const getters = {
  getIncome: state => state.income,
  getExpensesByPeriod: state => state.expensesByPeriod,
  getExpensesByHeadquarter: state => state.expensesByHeadquarter,
  getUtility: state => state.utility,
  getCustomers: state => state.customers
}

const actions = {
  // Trae los ingresos para cada mes del año
  async fetchIncome({ commit }) {
    const response = await axios.get(
      `https://gymnation.herokuapp.com/api/ingresos/periodo/${new Date().getFullYear()}`
    )

    commit('setIncome', response.data)
  },

  // Trae las gastos para cada mes del año
  async fetchExpensesByPeriod({ commit }) {
    const response = await axios.get(
      `https://gymnation.herokuapp.com/api/gastos/periodo/${new Date().getFullYear()}`
    )

    commit('setExpensesByPeriod', response.data)
  },

  // Trae las gastos para cada sede
  async fetchExpensesByHeadquarter({ commit }) {
    const response = await axios.get(
      'https://gymnation.herokuapp.com/api/gastos/sede/all'
    )

    commit('setExpensesByHeadquarter', response.data)
  },

  // Trae las utilidades para cada mes del año
  async fetchUtility({ commit }) {
    const response = await axios.get(
      `https://gymnation.herokuapp.com/api/utilidad/periodo/${new Date().getFullYear()}`
    )

    commit('setUtility', response.data)
  },

  //Trae los clientes netos de la sede 1
  async fetchCustomers({ commit }) {
    const response = await axios.get(
      'https://gymnation.herokuapp.com/api/clientes/sede/1'
    )

    commit('setCustomers', response.data)
  },

  // Filtra los indicadores de Ingresos, Gastos y Utilidad
  async filterIndicators({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    )

    // Ingresos
    const incomeResponse = await axios.get(
      `https://gymnation.herokuapp.com/api/ingresos/periodo/${limit}`
    )

    // Gastos por año
    const expensesByPeriodResponse = await axios.get(
      `https://gymnation.herokuapp.com/api/gastos/periodo/${limit}`
    )

    // Utilidad
    const utilityResponse = await axios.get(
      `https://gymnation.herokuapp.com/api/utilidad/periodo/${limit}`
    )

    commit('setIncome', incomeResponse.data)
    commit('setExpensesByPeriod', expensesByPeriodResponse.data)
    commit('setUtility', utilityResponse.data)
  },

  // Filtra los clientes por sede
  async filterCustomers({ commit }, e) {
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].value
    )
    const response = await axios.get(
      `https://gymnation.herokuapp.com/api/clientes/sede/${limit}`
    )

    commit('setCustomers', response.data)
  }
}

const mutations = {
  setIncome: (state, income) => (state.income = income),
  setExpensesByPeriod: (state, expenses) => (state.expensesByPeriod = expenses),
  setExpensesByHeadquarter: (state, expenses) =>
    (state.expensesByHeadquarter = expenses),
  setUtility: (state, utility) => (state.utility = utility),
  setCustomers: (state, customers) => (state.customers = customers)
}

export default {
  state,
  getters,
  actions,
  mutations
}
