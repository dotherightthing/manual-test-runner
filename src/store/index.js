/**
 * Vuex reactive global state storage,
 * aka the Single Source of Truth.
 *
 * Values can be manipulated from the Chrome extension.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testMode: 'edit'
  },
  mutations: {
    // Mutations are synchronous
    // Always put mutations inside actions
    // to minimise refactoring in the future
    //
    // it's common practice to use UPPERCASE or CamelCase here
    // to differentiate creating a mutation from calling an action
    SET_TEST_MODE(state, mode) {
      state.testMode = mode;
    }
  },
  actions: {
    // Actions are asynchronous

    /**
     * Update Test Mode
     *
     * @param {object} {state, commit} - context object
     * @param {string} value - payload
     */
    updateTestMode({ state, commit }, value) {
      if (state.testMode) {
        commit('SET_TEST_MODE', value);
      }
    }
  },
  modules: {
  },
  getters: {
    // getters can be used from anywhere in the application
    quiet: state => {
      return state.testMode === 'run'
    }
  }
})
