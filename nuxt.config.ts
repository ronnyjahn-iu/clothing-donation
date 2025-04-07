// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["~/assets/css/style.css","mmenu-light/dist/mmenu-light.css"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
});
