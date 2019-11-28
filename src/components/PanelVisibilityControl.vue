<template>
  <div class="b-panel-visibility-control">
    <p>[icon] This panel is hidden from screenreaders.
      <button type="button" v-on:click="toggleParentVisibility">Reveal this panel</button></p>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  // export as a JavaScript module
  export default {
    name: 'PanelVisibilityControl',
    props: {},
    methods: {
      toggleParentVisibility: function () {
        // `this` inside methods points to the Vue instance
        // args can be passed as a second argument
        this.$emit('toggle-visibility');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-panel-visibility-control {
    border: 1px dotted;
    padding: var(--padding-sub-container);
    margin: var(--margin-sub-container);

    p {
      color: var(--color-notification-quiet);
      margin: 0;
    }
  }
</style>
