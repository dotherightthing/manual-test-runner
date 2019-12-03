<template>
  <div class="tests">
    <div class="l-grid">
      <PrimaryNav class="header-nav" :aria-hidden="this.uiVerbosity !== 'full'" />
      <UiTools class="header-controls" @set-ui-verbosity="setUiVerbosity" uiVerbosity="this.uiVerbosity" />
      <div class="sidebar-1" :aria-hidden="this.uiVerbosity !== 'full'">
        <TestIntroduction title="Label" summary="Testing different ways of using labels." />
      </div>
      <div class="content">
        <h2>Tests</h2>
        <Test msg="Tests go here"/>
      </div>
      <div class="sidebar-2" :aria-hidden="this.uiVerbosity !== 'full'">
        <Results msg="Results table goes here" />
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
import Results from '@/components/Results.vue'

export default {
  name: 'Tests',
  components: {
    PrimaryNav,
    UiTools,
    TestIntroduction,
    Test,
    Results,
  },
  // props flow down and can't be changed
  // but data is the private memory of a component
  // and can be changed - in this case the values is toggled
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
