<template>
  <div class="header-background bg-cover relative flex flex-col items-center">
    <Header />
    <Countdown />
    <Event />
    <Rewards />
  </div>
  <Promos />
  <Steps />
  <RegistrationForm v-show="!user.email" />
  <Guides />
  <Downloads />
  <Footer />

  <LoginModal v-show="showLogin === true" @close-login="showLogin = false" />
  <VerifyEmail
    v-show="showVerifyEmail === true"
    @close-verify-email="showVerifyEmail = false"
  />
  <FAB />
  <Popup
    :show="showPopup"
    @close-popup="showPopup = false"
    message="RegisterSuccessfully"
  />
  <Loading v-show="loading" />
</template>

<script setup lang="ts">
import Header from "~/components/home/Header.vue";
import Countdown from "~/components/home/Countdown.vue";
import Rewards from "~/components/home/Rewards.vue";
import Event from "~/components/home/Event.vue";
import Promos from "~/components/home/Promos.vue";
import Steps from "~/components/home/Steps.vue";
import RegistrationForm from "~/components/home/RegistrationForm.vue";
import Guides from "~/components/home/Guides.vue";
import Downloads from "~/components/home/Downloads.vue";
import Footer from "~/components/home/Footer.vue";
import LoginModal from "~/components/home/LoginModal.vue";
import VerifyEmail from "~/components/home/VerifyEmail.vue";
import FAB from "~/components/home/FAB.vue";
import Popup from "~/components/base/Popup.vue";
import Loading from "~/components/base/Loading.vue";

const user = useUserStore();
const loading = useState("loading", () => false);
const showPopup = useState("showPopup", () => false);
const showLogin = useState("showLogin", () => false);
const showVerifyEmail = useState("showVerifyEmail", () => false);
</script>
