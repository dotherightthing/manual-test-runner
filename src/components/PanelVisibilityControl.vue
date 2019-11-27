<template>
  <div class="b-panel-visibility-control">
    <p>[icon] This panel is hidden from screenreaders. <button type="button">Reveal this panel</button></p>
  </div>
</template>

<script>
export default {
  name: 'PanelVisibilityControl',
  props: {}
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
