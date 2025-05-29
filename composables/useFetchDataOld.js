
import { ref } from 'vue';
import { useAuthStore } from '~/store/auth';



export function useFetchDataOld(key, endpoint, auth = false) {
  const config = useRuntimeConfig();
  const data = ref([]);
  const error = ref(null);

  const { $pinia } = useNuxtApp(); // Ensure Pinia is available
  const authStore = $pinia ? useAuthStore() : null; // Access store safely
  const { showLoader, hideLoader } = useLoader(); // Use global loader

  async function fetchData() {
    try {
      showLoader()
      const headers = {};

      // Add authorization header if auth is true
      if (auth) {
        
        const token = authStore?.token || '';
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      }

      const { data: responseData, error: fetchError } = await useAsyncData(key, async () => {
        try {
          return await $fetch(`${config.public.apiBase}${endpoint}`,{
            headers,
          });
        } catch (err) {
          console.error(`UseFetch composible : API call failed for ${endpoint}:`, err);
          throw err;
        }
      });

      if (fetchError.value) {
        console.error(`UseFetch composible : Error fetching data for ${endpoint}:`, fetchError.value);
        error.value = fetchError.value;
        data.value = [];
      } else {
        data.value = responseData.value || [];
      }
    } catch (err) {
      console.error(`UseFetch composible : Unexpected error fetching ${endpoint}:`, err);
      error.value = err;
      data.value = [];
    }
    finally{
      hideLoader()
    }
  }

  fetchData();

  return { data, error, refresh: fetchData };
}
