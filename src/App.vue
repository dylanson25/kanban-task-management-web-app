<template>
  <default-layout>
    <router-view />
  </default-layout>
</template>
<script lang="ts">
import { onBeforeMount, defineComponent } from 'vue';
import { useUserPrference } from './store';
export default defineComponent({
  setup() {
    const { THEME, setTheme, installTheme } = useUserPrference();
    onBeforeMount(() => {
      if (!THEME) setTheme('light');
      else installTheme(THEME);
    });
  },
});
</script>
