<template>
  <div class="b-test-introduction">
    <h2 class="b-test-introduction__title">
      {{ title }}
    </h2>
    <p class="b-test-introduction__summary">
      {{ summary }}
    </p>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  /**
   * Test Introduction
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/4
   */

  export default {
    name: 'TestIntroduction',
    props: {
      title: String,
      summary: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-test-introduction {
  padding: var(--padding-container);
  border: var(--component-border);

  h2 {
     font-weight: 900;
  }

  &__summary {
    font-family: serif;
    font-size: 1.1rem;
    margin-top: 0;
  }
}
</style>
