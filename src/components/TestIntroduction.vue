<template>
  <div class="b-test-introduction b-panel l-block-disabled__wrapper">
    <h2 class="b-test-introduction__title">
      {{ title }}
    </h2>
    <p class="b-test-introduction__summary">
      {{ summary }}
    </p>
    <QuietStateWarning/>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  /**
   * Test Introduction
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/4
   */
  import QuietStateWarning from "@/components/QuietStateWarning";

  export default {
    name: 'TestIntroduction',
    props: {
      title: String,
      summary: String
    },
    components: {
      QuietStateWarning
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-test-introduction {

  h2 {
     font-weight: 900;
  }

  &__summary {
    font-family: serif;
    font-size: var(--text-large);
    margin-top: 0;
  }
}
</style>
