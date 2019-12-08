<template>
  <div class="tests">
    <div class="l-grid">
      <PrimaryNav class="header-nav" :aria-hidden="this.TestModeState === 'run'" />
      <UiTools class="header-controls" @set-test-mode="setTestModeState" TestModeState="this.TestModeState" />
      <div class="sidebar-1" :aria-hidden="this.TestModeState === 'run'">
        <TestIntroduction title="Test Introduction" summary="Testing different kinds of elements." />
      </div>
      <div class="content">
        <Test msg="Test"/>
      </div>
      <div class="sidebar-2" :aria-hidden="this.TestModeState === 'run'">
        <TestBuilderForm/>
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
import TestBuilderForm from "@/components/TestBuilderForm";
import TestResults from '@/components/TestResults.vue'

export default {
  name: 'Tests',
  components: {
    PrimaryNav,
    UiTools,
    TestIntroduction,
    Test,
    TestBuilderForm,
    TestResults,
  },
  // props flow down and can't be changed
  // but data is the private memory of a component
  // and can be changed
  data() {
    return {
      TestModeState: 'run' // default value
    }
  },
  methods: {
    setTestModeState(scope) {
      this.TestModeState = scope;
    }
  }
}
</script>
