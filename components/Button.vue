<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: "Label",
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
})

</script>

<template>
  <button
    :disabled="props.disabled"
    class="btn"
  >
    {{ props.label }}
  </button>
</template>