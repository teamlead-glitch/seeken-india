// stores/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as Record<string, any> | null,
    token: null as string | null,
  }),
  actions: {
    async login(email: string, password: string) {
      const { token, user } = {
        token: "sampleToken12345",
        user: {
          id: 1,
          name: "John Doe",
          email: email, // Use the provided email
        },
      }
      
      // await $fetch('/auth/login', {
      //   method: 'POST',
      //   body: { email, password }
      // });

      this.token = token;
      this.user = user;
      useCookie('auth_token').value = token; // Store token in cookie for persistence
    },
    async fetchUser() {
      if (!this.token) return;

      try {
         this.user = {
          id: 1,
          name: "John Doe",
          email: 'email', // Use the provided email
        }
         //await $fetch('/auth/user', {
        //   headers: {
        //     Authorization: `Bearer ${this.token}`
        //   }
        // });
      } catch {
        this.logout(); // Clear invalid token
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      useCookie('auth_token').value = null; // Clear cookie
    }
  }
});
