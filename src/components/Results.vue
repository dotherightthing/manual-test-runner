<template>
  <div class="b-results">
    <h2>Results</h2>
    <p>{{msg}}</p>
    <PanelVisibilityControl />
  </div>
</template>

<script>
  import PanelVisibilityControl from './PanelVisibilityControl.vue'

  export default {
    name: 'Results',
    props: {
      msg: String
    },
    components: {
      PanelVisibilityControl
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-results {}
</style>
