<template>
  <div class="custom-select">
    <select name="country" placeholder="Country" :value="data">
      <option
        v-for="{ display, data, selected } in options"
        :key="data.toString()"
        :value="data"
        :selected="selected"
      >
        {{ display }}
      </option>
    </select>
    <p v-if="error">
      {{ $t(error) }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: String,
  options: Array<{
    display: String;
    data: String;
    selected: Boolean;
  }>,
  error: String,
});
</script>
