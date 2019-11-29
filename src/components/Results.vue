<template>
  <div class="b-results" :aria-hidden="[!panelIsVisible]">
    <h2>Results</h2>
    <p>{{msg}}</p>
    <PanelVisibilityControl @toggle-visibility="handleToggleVisibility" :panelIsVisible="this.panelIsVisible" />
  </div>
</template>

<script>
  import PanelVisibilityControl from './PanelVisibilityControl.vue'

  export default {
    name: 'Results',
    data() {
      return {
        panelIsVisible: true
      }
    },
    props: {
      msg: String
    },
    components: {
      PanelVisibilityControl
    },
    methods: {
      handleToggleVisibility() {
        this.panelIsVisible = !this.panelIsVisible;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-results {}
</style>
