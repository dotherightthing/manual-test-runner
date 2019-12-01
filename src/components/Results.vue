<template>
  <div class="b-results">
    <h2>Results</h2>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Results',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-results {}
</style>
