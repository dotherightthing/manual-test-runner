<template>
  <div class="b-summary" :aria-hidden="[!isVisible]">
    <h1 class="b-summary__title">
      {{ title }}
    </h1>
    <p class="b-summary__summary">
      {{ summary }}
    </p>
    <PanelVisibilityControl @toggle-visibility="handleToggleVisibility" />
  </div>
</template>

<script>
  /* eslint-disable no-console */

  import PanelVisibilityControl from './PanelVisibilityControl.vue'

  export default {
    name: 'Summary',
    data() {
      return {
        isVisible: true
      }
    },
    props: {
      title: String,
      summary: String
    },
    components: {
      PanelVisibilityControl
    },
    methods: {
      handleToggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-summary {
  padding: var(--padding-container);

  &__title {
    font-size: 3rem;
    margin: 1rem 0 0;
  }

  &__summary {
    font-family: serif;
    font-size: 1.1rem;
    margin-top: 0;
  }
}
</style>
