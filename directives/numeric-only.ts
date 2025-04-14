export default {
    mounted(el: HTMLInputElement) {
      el.addEventListener('input', () => {
        el.value = el.value.replace(/\D/g, '')
        // Dispatch input event to update v-model
        el.dispatchEvent(new Event('input'))
      })
    },
  }
  