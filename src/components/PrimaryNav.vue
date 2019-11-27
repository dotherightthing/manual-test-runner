<template>
  <div class="b-primary-nav">
    <div class="b-primary-nav__logo">
      <a href="/" class="b-primary-nav__link">DTRT</a>
    </div>
    <ul class="b-primary-nav__list">
      <li class="b-primary-nav__list__item">
        <a href="#" class="b-primary-nav__link">{{ section }}</a>
      </li>
      <li class="b-primary-nav__list__item">
        <a href="#" class="b-primary-nav__link">{{ page }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PrimaryNav',
  props: {
    section: String,
    page: String
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
      background-color: var(--color-fill-mid);
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    color: var(--color-page);
    padding: 4rem 1rem 2rem;
  }
}
</style>
