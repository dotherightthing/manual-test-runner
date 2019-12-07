<template>
  <form class="b-ui-verbosity-control">
      <fieldset class="l-center">
          <legend>UI Verbosity</legend>
          <div class="l-grid-radios l-grid-radios--toggle">
              <label for="ui_verbosity_full">Full</label>
              <input
                type="radio"
                name="ui_verbosity"
                value="full"
                id="ui_verbosity_full"
                @click="setUiVerbosity('full')"
                :checked="this.uiVerbosity === 'full'" />

              <label for="ui_verbosity_tests">Tests</label>
              <input
                type="radio"
                name="ui_verbosity"
                value="tests"
                id="ui_verbosity_tests"
                @click="setUiVerbosity('tests')"
                :checked="this.uiVerbosity === 'tests'" />
          </div>
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
    name: 'UiVerbosityControl',
    props: {
        uiVerbosity: String // this.uiVerbosity
    },
    methods: {
        // <button type="button" @click="setUiVerbosity">
        // v-on -> @
        setUiVerbosity: function (scope) {
            // emit event to parent (Tools)
            // `this` inside methods points to the Vue instance
            // args can be passed as a second argument
            this.$emit('set-ui-verbosity', scope);
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-ui-verbosity-control {
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
