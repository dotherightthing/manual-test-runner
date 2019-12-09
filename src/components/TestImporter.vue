<template>
  <form class="b-test-importer b-panel">
    <fieldset>
      <legend>{{ msg }}</legend>
      <FormSelect
        id="b-test-importer-input"
        label="Test"
        :options="reposArray" />
      <FormButton :type="'button'" :value="'Import'" />
    </fieldset>
  </form>
</template>

<script>
  /* eslint-disable no-console */

  /**
   * Test Importer
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/3
   * @todo Add v-model
   */
  import axios from 'axios';
  import FormSelect from "@/components/FormSelect";
  import FormButton from "@/components/FormButton";

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
      .then(response => { // asynchronous promise
        this.repos = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  computed: {
    reposArray() {
      const reposArray = [];

      for (let repo of this.repos) {
        reposArray.push(repo.title);
      }

      return reposArray;
    }
  },
  components: {
    FormSelect,
    FormButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-importer {
  }
</style>
