export default defineNuxtPlugin(() => {
    const { ensureGuestToken } = useGuestToken()
    ensureGuestToken()
  })
  