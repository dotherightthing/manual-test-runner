<template>
  <div class="b-test-importer">
    <p>{{ msg }}</p>
  </div>
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
