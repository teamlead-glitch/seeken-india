export default defineNuxtConfig({

  ssr: true,
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
      title: "Seeken",
      meta: [
        { charset: "UTF-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "viewport", content: "width=device-width, user-scalable=no" },
        { name: "google-site-verification", content: "" },
        { name: "description", content: "" },
        { name: "robots", content: "Index, follow" }
      ],
      link: [
        // Canonical URL (set dynamically in components if needed)
        { rel: "canonical", href: "" },

        // Favicon
        { rel: "icon", type: "image/webp", href: "images/favicon.webp" },
        { rel: "icon", type: "image/ico", href: "images/favicon.ico", sizes: "32x32" },

        // Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        },

        // Bootstrap & Icons
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" },

        // Swiper & Custom Styles
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" },
        { rel: "stylesheet", href: "/scss/owls.css" },
        { rel: "stylesheet", href: "/scss/main.css" }
      ],
      script: [
        // jQuery
        { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js", defer: true },

        // Bootstrap JS
        { src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.bundle.min.js", defer: true },

        // Swiper
        { src: "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js", defer: true },

        // Custom Scripts
        { src: "/js/webslidemenu.js", defer: true },
        { src: "/js/owls.js", defer: true },
        { src: "/js/main.js", defer: true },

        // Inline Script for Grab Sale
        {
          children: `
            document.addEventListener("DOMContentLoaded", function () {
              const closeBtn = document.querySelector(".close-btns");
              if (closeBtn) {
                const saleText = document.querySelector(".grab_sale p");
                const icon = document.querySelector(".close-btns i");

                closeBtn.addEventListener("click", function () {
                  if (saleText.style.display === "none" || saleText.style.display === "") {
                    saleText.style.display = "block";
                    icon.classList.remove("bi-chevron-down");
                    icon.classList.add("bi-chevron-up");
                  } else {
                    saleText.style.display = "none";
                    icon.classList.remove("bi-chevron-up");
                    icon.classList.add("bi-chevron-down");
                  }
                });
              }
            });
          `,
          type: "text/javascript",
        },

        // Inline Script for Bootstrap Carousel
        {
          children: `
            document.addEventListener("DOMContentLoaded", function () {
              var carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
                interval: 3000,
                wrap: true
              });

              var thumbnails = document.querySelectorAll('.carousel-indicators [data-bs-slide-to]');
              thumbnails.forEach(function (thumbnail) {
                thumbnail.addEventListener('click', function () {
                  var slideTo = this.getAttribute('data-bs-slide-to');
                  carousel.to(slideTo);
                });
              });
            });
          `,
          type: "text/javascript",
        },

        // Inline Script for Profile Icon Dropdown
        {
          children: `
            document.addEventListener("DOMContentLoaded", function () {
              const profileIcon = document.querySelector(".profile-icon");
              if (profileIcon) {
                const dropdown = document.querySelector(".dropdown-menu");

                profileIcon.addEventListener("click", function () {
                  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
                });

                document.addEventListener("click", function (event) {
                  let profile = document.querySelector(".profile-container");
                  if (!profile.contains(event.target)) {
                    dropdown.style.display = "none";
                  }
                });
              }
            });
          `,
          type: "text/javascript",
        },

        // Inline Script for Swiper Slider
        {
          children: `
            document.addEventListener("DOMContentLoaded", function () {
              new Swiper(".mySwiper", {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: false,
                loop: true,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                  480: { slidesPerView: 2.2 }
                }
              });

              new Swiper(".mySwiper2", {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: false,
                loop: true,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                  480: { slidesPerView: 1.2 }
                }
              });

              new Swiper(".mySwiper3", {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: false,
                loop: true,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                  480: { slidesPerView: 1.2 }
                }
              });
            });
          `,
          type: "text/javascript",
        },

        // Inline Script for Offcanvas Menu Behavior
        {
          children: `
            document.addEventListener("DOMContentLoaded", function () {
              const offcanvas = document.getElementById("offcanvasRight_mobmenu");
              const grabSaleDiv = document.getElementById("grab_sale");

              if (offcanvas && grabSaleDiv) {
                offcanvas.addEventListener("show.bs.offcanvas", function () {
                  grabSaleDiv.style.display = "none";
                });

                offcanvas.addEventListener("hidden.bs.offcanvas", function () {
                  grabSaleDiv.style.display = "block";
                });
              }
            });
          `,
          type: "text/javascript",
        },
      ],
    },
  },

  // generate: {
  //     routes: ['/products/1', '/products/2', '/products/3', '/products/4','/products/5', '/products/6', '/products/7', '/products/8', '/products/9', '/products/10'], // Optional: Define dynamic routes for SSG
  //   },

  nitro: {
    prerender: {
      routes: ["/"], // Manually set valid routes
      ignore: ["/b"], // Ignore invalid route
    }
  }
})
