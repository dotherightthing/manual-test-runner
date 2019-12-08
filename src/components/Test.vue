<template>
  <div class="b-test">
    <h2 class="legend">Test fixture</h2>
    <TestImporter msg="Import test fixture from Github"/>
    <TestVersionSelector msg="Select fixture version"/>
    <TestViewer msg="Test viewer"/>
  </div>
</template>

<script>
  import TestImporter from '@/components/TestImporter.vue'
  import TestVersionSelector from '@/components/TestVersionSelector.vue'
  import TestViewer from '@/components/TestViewer.vue'

  export default {
  name: 'Test',
  components: {
    TestImporter,
    TestVersionSelector,
    TestViewer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .b-test {
    padding: var(--padding-container);
    border: var(--component-border);
  }
</style>
