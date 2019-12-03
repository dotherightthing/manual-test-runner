<template>
  <div class="b-test">
    <h2>{{ msg }}</h2>
    <TestImporter msg="Test importer"/>
    <TestVersionSelector msg="Test version selector"/>
    <TestViewer msg="Test viewer"/>
  </div>
</template>

<script>
  import TestImporter from '@/components/TestImporter.vue'
  import TestVersionSelector from '@/components/TestVersionSelector.vue'
  import TestViewer from '@/components/TestViewer.vue'

  export default {
  name: 'Test',
  props: {
    msg: String
  },
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
