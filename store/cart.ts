import { defineStore } from 'pinia';
import { useAuthStore } from '~/store/auth';
import { useGuestToken } from '@/composables/useGuestToken'

export const useCartStore = defineStore('cart', {

  state: () => ({
    cart: {} as any,
  }),
  actions: {

    async fetchCartFromServer() {
     
      let item = {};
      const authStore = useAuthStore();
      let endpoint = `${useRuntimeConfig().public.apiBase}list-cart`;
      const { ensureGuestToken } = useGuestToken();
      const headers: any = {};

      if (authStore.token) {
        
        headers['Authorization'] = `Bearer ${authStore.token}`;

      } else {
        console.log(2222)
        const guestToken = ensureGuestToken();
        item = { session_id: guestToken };
        console.log(item, 'item++--')
        if (guestToken) headers['X-Guest-Token'] = guestToken;

      }

      try {

        const response = await $fetch(endpoint, {
          method: 'POST',
          headers,
          body: item
        });

        // Assuming the response is an array of cart items
        const { cart } = response || {}
        this.cart = cart || {}
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      }
    },

    async syncCartWithServer(item) {

      const authStore = useAuthStore()


      const endpoint = `${useRuntimeConfig().public.apiBase}add-to-cart`;

      const { ensureGuestToken } = useGuestToken()

      const headers: any = {}

      if (authStore.token && authStore.user) {
        const authToken = authStore.token;
        if (authToken) headers['Authorization'] = `Bearer ${authToken}`
      } else {
        const guestToken = ensureGuestToken()
        if (guestToken) headers['X-Guest-Token'] = guestToken;
        item.session_id = guestToken;
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
      finally {
        this.fetchCartFromServer();
      }
    },
    addToCart(product_id, quantity=1, action='add') {

      
      this.syncCartWithServer({ product_id, quantity: quantity, action })
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
