<template>
  <form class="b-test-builder-form b-panel" @submit.prevent="createTest">
    <fieldset>
      <legend>Test builder</legend>
      <div>
        <label for="b-test-builder__input-os">OS</label>
        <select v-model="test.os" id="b-test-builder__input-os">
          <option v-for="os in oses" :key="os">
            {{ os }}
          </option>
        </select>
      </div>
      <div>
        <label for="b-test-builder__input-browser">Browser</label>
        <select v-model="test.browser" id="b-test-builder__input-browser">
          <option v-for="browser in browsers" :key="browser">
            {{ browser }}
          </option>
        </select>
      </div>
      <div>
        <label for="b-test-builder__input-at">AT</label>
        <select v-model="test.at" id="b-test-builder__input-at">
          <option v-for="at in ats" :key="at">
            {{ at }}
          </option>
        </select>
      </div>
      <div>
        <label for="b-test-builder__input-step-1">Step 1</label>
        <textarea v-model="test.step" id="b-test-builder__input-step-1"></textarea>
      </div>
      <input type="submit" value="Add test"/>
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
    },
    data() {
      return {
        oses: this.$store.state.oses,
        browsers: this.$store.state.browsers,
        ats: this.$store.state.ats,
        test: this.createFreshTestObject()
      }
    },
    methods: {
      createFreshTestObject() {
        const id = Math.floor(Math.random() * 10000000);

        return {
          id,
          os: '',
          browser: '',
          at: '',
          step: ''
        }
      },
      createTest() {
        this.$store.dispatch('createTest', this.test);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-builder-form {
  }
</style>
