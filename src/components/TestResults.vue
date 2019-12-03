<template>
  <div class="b-test-results">
    <h2>{{msg}}</h2>
    <TestResultsGrid msg="Results grid"/>
  </div>
</template>

<script>
  /**
   * Test Results Grid
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/1
   */
  import TestResultsGrid from '@/components/TestResultsGrid.vue'

  export default {
    name: 'TestResults',
    props: {
      msg: String
    },
    components: {
      TestResultsGrid
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-results {
    padding: var(--padding-container);
    border: var(--component-border);
  }
</style>
