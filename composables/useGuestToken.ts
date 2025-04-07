export const useGuestToken = () => {
    const guestToken = useCookie<string>('guest_token', {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/'
    })
  
    const generateUUID = (): string => {
      // Basic UUID v4 generator
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
      })
    }
  
    const ensureGuestToken = () => {
      if (!guestToken.value) {
        guestToken.value = generateUUID()
      }
      return guestToken.value
    }
  
    return {
      guestToken,
      ensureGuestToken
    }
  }
  