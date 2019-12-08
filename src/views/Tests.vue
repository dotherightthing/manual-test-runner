<template>
  <div class="tests">
    <div class="l-grid">
      <PrimaryNav class="header-nav" :aria-hidden="quietState" />
      <UiTools class="header-controls" TestModeState="testModeState" />
      <div class="sidebar-1" :aria-hidden="quietState">
        <TestIntroduction title="Test Introduction" summary="Testing different kinds of elements." />
      </div>
      <div class="content">
        <Test msg="Test"/>
      </div>
      <div class="sidebar-2 l-block-disabled__wrapper" :aria-hidden="quietState">
        <TestBuilderForm/>
        <TestResults msg="Test Results" />
        <QuietStateWarning/>
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
import QuietStateWarning from "@/components/QuietStateWarning";

export default {
  name: 'Tests',
  components: {
    PrimaryNav,
    UiTools,
    TestIntroduction,
    Test,
    TestBuilderForm,
    TestResults,
    QuietStateWarning,
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
  },
  // computed properties abstract verbose and repetitive conditionals
  computed: {
    // see https://www.vuemastery.com/courses/mastering-vuex/vuex-state-getters 6:18
    // for alternate mapState syntax
    // to auto import all vuex keys
    // and merge in local computed properties
    quietState() {
      return this.$store.getters.quiet
    },
    testModeState() {
      return this.$store.state.testMode;
    }
  }
}
</script>

<style lang="scss">

</style>
