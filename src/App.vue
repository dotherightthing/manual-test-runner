<template>
  <div id="app">
    <div class="l-grid">
      <PrimaryNav class="l-grid--full" section="Tests" page="Forms" />
      <div class="l-grid--left">
        <Summary title="Label" summary="Testing different ways of using labels." />
      </div>
      <div class="l-grid--center">
        <h2>Tests</h2>
        <Test msg="Tests go here"/>
      </div>
      <div class="l-grid--right">
        <Results msg="Results table goes here" />
      </div>
    </div>
  </div>
</template>

<script>
  import Test from './components/Test.vue'
  import PrimaryNav from './components/PrimaryNav.vue'
  import Summary from './components/Summary.vue'
  import Results from './components/Results.vue'

export default {
  name: 'app',
  components: {
    Test,
    PrimaryNav,
    Summary,
    Results
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .l-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1px;

    &--full {
      grid-column: span 12;
      justify-content: flex-start;
    }

    &--left {
      grid-column: span 3;
      background-color: var(--color-fill-light);
      text-align: left;
    }

    &--center {
      grid-column: span 6;
      text-align: left;
    }

    &--right {
      grid-column: span 3;
      text-align: left;
    }
  }
}
</style>
