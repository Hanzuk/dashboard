import Vuex from 'vuex';
import Vue from 'vue';
import indicators from './modules/indicators';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    indicators
  }
});
