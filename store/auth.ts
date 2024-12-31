// stores/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as Record<string, any> | null,
    token: null as string | null,
  }),
  actions: {
    async login(email: string, password: string) {
      const { access_token	 } = await $fetch(useRuntimeConfig().public.apiBase + 'login', {
        method: 'POST',
        body: { email, password }
      });

      this.token = access_token;
      //this.user = user;
      //useCookie('auth_token').value = token; // Store token in cookie for persistence
      localStorage.setItem('auth_token', this.token);
    },

    async register(payLoad) {
      const result = await $fetch(useRuntimeConfig().public.apiBase + 'register', {
        method: 'POST',
        body: payLoad
      });

      if (result) {
        return true;
      }else{
        return false;
      }

    },
    async fetchUser() {
      if (!this.token) return;

      try {
         this.user =  await $fetch(useRuntimeConfig().public.apiBase+'profile', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });
      } catch {
        this.logout(); // Clear invalid token
      }
    },
    async logout() {

      await $fetch(useRuntimeConfig().public.apiBase+'logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });

      this.token = null;
      this.user = null;
      //useCookie('auth_token').value = null; // Clear cookie
      localStorage.removeItem('auth_token');
      
    }
  }
});
