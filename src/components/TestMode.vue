<template>
  <form class="b-test-mode">
      <fieldset class="l-center">
          <legend>Test Mode</legend>
          <div class="l-grid-radios">
              <input
                type="radio"
                name="test_mode"
                value="edit"
                id="test_mode_edit"
                @click="setTestMode('edit')"
                :checked="testModeEdit" />
              <label for="test_mode_edit">Edit</label>

              <input
                type="radio"
                name="test_mode"
                value="run"
                id="test_mode_run"
                @click="setTestMode('run')"
                :checked="testModeRun" />
              <label for="test_mode_run">Run</label>

              <input
                type="radio"
                name="test_mode"
                value="coverage"
                id="test_mode_coverage"
                @click="setTestMode('coverage')"
                :checked="testModeCoverage" />
          </div>
          <label for="test_mode_coverage">Coverage</label>
          <p v-if="testModeEdit" class="form__explanation">Authoring and editing tests</p>
          <p v-if="testModeRun" class="form__explanation">Running tests</p>
          <p v-if="testModeCoverage" class="form__explanation">Viewing test data</p>

      </fieldset>
  </form>
</template>

<script>
  /* eslint-disable no-console */

  /**
   * Test Mode
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/8
   */

  // export as a JavaScript module
  export default {
    name: 'TestMode',
    props: {
        TestModeState: String
    },
    methods: {
        // <button type="button" @click="setTestMode">
        // v-on -> @
        setTestMode: function (mode) {
            this.$store.dispatch('updateTestMode', mode );
        }
    },
    computed: {
        testModeEdit() {
            return this.$store.state.testMode === 'edit';
        },
        testModeRun() {
            return this.$store.state.testMode === 'run';
        },
        testModeCoverage() {
            return this.$store.state.testMode === 'coverage';
        },
        testModeState() {
            return this.$store.state.testMode;
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-mode {
    padding: var(--padding-sub-container);
    margin: var(--margin-sub-container);
  }
</style>
