<template>
  <form class="b-tools">
    <TestMode TestModeState="this.TestModeState" @set-test-mode="setTestModeState" />
  </form>
</template>

<script>
  /* eslint-disable no-console */

  /**
   * UI Tools
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/7
   */

  import TestMode from '@/components/TestMode.vue'

  export default {
    name: 'UiTools',
    props: {
      section: String,
      page: String,
      TestModeState: String
    },
    components: {
      TestMode
    },
    methods: {
      // TODO maybe set initial state on the mount lifecycle hook
      setTestModeState: function (scope) {
        // emit event to parent (App)
        // `this` inside methods points to the Vue instance
        // args can be passed as a second argument
        this.$emit('set-test-mode', scope);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-tools {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1px;
  background-color: var(--color-fill-light);

  &__logo {
    display: grid;
    align-items: end;
    background-color: var(--color-brand);
    font-weight: bold;
  }

  &__list {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1px;

    &,
    & > li {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &__item {
      display: grid;
      align-items: end;
      background-color: var(--color-fill-mid);
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    color: var(--color-page);
    padding: var(--padding-container);
    padding-bottom: 2rem;
  }
}
</style>
