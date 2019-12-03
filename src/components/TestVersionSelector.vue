<template>
  <div class="b-test-version-selector">
    <p>{{ msg }}</p>
  </div>
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
