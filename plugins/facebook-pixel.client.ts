export default defineNuxtPlugin((nuxtApp) => {
  // Load Facebook Pixel script
  if (process.client) {
    !(function (f, b, e, v, n?, t?, s?) {
      if ((f as any).fbq) return
      n = f.fbq = function () {
        ;(n as any).callMethod
          ? (n as any).callMethod.apply(n, arguments)
          : (n as any).queue.push(arguments)
      }
      if (!(f as any)._fbq) (f as any)._fbq = n
      ;(n as any).push = n
      ;(n as any).loaded = !0
      ;(n as any).version = '2.0'
      ;(n as any).queue = []
      t = b.createElement(e) as HTMLScriptElement
      t.async = !0
      t.src = v as string
      s = b.getElementsByTagName(e)[0]
      s?.parentNode?.insertBefore(t, s)
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    )

    ;(window as any).fbq('init', '1294044068863813')
    ;(window as any).fbq('track', 'PageView')

    // Track route changes in SPA mode
    const router = useRouter()
    router.afterEach(() => {
      if ((window as any).fbq) {
        (window as any).fbq('track', 'PageView')
      }
    })
  }
})
