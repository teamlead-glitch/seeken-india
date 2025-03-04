import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();

    if (process.client) {
    const token = authStore.token;//localStorage.getItem('auth_token');
    console.log('Middleware triggered');
  console.log('Token:', token);
  console.log('Current authStore.user:', authStore.user);

  
    if (!token && to.name !== 'login') {
      return navigateTo('/login'); // Redirect to login if not authenticated
    }
  
    if (token && !authStore.user) {
      authStore.token = token; // Sync token from cookie
      await authStore.fetchUser(); // Fetch user details
    }
  }
  });
  