<template>
  <div class="custom-checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <p>{{ $t(desc) }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  desc: String,
  modelValue: Boolean,
});
</script>
