import { defineStore } from 'pinia';
import { useAuthStore } from '~/store/auth';
import { useGuestToken } from '@/composables/useGuestToken'



export const useCartStore = defineStore('cart', {
  

  state: () => ({
    cart: [],
  }),
  actions: {

    async fetchCartFromServer() {
      const authStore = useAuthStore();
      let endpoint = `${useRuntimeConfig().public.apiBase}cart`;
      const { ensureGuestToken } = useGuestToken();
      const headers: any = {};

      if (authStore.token && authStore.user) {
        headers['Authorization'] = `Bearer ${authStore.token}`;
      } else {
        const guestToken = ensureGuestToken();
        if (guestToken) headers['X-Guest-Token'] = guestToken;
        endpoint += `?session_id=${guestToken}`;
      }

      try {
        const response = await $fetch(endpoint, {
          method: 'GET',
          headers,
        });

        // Assuming the response is an array of cart items
        this.cart = response || [];
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
      finally{
        this.fetchCartFromServer();
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
      this.syncCartWithServer({product_id:id,quantity:1,action:'add'})
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
