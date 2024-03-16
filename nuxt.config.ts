// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "nuxt-icon", "@nuxtjs/tailwindcss"],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "zh",
        file: "zh.json",
      },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://db.onlinewebfonts.com/a/yrnPs1junQwCj1zy",
          type: "text/css",
        },
      ],
    },
  },
});
