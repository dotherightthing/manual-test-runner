<template>
  <div class="b-panel-visibility-control">
    <p>[icon] This panel is
       <span v-if="panelIsVisible">shown to</span>
       <span v-else>hidden from</span>
        screenreaders.
      <button type="button" v-on:click="toggleParentVisibility">
          <span v-if="panelIsVisible">Hide</span>
          <span v-else>Show</span>
           panel
      </button>
    </p>
  </div>
</template>

<script>
  /* eslint-disable no-console */

  // export as a JavaScript module
  export default {
    name: 'PanelVisibilityControl',
    props: {
        panelIsVisible: Boolean
    },
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
