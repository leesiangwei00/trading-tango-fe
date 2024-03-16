<template>
  <div class="download bg-black text-center pt-4 pb-8">
    <p class="title">{{ $t("LogInToMT4DesktopApp") }}</p>
    <div class="md:max-w-96 w-full m-auto">
      <Button label="DownloadPlatform" />
    </div>
    <p class="title">{{ $t("LogInViaMT4MobileApp") }}</p>
    <div class="flex flex-row justify-center">
      <div class="download-button">
        <img src="~/assets/images/apple.png" alt="" />
        <div>
          <p class="desc">{{ $t("DownloadOnThe") }}</p>
          <p class="platform">{{ $t("IosPlatform") }}</p>
        </div>
      </div>
      <div class="download-button">
        <img src="~/assets/images/playstore.png" alt="" />
        <div>
          <p class="desc">{{ $t("DownloadOnThe") }}</p>
          <p class="platform">{{ $t("AndroidPlatform") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../base/Button.vue";
</script>
