import { useAuthStore } from '~/store/auth';

export const useProfile = () => {
  const config = useRuntimeConfig(); // Get runtime config
  const errorMessage = ref<string | null>(null); // Reactive error state
  const { $pinia } = useNuxtApp(); // Ensure Pinia is available
  const authStore = $pinia ? useAuthStore() : null; // Access store safely

  const updateProfile = async (payLoad: Record<string, any>) => {
    errorMessage.value = null; // Reset previous errors

    try {
      const token = authStore?.token || ''; // Get token safely
      const result = await $fetch(`${config.public.apiBase}update-profile`, {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: payLoad
      });
      authStore.fetchUser();
      return { success: true, data: result, error: null };
    } catch (errors: any) {
      
      


      if (errors.status === 422) {
        errorMessage.value = errors.data.errors.email? errors.data.errors.email:'Unexpected error';// Store validation errors
        } else {
          errorMessage.value = 'Unexpected error';
            console.error('Unexpected error:', errors)
        }

        return { success: false, data: null, error: errorMessage.value };





    }
  };

  return { updateProfile };
};
