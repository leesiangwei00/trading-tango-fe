<template>
  <div id="registration-form" class="!my-8 section">
    <p class="title line-color block mb-6 text-lg">
      {{ $t("RegisterNow") }}
    </p>

    <form @submit.prevent="onSubmit">
      <Input
        name="firstName"
        placeholder="FirstName"
        v-model="signupData.firstName"
        :error="v$.firstName.$errors[0]?.$message.toString()"
        @blur="v$.firstName.$touch"
        :class="{
          error: v$.firstName.$error,
        }"
      />

      <Input
        name="lastName"
        placeholder="LastName"
        v-model="signupData.lastName"
        :error="v$.lastName.$errors[0]?.$message.toString()"
        @blur="v$.lastName.$touch"
        :class="{
          error: v$.lastName.$error,
        }"
      />

      <Input
        name="email"
        placeholder="Email"
        v-model="signupData.email"
        :error="v$.email.$errors[0]?.$message.toString()"
        @blur="v$.email.$touch"
        :class="{
          error: v$.email.$error,
        }"
      />

      <div class="flex flex-row">
        <Select
          :data="signupData.country"
          :options="
            countryMobileList.map(({ name, phone }) => ({
              display: `${name} (+${phone})`,
              data: name,
              selected: name === signupData.country,
            }))
          "
          :error="v$.country.$errors[0]?.$message.toString()"
          @blur="v$.country.$touch"
          class="mr-4 !w-60"
          :class="{
            error: v$.country.$error,
          }"
        />
        <Input
          name="mobile"
          placeholder="Mobile"
          v-model="signupData.mobile"
          :error="v$.mobile.$errors[0]?.$message.toString()"
          @blur="v$.mobile.$touch"
          :class="{
            error: v$.mobile.$error,
          }"
        />
      </div>

      <Input
        name="password"
        placeholder="Password"
        v-model="signupData.password"
        :error="v$.password.$errors[0]?.$message.toString()"
        @blur="v$.password.$touch"
        :class="{
          error: v$.password.$error,
        }"
      />

      <Input
        name="passwordCfm"
        placeholder="PasswordConfirmation"
        v-model="signupData.passwordCfm"
        :error="v$.passwordCfm.$errors[0]?.$message.toString()"
        @blur="v$.passwordCfm.$touch"
        :class="{
          error: v$.passwordCfm.$error,
        }"
      />

      <div class="checkboxes">
        <Checkbox v-model="signupData.atLeast18" desc="AtLeast18" />

        <Checkbox v-model="signupData.acknowledge" desc="Acknowledge" />
      </div>

      <p class="text-xs text-white/75 mt-6 mb-2">
        <span>{{ $t("ThisSiteIsProtectedByRecaptchAndTheGoogle") }}</span>
        <span class="underline text-white/50 cursor-pointer">{{
          $t("PrivacyPolicy")
        }}</span>
        <span>{{ $t("and") }}</span>
        <span class="underline text-white/50 cursor-pointer">{{
          $t("TermsOfService")
        }}</span>
        <span>{{ $t("apply") }}</span>
      </p>

      <Button
        type="submit"
        label="RegisterNow"
        :disabled="!(signupData.atLeast18 && signupData.acknowledge)"
        class="rounded-3xl"
      />
      <p v-show="errorMsg" class="error-msg">
        {{ $t(errorMsg) }}
      </p>
    </form>

    <div class="flex flex-row space-x-4 mt-4">
      <Button type="button" label="SignupByFacebook" class="fb" />
      <Button type="button" label="SignupByGoogle" class="google" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  numeric,
  sameAs,
} from "@vuelidate/validators";
import Input from "../base/Input.vue";
import Button from "../base/Button.vue";
import { countries } from "countries-list";
import Select from "../base/Select.vue";

const init = {
  firstName: "",
  lastName: "",
  email: "",
  country: "Malaysia",
  mobile: "",
  password: "",
  passwordCfm: "",
  atLeast18: false,
  acknowledge: false,
};

const user = useUserStore();
const loading = useState("loading");
const signupData = useState("signupData", () => init);
const showPopup = useState("showPopup", () => false);
const errorMsg = useState("errorMsg", () => "");
const showVerifyEmail = useState("showVerifyEmail");

const countryMobileList = Object.values(countries).flatMap(({ name, phone }) =>
  phone.map((item) => item).map((item) => ({ name, phone: item }))
);

const checkNameFormat = (value) => /^[a-zA-Z\/\s]*$/.test(value);

const checkPasswordFormat = (value) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    value
  );

const v$ = useVuelidate(
  {
    firstName: {
      required: helpers.withMessage("Required", required),
      format: helpers.withMessage("InvalidFirstName", checkNameFormat),
    },
    lastName: {
      required: helpers.withMessage("Required", required),
      format: helpers.withMessage("InvalidLastName", checkNameFormat),
    },
    email: {
      required: helpers.withMessage("Required", required),
      format: helpers.withMessage("InvalidEmail", email),
    },
    country: {
      required: helpers.withMessage("Required", required),
    },
    mobile: {
      required: helpers.withMessage("Required", required),
      format: helpers.withMessage("InvalidMobile", numeric),
    },
    password: {
      required: helpers.withMessage("Required", required),
      format: helpers.withMessage("InvalidPasswordFormat", checkPasswordFormat),
    },
    passwordCfm: {
      required: helpers.withMessage("Required", required),
      format: helpers.withMessage("InvalidPasswordFormat", checkPasswordFormat),
      sameAs: helpers.withMessage(
        "SameAsPassword",
        sameAs(computed(() => signupData.value.password))
      ),
    },
  },
  signupData.value
);

const onSubmit = async () => {
  loading.value = true;
  const valid = await v$.value.$validate();
  if (valid) {
    const res = await user.register({
      firstName: signupData.value.firstName,
      lastName: signupData.value.lastName,
      email: signupData.value.email,
      country: signupData.value.country,
      mobile:
        countryMobileList.find(({ name }) => signupData.value.country === name)
          .phone + signupData.value.mobile,
      password: signupData.value.password,
    });
    if (res?.success) {
      signupData.value = init;
      showPopup.value = true;
      errorMsg.value = "";
      showVerifyEmail.value = true;
    } else {
      errorMsg.value = res?.error;
    }
  }
  loading.value = false;
};
</script>
