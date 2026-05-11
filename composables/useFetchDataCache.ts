import { ref, onMounted } from 'vue';
import { useAuthStore } from '~/store/auth';

function toSerializableError(err: any) {
  return {
    message: err?.data?.message || err?.message || 'Unable to fetch data',
    statusCode: err?.statusCode || err?.response?.status || null,
  };
}

export function useFetchDataCache(key, endpoint, auth = false) {
  const config = useRuntimeConfig();
  const data = ref([]);
  const error = ref(null);

  const { $pinia } = useNuxtApp();
  const authStore = $pinia ? useAuthStore() : null;
  const { showLoader, hideLoader } = useLoader();

  const cacheKey = `fetch-cache-${key}`;

  // Use cache immediately if available (client only)
  if (process.client) {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        data.value = JSON.parse(cached);
      } catch (e) {
        console.warn('Invalid cached data for', cacheKey);
      }
    }
  }

  async function fetchData() {
    try {
      if (process.server) return; // avoid API call during SSR

      showLoader();
      const headers: Record<string, string> = {};

      if (auth) {
        const token = authStore?.token || '';
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      }

      const response = await $fetch(`${config.public.apiBase}${endpoint}`, {
        headers,
      });

      data.value = response || [];
      error.value = null;

      localStorage.setItem(cacheKey, JSON.stringify(data.value));
    } catch (err) {
      console.error(`useFetchData error (${endpoint}):`, err);
      error.value = toSerializableError(err);
    } finally {
      hideLoader();
    }
  }

  // Only run fetch on client
  if (process.client) {
    onMounted(fetchData);
  }

  return {
    data,
    error,
    refresh: fetchData,
  };
}
