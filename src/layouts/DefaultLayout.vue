<template>
  <main>
    <aside>barra lateral</aside>
    <section>
      <Navbar />
      <section class="d-flex w-100">
        <slot />
      </section>
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Navbar } from '@/components';
export default defineComponent({
  components: {
    Navbar,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="sass" scoped></style>
