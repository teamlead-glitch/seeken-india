export default defineNuxtConfig({
  // Config for runtime environment variables
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'https://mynuxtapp-laravel.pbsmokeup.in/api/', // Set your backend URL
    },
  },

  // Ensure compatibility with future Nuxt versions
  compatibilityDate: '2024-04-03',

  // Modules to use in the project
  modules: ['@pinia/nuxt', '@vite-pwa/nuxt'],

  // Enable Nuxt devtools for debugging
  devtools: { enabled: true },

  // TypeScript options (adjusted for better experience)
  typescript: {
    strict: false, // Optional: disable strict type-checking if it's causing issues
  },

  // Progressive Web App (PWA) module configuration
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt 3 PWA',
      short_name: 'NuxtPWA',
      description: 'A Nuxt 3 Progressive Web App example',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    // Workbox settings to manage caching
    workbox: {
      navigateFallback: '/',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/mynuxtapp-laravel\.pbsmokeup\.in\/.*$/, // Cache API requests
          handler: 'CacheFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 300, // Cache API responses for 5 minutes
            },
          },
        },
        {
          urlPattern: /^https:\/\/cdn\.example\.com\/.*$/, // Cache external CDN resources (add if needed)
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'cdn-cache',
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 86400, // Cache assets for 1 day
            },
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/, // Cache static image files
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 31536000, // Cache images for 1 year
            },
          },
        },
      ],
    },
  },

  // Add the manifest link in the <head> section
  app: {
    head: {
      link: [
        {
          rel: 'manifest',
          href: '/manifest.webmanifest', // Ensure this matches the generated manifest file location
        },
      ],
    },
  },

  generate: {
      routes: ['/products/1', '/products/2', '/products/3', '/products/4','/products/5', '/products/6', '/products/7', '/products/8', '/products/9', '/products/10'], // Optional: Define dynamic routes for SSG
    },
})
