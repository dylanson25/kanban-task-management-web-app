<template>
  <div class="theme-selector d-flex py-2 mt-auto mx-auto">
    <div class="inner-swith d-flex align-items-center justify-content-between mt-auto mx-auto">
      <o-icon icon="white-balance-sunny"> </o-icon>
      <Switch v-model="isActive" class="m-0" size="medium" />
      <o-icon icon="lightbulb-night"> </o-icon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import type { Ref } from 'vue';
import { useUserPrference } from '@/store';
import Switch from './Switch.vue';
export default defineComponent({
  components: {
    Switch,
  },
  setup() {
    const { THEME, setTheme } = useUserPrference();
    const isActive: Ref<Boolean> = ref(THEME === 'dark');

    watch(isActive, (value) => setTheme(value ? 'dark' : 'light'), { immediate: true });

    return {
      isActive,
    };
  },
});
</script>
<style lang="sass" scoped>
.theme-selector
  width: 100%
  max-width: 235px
  background-color: $light
  .inner-swith
    width: 120px
    color: $medium-grey
    // .mdi
  @include media-breakpoint-up($bp-xxl)
    .theme-selector
      max-width: 250px
</style>
<style lang="sass">
@include color-mode(dark)
  .theme-selector
    background-color: $dark
</style>
