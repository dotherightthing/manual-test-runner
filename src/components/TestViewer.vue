<template>
  <div class="b-test-viewer">
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
    padding: var(--padding-sub-container);
    border: var(--component-border);
  }
</style>
