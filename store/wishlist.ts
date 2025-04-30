
import { defineStore } from 'pinia'
import { useAuthStore } from '~/store/auth';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    AddToshow: false,
    AddToproduct: null,
    list: []
  }),
  actions: {
    async fetchWishlists() {
      const authStore = useAuthStore();
      let endpoint = `${useRuntimeConfig().public.apiBase}wishlist?skip=0&take=50`;
      const headers: any = {};

      if (authStore.token) {
        headers['Authorization'] = `Bearer ${authStore.token}`;

      } else {
        return false;
      }

      try {
        const response = await $fetch(endpoint, {
          method: 'GET',
          headers
        });

        // Assuming the response is an array of cart items
        const { data } = response || []
        this.list = data || []
      } catch (error) {
        this.list = [];
        console.error('Failed to fetch wishlist:', error);
      }
    },
    async addToWishlist() {
    
          const item = {product_id:this.AddToproduct.id};
          const authStore = useAuthStore();
          const endpoint = `${useRuntimeConfig().public.apiBase}addtowishlist`;
    
          const headers: any = {}
    
          if (authStore.token && authStore.user) {
            const authToken = authStore.token;
            if (authToken) headers['Authorization'] = `Bearer ${authToken}`
          } else {
           return false;
          }
    
          try {
            await $fetch(endpoint, {
              method: 'POST',
              body: item,
              headers
            })
          } catch (error) {
            console.error('Wishlist sync failed:', error)
          }
          finally {
            this.fetchWishlists();
          }
        },
        async removeFromWishlist(product_id){

          
          const authStore = useAuthStore();
          const endpoint = `${useRuntimeConfig().public.apiBase}wishlist/delete`;

          const headers: any = {}
    
          if (authStore.token && authStore.user) {
            const authToken = authStore.token;
            if (authToken) headers['Authorization'] = `Bearer ${authToken}`
          } else {
           return false;
          }

          try {
            await $fetch(endpoint, {
              method: 'DELETE',
              body: {product_id},
              headers
            })
          } catch (error) {
            console.error('Wishlist sync failed:', error)
          }
          finally {
            this.fetchWishlists();
          }

        },
    openAddTo(product) {
      this.AddToshow = true
      this.AddToproduct = product
    },
    closeAddTo() {
      this.AddToshow = false
      this.AddToproduct = null
    }


  },
  persist: true, // Enable persistence
})
