<template>
  <form class="b-test-mode">
      <fieldset class="l-center">
          <legend>Test Mode</legend>
          <div class="l-grid-radios">
              <input
                type="radio"
                name="test_mode"
                value="author"
                id="test_mode_author"
                @click="setTestModeState('author')"
                :checked="this.TestModeState === 'author'" />
              <label for="test_mode_author">Author</label>

              <input
                type="radio"
                name="test_mode"
                value="run"
                id="test_mode_run"
                @click="setTestModeState('run')"
                :checked="this.TestModeState === 'run'" />
              <label for="test_mode_run">Run</label>

              <input
                type="radio"
                name="test_mode"
                value="coverage"
                id="test_mode_coverage"
                @click="setTestModeState('coverage')"
                :checked="this.TestModeState === 'coverage'" />
          </div>
          <label for="test_mode_coverage">Coverage</label>

      </fieldset>
  </form>
</template>

<script>
  /* eslint-disable no-console */

  /**
   * UI Verbosity Control
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/8
   */

  // export as a JavaScript module
  // @todo neither radio button is selected onload
  export default {
    name: 'TestMode',
    props: {
        TestModeState: String // this.TestMode
    },
    methods: {
        // <button type="button" @click="setTestMode">
        // v-on -> @
        setTestModeState: function (scope) {
            // emit event to parent (Tools)
            // `this` inside methods points to the Vue instance
            // args can be passed as a second argument
            this.$emit('set-test-mode', scope);
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-mode {
    padding: var(--padding-sub-container);
    margin: var(--margin-sub-container);

    p {
      color: var(--color-notification-quiet);
      margin: 0;
    }

    form {
        width: 100%;
    }
  }
</style>
