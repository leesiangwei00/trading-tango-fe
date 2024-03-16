<template>
  <div class="line-color !mb-20 section w-full">
    <p class="title text-4xl text-center mb-4">
      {{ $t("CollectAllRewards") }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto">
      <div
        v-for="reward in rewards"
        class="border-[1px] border-white rounded-lg relative py-4 bg-right-bottom bg-black/50 bg-no-repeat text-xl text-center side-logo"
      >
        <p>{{ $t(reward) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const rewards = ["Promo1", "Promo3", "Promo2", "Promo4"];
</script>
