/**
 * Vuex reactive global state storage,
 * aka the Single Source of Truth.
 *
 * Values can be manipulated from the Chrome extension.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import TestService from '@/services/TestService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testMode: 'edit',
    oses: [
      'macOS 10.14.6',
      'windows',
      'iOS',
      'Android'
    ],
    browsers: [
      'chrome',
      'edge',
      'firefox',
      'ie11',
      'safari'
    ],
    ats: [
      'jaws',
      'narrator',
      'nvda',
      'voiceover'
    ],
    tests: []
  },
  mutations: {
    // Mutations are synchronous
    // Always put mutations inside actions
    // to minimise refactoring in the future
    //
    // it's common practice to use UPPERCASE or CamelCase here
    // to differentiate creating a mutation from calling an action
    ADD_TEST(state, test) {
      state.tests.push(test);
    }
  },
  actions: {
    // Actions are asynchronous

    /**
     * Create Test
     *
     * @param {object} {commit} - context object
     * @param {string} test - payload
     */
    createTest({ state, commit }, test) {
      if (state.tests) {
        TestService.postTest(test);
        commit('ADD_TEST', test);
      }
    }
  },
  modules: {
  },
  getters: {
    // getters can be used from anywhere in the application
  }
})
