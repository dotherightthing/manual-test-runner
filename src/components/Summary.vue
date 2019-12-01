<template>
  <div class="b-summary">
    <h2 class="b-summary__title">
      {{ title }}
    </h2>
    <p class="b-summary__summary">
      {{ summary }}
    </p>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  export default {
    name: 'Summary',
    props: {
      title: String,
      summary: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-summary {
  padding: var(--padding-container);
  padding-top: 0;

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
