<template>
  <form class="b-test-builder-form b-panel" @submit.prevent="createTest">
    <fieldset>
      <legend>Test builder</legend>
      <FormSelect
        id="b-test-builder__input-os"
        label="OS"
        placeholder="Select an option"
        v-model="test.os"
        :options="oses" />
      <FormSelect
        id="b-test-builder__input-browser"
        label="Browser"
        v-model="test.browser"
        :options="browsers" />
      <FormSelect
        id="b-test-builder__input-at"
        label="AT"
        v-model="test.at"
        :options="ats" />
      <FormTextarea
        id="b-test-builder__input-step-1"
        label="Step 1"
        placeholder="Describe the step"
        v-model="test.step" />
      <FormButton
        type="submit"
        value="Add test" />
    </fieldset>
  </form>
</template>

<script>
  /**
   * Test Builder Form
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/11
   * @todo Add support for merging data if user submits form between selections
   */

  import FormButton from "@/components/FormButton";
  import FormSelect from "@/components/FormSelect";
  import FormTextarea from "@/components/FormTextarea";

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
        test: this.createFreshTestObject(),
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
    },
    components: {
      FormButton,
      FormSelect,
      FormTextarea
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-builder-form {
  }
</style>
