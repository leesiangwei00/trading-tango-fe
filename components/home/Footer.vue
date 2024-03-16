<template>
  <div class="md:hidden">
    <div class="bg-[#112a4c] px-6 py-4 text-justify">
      <div class="flex flex-col space-y-4 px-2">
        <p>{{ $t("FooterPara1") }}</p>
        <p>{{ $t("FooterPara2") }}</p>
        <p>{{ $t("FooterPara3") }}</p>
      </div>
      <hr class="my-4 border-[1px]" />
      <p class="mb-6">{{ $t("FooterPara4") }}</p>
      <div v-for="{ name, desc, website } in companies" class="m-6">
        <p class="text-[#00b6f5] title">{{ name }}</p>
        <p>{{ $t(desc) }}</p>
        <p class="title">{{ website }}</p>
      </div>
      <hr class="my-4 border-[1px]" />
      <div class="bg-[#102849]">
        <p>{{ $t("Copyright") }}</p>
      </div>
    </div>
    <div class="bg-[#181e2d] px-1 py-4">
      <span v-for="(doc, i) in docs"
        >{{ $t(doc) }}{{ i === docs.length - 1 ? "" : " | " }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const companies = [
  {
    name: "Blackwell Global Investments (UK) Limited",
    desc: "Company1Desc",
    website: "www.blackwellglobal.co.uk",
  },
  {
    name: "Blackwell Global Investment (Cambodia) CO., Ltd",
    desc: "Company2Desc",
    website: "www.blackwellglobal-kh.com",
  },
  {
    name: "Blackwell Global Securities Limited",
    desc: "Company3Desc",
    website: "www.blackwellglobal.com.hk",
  },
  {
    name: "Blackwell Global Futures Limited",
    desc: "Company4Desc",
    website: "www.blackwellglobal.com.hk",
  },
  {
    name: "Blackwell Global Asset Management Limited",
    desc: "Company5Desc",
    website: "www.blackwellglobal.com.hk",
  },
  {
    name: "Blackwell Global Investments Limited",
    desc: "Company6Desc",
    website: "www.blackwellglobal.com",
  },
];
const docs = [
  "TermsOfBusiness",
  "ProductInformationDocument",
  "RiskWarningNotice",
  "PrivacyPolicy",
  "AMLOrKYCPolicy",
  "SecurityAndFraudAwareness",
];
</script>
