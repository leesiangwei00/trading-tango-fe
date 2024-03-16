<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-evenly !mt-20 !my-4 section w-full"
  >
    <img
      src="~/assets/images/logomark.png"
      alt="Promo Logo"
      class="w-60 lg:w-40 h-fit"
    />
    <div class="flex flex-col text-center justify-center my-8 title">
      <p class="title text-6xl">{{ $t("PromoTitle") }}</p>
      <p class="subtitle text-4xl">{{ $t("PromoName") }}</p>
      <p class="subtitle text-4xl">{{ $t("PromoDate") }}</p>
      <div class="flex flex-row justify-center text-xs mt-2 subtitle">
        <p>*</p>
        <a class="mx-1 line-color underline" href="">{{
          $t("TermsAndConditions")
        }}</a>
        <p>{{ $t("apply") }}</p>
      </div>
    </div>
  </div>
</template>
