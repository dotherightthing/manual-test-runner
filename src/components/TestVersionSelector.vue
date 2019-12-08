<template>
  <form class="b-test-version-selector b-panel">
    <fieldset>
      <legend>{{ msg }}</legend>
      <FormSelect
        :id="'b-test-version-selector-input'"
        :label="'Select version'"
        :options="versions" />
      <FormButton :type="'button'" :value="'Import'" />
    </fieldset>
  </form>
</template>

<script>
  /**
   * Test Version Selector
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/5
   */
  import FormSelect from "@/components/FormSelect";
  import FormButton from "@/components/FormButton";

  export default {
    name: 'TestVersionSelector',
    props: {
      msg: String
    },
    // data function
    data() {
      return {
        // reactive property
        versions: [
          '1.0',
          '1.1'
        ]
      }
    },
    components: {
      FormSelect,
      FormButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test-version-selector {
  }
</style>
