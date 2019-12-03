<template>
  <form class="b-test-version-selector">
    <fieldset>
      <legend>{{ msg }}</legend>
      <select>
        <option>Test version</option>
      </select>
      <button type="button">Import</button>
    </fieldset>
  </form>
</template>

<script>
  /**
   * Test Version Selector
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/5
   */
export default {
  name: 'TestVersionSelector',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-version-selector {
    padding: var(--padding-sub-container);
    border: var(--component-border);
  }
</style>
