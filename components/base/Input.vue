<template>
  <div class="custom-input">
    <input
      name="name"
      type="text"
      :placeholder="$t(placeholder)"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <p v-if="error">
      {{ $t(error) }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  placeholder: String,
  modelValue: String,
  error: String,
});
</script>
