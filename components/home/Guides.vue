<template>
  <div class="!my-6 md:section guides-container">
    <p class="title line-color text-4xl text-center mb-4">
      {{ $t("TradingGuides") }}
    </p>
    <div
      class="flex flex-col md:flex-row md:space-x-4 items-center justify-center relative"
    >
      <div class="chevron left-0">
        <Icon name="bi:chevron-compact-left" size="1.5rem" />
      </div>
      <div class="chevron right-0">
        <Icon name="bi:chevron-compact-right" size="1.5rem" />
      </div>
      <div class="guide hidden md:block">
        <img src="~/assets/images/guides_01.png" alt="" />
        <a href="">{{ $t("Guide1") }}</a>
      </div>
      <div class="guide">
        <img src="~/assets/images/guides_02.png" alt="" />
        <a href="">{{ $t("Guide2") }}</a>
      </div>
      <div class="guide hidden md:block">
        <img src="~/assets/images/guides_03.png" alt="" />
        <a href="">{{ $t("Guide3") }}</a>
      </div>
    </div>
  </div>
</template>
