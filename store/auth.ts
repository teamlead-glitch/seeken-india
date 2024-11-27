// stores/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as Record<string, any> | null,
    token: null as string | null,
  }),
  actions: {
    async login(email: string, password: string) {
      const { token, user } = await $fetch('http://boilerplate-latest.test/api/login', {
        method: 'POST',
        body: { email, password }
      });

      this.token = token;
      this.user = user;
      //useCookie('auth_token').value = token; // Store token in cookie for persistence
      localStorage.setItem('auth_token', token);
    },
    async fetchUser() {
      if (!this.token) return;

      try {
         this.user =  await $fetch('http://boilerplate-latest.test/api/user', {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        });
      } catch {
        this.logout(); // Clear invalid token
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      //useCookie('auth_token').value = null; // Clear cookie
      localStorage.removeItem('auth_token');
      
    }
  }
});
