import { defineStore } from 'pinia';
import { useCookie } from '#app';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as Record<string, any> | null,
    token: process.client ? localStorage.getItem('auth_token') : useCookie('auth_token').value, 
  }),

  actions: {
    async login(email: string, password: string) {
      const { token, user } = await $fetch(`${useRuntimeConfig().public.apiBase}login`, {
        method: 'POST',
        body: { email, password },
      });

      this.token = token;
      this.user = user;
      useCookie('auth_token').value = token; // Store in cookies for SSR
      localStorage.setItem('auth_token', token); // Store in localStorage for CSR
      //await this.fetchUser();
    },

    async register(payLoad) {
      const result = await $fetch(useRuntimeConfig().public.apiBase + 'user-register', {
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
        console.log(this.user,'this.user+')
        this.user = await $fetch(`${useRuntimeConfig().public.apiBase}profile`, {
          headers: { Authorization: `Bearer ${this.token}` },
        });
      } catch (error) {
        console.error('Error fetching user:', error);
        this.logout(); // Clear invalid token if request fails
      }
    },

    async logout() {
      try {
        await $fetch(`${useRuntimeConfig().public.apiBase}logout`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${this.token}` },
        });
      } catch (error) {
        console.warn('Logout request failed, clearing token anyway.');
      }

      this.token = null;
      this.user = null;
      useCookie('auth_token').value = null;
      localStorage.removeItem('auth_token');
    },
  },

  persist: true, // Enables Pinia persistence
});
