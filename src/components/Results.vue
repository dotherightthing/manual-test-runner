<template>
  <div class="b-results" :aria-hidden="[!isVisible]">
    <h2>Results</h2>
    <p>{{msg}}</p>
    <PanelVisibilityControl @toggle-visibility="handleToggleVisibility" />
  </div>
</template>

<script>
  import PanelVisibilityControl from './PanelVisibilityControl.vue'

  export default {
    name: 'Results',
    data() {
      return {
        isVisible: true
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
        this.isVisible = !this.isVisible;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-results {}
</style>
