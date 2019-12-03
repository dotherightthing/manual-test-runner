<template>
  <div class="b-test-results-grid">
    <p>{{msg}}</p>
  </div>
</template>

<script>
  /**
   * Test Results Grid
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/1
   */

  export default {
    name: 'TestResultsGrid',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-results-grid {
    padding: var(--padding-sub-container);
    border: var(--component-border);
  }
</style>
