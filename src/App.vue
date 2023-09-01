<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    {{ THEME }}
  </nav>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { onBeforeMount } from 'vue';
import { useUserPrference } from './store';
export default defineComponent({
  setup() {
    const { THEME, setTheme, installTheme } = useUserPrference();

    onBeforeMount(() => {
      if (!THEME) setTheme('light');
      else installTheme(THEME);
    });
    return {
      THEME,
    };
  },
});
</script>

<style lang="scss">
#app {
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
