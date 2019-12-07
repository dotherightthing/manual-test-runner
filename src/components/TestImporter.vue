<template>
  <form class="b-test-importer">
    <fieldset>
      <legend>{{ msg }}</legend>
      <select>
        <option v-for="repo in repos" :key="repo.name" :value="repo.name">{{repo.title}}</option>
      </select>
      <button type="button">Import</button>
    </fieldset>
  </form>
</template>

<script>
  /* eslint-disable no-console */

  /**
   * Test Importer
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/3
   */
  import axios from 'axios';

export default {
  name: 'TestImporter',
  props: {
    msg: String
  },
  // data function
  data() {
    return {
      // reactive property
      repos: []
    }
  },
  created() {
    axios
      .get(`http://localhost:${process.env.VUE_APP_JSON_SERVER_PORT}/repos`)
      .then(response => {
        this.repos = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-importer {
    padding: var(--padding-sub-container);
    border: var(--component-border);
  }
</style>
