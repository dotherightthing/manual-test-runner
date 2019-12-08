<template>
  <div class="b-test-results-grid b-panel">
    <table>
      <summary>{{msg}}</summary>
      <thead>
      <tr>
        <th>Header</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Cell</td>
      </tr>
      </tbody>
    </table>
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
  }
</style>
