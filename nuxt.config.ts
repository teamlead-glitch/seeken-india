// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'https://your-api-url.com' // Replace with your backend URL
    }
  },
  compatibilityDate: '2024-04-03',
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  typescript: {
    strict: false, // Ensure strict type-checking
  },
  
})
