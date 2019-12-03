<template>
  <div class="about">
    <div class="l-grid">
      <PrimaryNav class="header-nav" />
      <div class="sidebar-1"></div>
      <div class="content">
        <h2>About page</h2>
      </div>
      <div class="sidebar-2"></div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import PrimaryNav from '@/components/PrimaryNav.vue'

  export default {
    name: 'home',
    components: {
      PrimaryNav
    }
  }
</script>

