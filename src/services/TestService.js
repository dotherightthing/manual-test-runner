/**
 * Test Service
 *
 * @uses db.json - note that manually adding a prop requires a restart of json-server
 * @uses json-server - mock server which serves json through REST routes: `npm run serve:json`.
 *  If the default port of `3000` is busy, change the port in `package.json` and `.env.local`.
 * @uses axios - promise based HTTP client for the browser and node.js
 *  [Vue tutorial](https://www.vuemastery.com/courses/real-world-vue-js/API-calls-with-Axios)
 * @todo Watch the Vue tutorial that creates this file
 * @todo finish watching https://www.vuemastery.com/courses/mastering-vuex/vuex-mutations-actions-1 from 14:09
 */

import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://localhost:${process.env.VUE_APP_JSON_SERVER_PORT}`,
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    // post data to the relevant object in our mock database
    getTests() {
        return apiClient.get('/tests');
    },
    getTest(id) {
        return apiClient.get('/tests/' + id);
    },
    postTest(test) {
        return apiClient.post('/tests', test);
    }
}
