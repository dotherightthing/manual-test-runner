<template>
  <div class="b-primary-nav l-block-disabled__wrapper">
    <div class="b-primary-nav__logo">
      <router-link to="/" class="b-primary-nav__link">MTR</router-link>
    </div>
    <ul class="b-primary-nav__list">
      <li class="b-primary-nav__list__item">
        <router-link to="/" class="b-primary-nav__link">Tests</router-link>
      </li>
      <li class="b-primary-nav__list__item">
        <router-link to="/about" class="b-primary-nav__link">About</router-link>
      </li>
    </ul>
    <QuietStateWarning/>
      </div>
</template>

<script>
  /**
   * Primary Navigation
   *
   * https://github.com/dotherightthing/manual-test-runner/issues/6
   */

  export default {
    name: 'PrimaryNav',
    computed: {
      routeTestCreate() {
        return this.$route.name === 'test-create';
      },
      routeTestRun() {
        return this.$route.name === 'test-run';
      },
      routeTestDashboard() {
        return this.$route.name === 'test-overview';
      },
      testId() {
        return this.$route.params.id;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.b-primary-nav {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1px;
  background-color: var(--color-fill-light);

  &__logo {
    display: grid;
    align-items: end;
    background-color: var(--color-brand);
    font-weight: bold;
  }

  &__list {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1px;

    &,
    & > li {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &__item {
      display: grid;
      align-items: end;
      background-color: var(--color-fill-mid);
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    color: var(--color-page);
    padding: var(--padding-container);
    padding-bottom: 2rem;

    &.router-link-exact-active {
      font-weight: bold;
    }
  }
  }
</style>
