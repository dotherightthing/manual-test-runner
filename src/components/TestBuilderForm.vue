<template>
  <form class="b-test-builder-form">
    <fieldset>
      <legend>Test builder</legend>
    </fieldset>
  </form>
</template>

<script>
  /**
   * Test Builder Form
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/11
   */

  export default {
    name: 'TestBuilderForm',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-builder-form {
    padding: var(--padding-sub-container);
    border: var(--component-border);
  }
</style>
