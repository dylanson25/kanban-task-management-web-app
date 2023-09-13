<template>
  <main class="h-100">
    <Navbar />
    <section class="d-flex flex-row w-100">
      <Sidebar v-model:is-open="isOpen" />
      <section class="w-100 p-4">
        <o-button @click="() => (isOpen = !isOpen)">Open</o-button>
        <slot />
      </section>
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Navbar } from '@/components';
import { Sidebar } from './';
export default defineComponent({
  components: {
    Navbar,
    Sidebar,
  },
  setup() {
    const isOpen = ref(true);
    return { isOpen };
  },
});
</script>
<style lang="sass" scoped></style>
