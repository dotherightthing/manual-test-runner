<template>
  <form class="b-test-builder-results-toggle">
    <fieldset class="l-center">
      <legend>{{msg}}</legend>
      <div class="l-grid-radios l-grid-radios--toggle">
        <label for="b-test-builder-results-toggle__radio--builder">Builder</label>
        <input type="radio" name="toggle" value="builder" id="b-test-builder-results-toggle__radio--builder">
        <label for="b-test-builder-results-toggle__radio--results">Results</label>
        <input type="radio" name="toggle" value="results" id="b-test-builder-results-toggle__radio--results">
      </div>
    </fieldset>
  </form>
</template>

<script>
  /**
   * Test Builder/Results Toggle
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/12
   */
  export default {
    name: 'TestBuilderResultsToggle',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-builder-results-toggle {
    text-align: center;
    padding: var(--padding-sub-container);
    border: var(--component-border);
  }

  label[for='b-test-builder-results-toggle__radio--results'] {
    float: right;
  }
</style>
