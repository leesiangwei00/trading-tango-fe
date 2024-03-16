<template>
  <div
    v-show="timeLeft > 0"
    class="relative md:absolute flex flex-col justify-center md:flex-row items-center relative top-5 md:top-2"
  >
    <div class="relative">
      <p
        class="md:absolute md:w-20 text-center text-xs md:left-[-7rem] md:top-[-1rem]"
      >
        {{ $t("PROMOTIONENDSIN") }}
      </p>
    </div>
    <div class="flex flex-row justify-evenly">
      <div class="number-card">
        <p class="number">{{ days }}</p>
        <p class="unit">{{ $t(parseInt(days) > 1 ? "Days" : "Day") }}</p>
      </div>
      <p>:</p>
      <div class="number-card">
        <p class="number">{{ hours }}</p>
        <p class="unit">{{ $t(parseInt(days) > 1 ? "Hours" : "Hour") }}</p>
      </div>
      <p>:</p>
      <div class="number-card">
        <p class="number">{{ minutes }}</p>
        <p class="unit">{{ $t(parseInt(days) > 1 ? "Minutes" : "Minute") }}</p>
      </div>
      <p>:</p>
      <div class="number-card">
        <p class="number">{{ seconds }}</p>
        <p class="unit">{{ $t(parseInt(days) > 1 ? "Seconds" : "Second") }}</p>
      </div>
      <NumberCard :data="seconds" unit="Seconds" />
    </div>
  </div>
</template>

<script setup lang="ts">
const countdownDate = new Date("2024-03-31").getTime();
const timeLeft = useState("timeLeft", () => 0);

const days = computed(() => {
  return Math.floor(timeLeft.value / (1000 * 60 * 60 * 24)).toLocaleString(
    "en-US",
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  );
});

const hours = computed(() => {
  return Math.floor(
    (timeLeft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
});

const minutes = computed(() => {
  return Math.floor(
    (timeLeft.value % (1000 * 60 * 60)) / (1000 * 60)
  ).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
});

const seconds = computed(() => {
  return Math.floor((timeLeft.value % (1000 * 60)) / 1000).toLocaleString(
    "en-US",
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  );
});

const updateTimeLeft = () => {
  const now = new Date().getTime();
  timeLeft.value = countdownDate - now;
};

onMounted(() => {
  updateTimeLeft();
  setInterval(updateTimeLeft, 1000);
});
</script>
