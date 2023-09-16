<template>
  <o-switch v-model="active">{{ label }}</o-switch>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue';
import type { Ref } from 'vue';
export default defineComponent({
  props: {
    modelValue: { type: Boolean, default: false },
    label: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const active: Ref<Boolean> = ref(props.modelValue);

    watch(modelValue, (value) => (active.value = value));
    watch(active, (value) => emit('update:modelValue', value));
    return { active };
  },
});
</script>

<style lang="sass" scoped></style>
