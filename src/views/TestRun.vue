<template>
  <div class="tests">
    <div class="l-grid" :class="routeClass">
      <PrimaryNav class="header-nav" />
      <UiTools class="header-controls" />
      <div class="sidebar-1">
        <TestIntroduction title="Test Introduction" summary="Testing different kinds of elements." />
      </div>
      <div class="content">
        <Test msg="Test fixture"/>
      </div>
      <div class="sidebar-2 l-block-disabled__wrapper">
        <TestBuilderForm/>
        <TestResults msg="Test Results" />
        <QuietStateWarning/>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import PrimaryNav from '@/components/PrimaryNav.vue';
  import UiTools from '@/components/UiTools.vue';
  import TestIntroduction from '@/components/TestIntroduction.vue';
  import Test from '@/components/Test.vue';
  import TestBuilderForm from "@/components/TestBuilderForm";
  import TestResults from '@/components/TestResults.vue';
  import QuietStateWarning from '@/components/QuietStateWarning.vue';

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
    computed: {
      routeClass() {
        return `l-grid--${this.$route.name.replace(/test-/, '')}`;
      }
    }
  }
</script>

<style lang="scss">

</style>
