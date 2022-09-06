import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: ''
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  ssr: false,
})
