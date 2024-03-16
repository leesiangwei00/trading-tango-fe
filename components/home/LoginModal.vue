<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/80"
  >
    <div class="m-8 p-8 text-center bg-color rounded-3xl min-w-80 h-fit">
      <div
        @click="
          emit('close-login');
          errorMsg = '';
        "
        class="flex justify-between mb-4"
      >
        <p>{{ $t("Login") }}</p>
        <Icon
          name="material-symbols:close"
          size="1.5rem"
          class="cursor-pointer text-white"
        />
      </div>
      <form @submit.prevent="onSubmit">
        <Input
          name="email"
          placeholder="Email"
          v-model="loginData.email"
          :error="v$.email.$errors[0]?.$message.toString()"
          @blur="v$.email.$touch"
          :class="{
            error: v$.email.$error,
          }"
        />
        <Input
          name="password"
          placeholder="Password"
          v-model="loginData.password"
          :error="v$.password.$errors[0]?.$message.toString()"
          @blur="v$.password.$touch"
          :class="{
            error: v$.password.$error,
          }"
        />
        <Button type="submit" label="Login" />
      </form>
      <Button label="Login with Facebook" class="fb mt-2" />
      <Button
        label="Login with Google"
        class="google mt-2"
        :onClick="loginGoogle"
      />
      <p v-show="errorMsg" class="error-msg mt-2">{{ $t(errorMsg) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";
import Input from "../base/Input.vue";
import Button from "../base/Button.vue";

const init = {
  email: "",
  password: "",
};

const user = useUserStore();
const loading = useState("loading");
const errorMsg = useState("errorMsg", () => "");
const showVerifyEmail = useState("showVerifyEmail");

const emit = defineEmits(["close-login"]);

const loginData = useState("loginData", () => init);

const v$ = useVuelidate(
  {
    email: {
      required: helpers.withMessage("Required", required),
      format: helpers.withMessage("InvalidEmail", email),
    },
    password: {
      required: helpers.withMessage("Required", required),
    },
  },
  loginData.value
);

const onSubmit = async () => {
  loading.value = true;
  const valid = await v$.value.$validate();
  console.log(valid);
  if (valid) {
    const res = await user.login({
      email: loginData.value.email,
      password: loginData.value.password,
    });
    if (res?.success) {
      errorMsg.value = "";
      emit("close-login");
      loginData.value = init;
      if (user.verifyEmail) {
        showVerifyEmail.value = true;
      }
    } else {
      errorMsg.value = res?.error;
    }
  }
  loading.value = false;
};

const loginFacebook = () => {};

const loginGoogle = () => {};
</script>
