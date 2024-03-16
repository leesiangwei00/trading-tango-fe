<template>
  <div
    v-show="show"
    class="fixed top-5 flex justify-center items-center w-full"
  >
    <div class="py-2 px-4 text-center bg-color rounded-3xl h-fit !bg-white">
      <p class="text-black">{{ $t(message) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  show: Boolean,
  message: String,
});

const emit = defineEmits(["close-popup"]);

const showPopup = useState("showPopup", () => false);

watchEffect(() => {
  showPopup.value = props.show;
});

watch(showPopup, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      emit("close-popup");
    }, 2000);
  }
});
</script>
