// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['..'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'es',
        name: 'Español',
        language: 'es-ES',
      },
    ],
  },
  compatibilityDate: '2025-05-19',
});
