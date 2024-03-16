<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/80 z-10"
  >
    <div class="m-8 p-8 text-center bg-color rounded-3xl min-w-80 h-fit">
      <p class="title line-color block mb-6 text-lg">
        {{ $t("VerifyEmail") }}
      </p>
      <p>
        {{
          user.verifyEmail
            ? $t("VerifyEmailDesc", {
                name: `${user.firstName} ${user.lastName}`,
              })
            : $t("EmailVerified")
        }}
      </p>
      <Button
        :label="user.verifyEmail ? 'VerifyEmail' : 'Close'"
        :onClick="
          user.verifyEmail
            ? onVerifyEmailClick
            : () => $emit('close-verify-email')
        "
        class="!max-w-96 my-4"
      />
      <p v-show="loading" class="error-msg">{{ $t(errorMsg) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../base/Button.vue";

const user = useUserStore();
const loading = useState("loading");
const errorMsg = useState("errorMsg", () => "");
const emit = defineEmits(["close-verify-email"]);

const onVerifyEmailClick = async () => {
  loading.value = true;
  const res = await user.verify();
  if (!res?.success) {
    errorMsg.value = res?.error;
  }
  loading.value = false;
};
</script>
