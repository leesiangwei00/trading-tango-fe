<template>
  <button class="custom-button" @click="onClick" :disabled="disabled">
    {{ $t(label) }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  onClick: Function,
  disabled: Boolean,
});
</script>
