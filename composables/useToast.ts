interface Toast {
    id: number
    message: string
    type: 'success' | 'error' | 'warning' | 'info'
  }
  
  const toasts = ref<Toast[]>([])
  
  export const useToast = () => {
    const addToast = (message: string, type: Toast['type'] = 'info', duration = 2500) => {
      const id = Date.now()
      toasts.value.push({ id, message, type })
  
      setTimeout(() => {
        toasts.value = toasts.value.filter(t => t.id !== id)
      }, duration)
    }
  
    return { toasts, addToast }
  }
  