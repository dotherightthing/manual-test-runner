<template>
  <div class="b-test-viewer b-panel">
    <!-- eg https://raw.githubusercontent.com/dotherightthing/fieldset-tests/master/index.html -->
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  /**
   * Test Viewer
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/9
   */
export default {
  name: 'TestViewer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-viewer {
  }
</style>
