<template>
  <transition name="sidebar-close">
    <div v-if="open">
      <o-sidebar :open="true" id="sidebar" fullheight position="static">
        <h3>Example</h3>
        <slot />
      </o-sidebar>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue';

export default defineComponent({
  props: {
    isOpen: { type: Boolean, default: true },
  },
  emits: ['update:is-open'],
  setup(props, { emit }) {
    const { isOpen } = toRefs(props);
    const open = ref<boolean>(props.isOpen);

    watch(isOpen, (value) => (open.value = value));
    watch(open, (_isOpen) => {
      emit('update:is-open', _isOpen);
      let _sidebar = document.getElementById('sidebar');
      if (_sidebar) {
        let canvas = _sidebar.children[0];
        canvas.classList[_isOpen ? 'remove' : 'add']('hiding');
      }
    });
    return {
      open,
    };
  },
});
</script>

<style lang="sass" scoped>
:deep(.sidebar)
  height: calc(100vh - 56px)
  overflow-x: hidden
  max-width: 260px
  .offcanvas
    background-color: $white
@keyframes sidebar-close-in
  0%
    width: 0px
  100%
    width: 260px
@keyframes sidebar-close-out
  0%
    width: 260px
  100%
    width: 0px
@include media-breakpoint-up(xxl)
  :deep(.sidebar)
    max-width: 300px
  @keyframes sidebar-close-in
    0%
      width: 0px
    100%
      width: 300px
  @keyframes sidebar-close-out
    0%
      width: 300px
    100%
      width: 0px
.sidebar-close-enter-active
  animation: sidebar-close-in 260ms cubic-bezier(0.785, 0.135, 0.150, 0.860)
.sidebar-close-leave-active
  animation: sidebar-close-out 260ms cubic-bezier(0.785, 0.135, 0.150, 0.860)
</style>
<style lang="sass">
@include color-mode(dark)
  .sidebar .offcanvas
    background-color: $darkGrey
</style>
