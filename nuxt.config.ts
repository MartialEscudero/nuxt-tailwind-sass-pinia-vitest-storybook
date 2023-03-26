// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/eslint-module',
  ],
  css: [
    '~/assets/styles/css/tailwind.css',
    '~/assets/styles/scss/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
