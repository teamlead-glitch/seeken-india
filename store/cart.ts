import { defineStore } from 'pinia';
import { useAuthStore } from '~/store/auth';
import { useGuestToken } from '@/composables/useGuestToken'
const { addToast } = useToast()

export const useCartStore = defineStore('cart', {

  state: () => ({
    cart: {} as any,
  }),
  actions: {

    async fetchCartFromServer() {

      const { showLoader, hideLoader } = useLoader(); // Use global loader
     
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
        showLoader()
        const response = await $fetch(endpoint, {
          method: 'POST',
          headers,
          body: item
        });

        // Assuming the response is an array of cart items
        const { cart } = response || {}
        this.cart = cart || {}
      } catch (error) {
        this.cart = {};
        console.error('Failed to fetch cart1233:', error);
      }finally{
        hideLoader()
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
        addToast('The cart was updated successfully.!', 'success')
        return true
      } catch (error) {
        console.error('Cart sync failed:', error)
        const message =
        error?.response?._data?.message || 'Unknown error while syncing cart.'
    
      addToast(message, 'error') // Optional: user feedback
        return false
      }
      finally {
        this.fetchCartFromServer();
      }
    },
    async addToCart(product_id, quantity=1,variant_id=0, action='add') {
      const router = useRouter()
      const { showLoader, hideLoader } = useLoader(); // Use global loader
      showLoader()
      if(variant_id ==0){
        variant_id=null;
      }
      const success = await this.syncCartWithServer({ product_id, quantity: quantity,variant_id, action })
      
      if(success){
        router.push('/cart')
      }
    },
    // removeFromCart(productId) {
    //   this.cart = this.cart.filter(item => item.id !== productId);
    // },
    // updateCartQuantity(productId, change) {
    //   const item = this.cart.find((item) => item.id === productId);
    //   if (item) {
    //     item.quantity += change;
    //     if (item.quantity <= 0) {
    //       this.cart = this.cart.filter((item) => item.id !== productId);
    //     }
    //   }
    // }
  },
  persist: true, // Enable persistence
});
