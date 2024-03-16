<template>
  <div
    class="relative flex flex-row justify-between items-center section !pt-4 w-full"
  >
    <img src="~/assets/images/logo-white.png" alt="Logo" class="h-7" />
    <div class="flex flex-row space-x-1">
      <div class="mr-4 cursor-pointer">
        <Icon
          v-if="locale === 'en'"
          name="emojione-v1:flag-for-united-kingdom"
          @click="setLocale('zh')"
          size="2rem"
        />
        <Icon
          v-else-if="locale === 'zh'"
          name="emojione-v1:flag-for-china"
          @click="setLocale('en')"
          size="2rem"
        />
      </div>
      <a
        v-show="!user.email"
        href="#registration-form"
        class="custom-button !rounded-3xl flex items-center"
        >{{ $t("REGISTERNOW") }}</a
      >
      <div class="relative">
        <Icon
          name="iconamoon:profile-fill"
          size="2rem"
          class="text-gray-500 group cursor-pointer"
          @click="showDropdown = !showDropdown"
        />
        <p
          @click="user.email ? onLogoutClick() : onLoginClick()"
          v-show="showDropdown"
          class="absolute bg-gray-900 py-1 px-4 z-10 right-0 rounded cursor-pointer"
        >
          {{ user.email ? $t("Logout") : $t("Login") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useUserStore();
const showDropdown = useState("showDropdown", () => false);
const showLogin = useState("showLogin");
const { locale, setLocale } = useI18n();

const onLoginClick = () => {
  showLogin.value = true;
  showDropdown.value = false;
};

const onLogoutClick = () => {
  user.logout();
  showDropdown.value = false;
};
</script>
