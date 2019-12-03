<template>
  <form class="b-test-importer">
    <fieldset>
      <legend>{{ msg }}</legend>
      <select>
        <option>Test name</option>
      </select>
      <button type="button">Import</button>
    </fieldset>
  </form>
</template>

<script>
  /**
   * Test Importer
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/3
   */
export default {
  name: 'TestImporter',
  props: {
    msg: String
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
