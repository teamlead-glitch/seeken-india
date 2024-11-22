import { useAuthStore } from '~/store/auth';

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore();
  
    return {
      provide: {
        axios: $fetch.create({
          baseURL: useRuntimeConfig().public.apiBase,
          headers: {
            Authorization: `Bearer ${authStore.token || ''}`
          }
        })
      }
    };
  });
  