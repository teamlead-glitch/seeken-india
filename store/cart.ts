import { defineStore } from 'pinia';
import { useAuthStore } from '~/store/auth';
import { useGuestToken } from '@/composables/useGuestToken'



export const useCartStore = defineStore('cart', {
  

  state: () => ({
    cart: [],
  }),
  actions: {

    async syncCartWithServer(item) {

      const authStore = useAuthStore()

      console.log(item, 'item add to cart')
      const endpoint = `${useRuntimeConfig().public.apiBase}add-to-cart`;

      const { ensureGuestToken } = useGuestToken()

      const headers: any = {}

      if (authStore.token && authStore.user) {
        const authToken = authStore.token;
        if (authToken) headers['Authorization'] = `Bearer ${authToken}`
      } else {
        const guestToken = ensureGuestToken()
        if (guestToken) headers['X-Guest-Token'] = guestToken
      }

      try {
        await $fetch(endpoint, {
          method: 'POST',
          body: item,
          headers
        })
      } catch (error) {
        console.error('Cart sync failed:', error)
      }
    },
    addToCart(product) {
      // const existingProduct = this.cart.find(item => item.id === product.id);
      // if (existingProduct) {
      //   existingProduct.quantity += 1; // Increase quantity if the product exists
      // } else {
      //   this.cart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
      // }
      let {id }=product;
      this.syncCartWithServer({id,quantity:1})
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
    updateCartQuantity(productId, change) {
      const item = this.cart.find((item) => item.id === productId);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          this.cart = this.cart.filter((item) => item.id !== productId);
        }
      }
    }
  },
  persist: true, // Enable persistence
});
