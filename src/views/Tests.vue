<template>
  <div class="tests">
    <div class="l-grid">
      <PrimaryNav class="header-nav" :aria-hidden="this.uiVerbosity !== 'full'" />
      <UiTools class="header-controls" @set-ui-verbosity="setUiVerbosity" uiVerbosity="this.uiVerbosity" />
      <div class="sidebar-1" :aria-hidden="this.uiVerbosity !== 'full'">
        <TestIntroduction title="Test Introduction" summary="Testing different kinds of elements." />
      </div>
      <div class="content">
        <Test msg="Test"/>
      </div>
      <div class="sidebar-2" :aria-hidden="this.uiVerbosity !== 'full'">
        <TestResults msg="Test Results" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PrimaryNav from '@/components/PrimaryNav.vue'
import UiTools from '@/components/UiTools.vue'
import TestIntroduction from '@/components/TestIntroduction.vue'
import Test from '@/components/Test.vue'
import TestResults from '@/components/TestResults.vue'

export default {
  name: 'Tests',
  components: {
    PrimaryNav,
    UiTools,
    TestIntroduction,
    Test,
    TestResults,
  },
  // props flow down and can't be changed
  // but data is the private memory of a component
  // and can be changed
  data() {
    return {
      uiVerbosity: 'full' // default value
    }
  },
  methods: {
    setUiVerbosity(scope) {
      this.uiVerbosity = scope;
    }
  }
}
</script>
