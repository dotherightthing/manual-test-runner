<template>
  <div id="app">
    <div class="l-grid">
      <PrimaryNav class="header-nav" section="Tests" page="Forms" :aria-hidden="this.uiVerbosity !== 'full'" />
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
  /* eslint-disable no-console */

  import PrimaryNav from './components/PrimaryNav.vue'
  import UiTools from './components/UiTools.vue'
  import TestIntroduction from './components/TestIntroduction.vue'
  import Test from './components/Test.vue'
  import Results from './components/Results.vue'

export default {
  name: 'app',
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

<style lang="scss">
:root {
  --color-brand: rgba(0, 166, 250, 1);
  --color-page: rgba(255, 255, 255, 1);
  --color-fill-light: rgba(0, 0, 0, .1);
  --color-fill-mid: rgba(0, 0, 0, .5);
  --color-notification-quiet: rgba(0, 0, 0, .65);

  --padding-container: 1rem;
  --margin-container: 1rem 0;

  --padding-sub-container: .5rem;
  --margin-sub-container: .5rem 0;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  [aria-hidden="true"] {
    opacity: .5;
  }

  > .l-grid {
    display: grid;
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    grid-template-columns: repeat(6, 2fr);
    grid-template-rows: 25% 75%;
    grid-template-areas:
      "header-nav header-nav header-nav header-controls header-controls header-controls"
      "sidebar-1 content content content content sidebar-2";
    min-height: 100vh;
  }

  .header-nav {
    justify-content: flex-start;
    grid-area: header-nav;
  }

  .header-controls {
    justify-content: flex-end;
    grid-area: header-controls;
  }

  .sidebar-1 {
    background-color: var(--color-fill-light);
    text-align: left;
    grid-area: sidebar-1;
  }

  .content {
    text-align: left;
    grid-area: content;
  }

  .sidebar-2 {
    text-align: left;
    grid-area: sidebar-2;
  }

  h2 {
    font-size: 3rem;
    font-weight: 100;
    margin: 1rem 0 0;
  }
}
</style>
