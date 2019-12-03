<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
  }

  .l-grid {
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
</style>