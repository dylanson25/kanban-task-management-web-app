<template>
  <header class="w-100">
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            class="d-inline-block align-text-top me-3"
            viewBox="0 0 24 25"
            fill="none"
          >
            <rect width="6" height="25" rx="2" fill="#635FC7" />
            <rect opacity="0.75" x="9" width="6" height="25" rx="2" fill="#635FC7" />
            <rect opacity="0.5" x="18" width="6" height="25" rx="2" fill="#635FC7" />
          </svg>
          <span class="d-none d-md-inline-block"> Kanban </span>
        </a>
      </div>
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="sass">
.navbar
    background-color: $white
.is-dark
    .navbar
        background-color: $darkGrey
</style>
