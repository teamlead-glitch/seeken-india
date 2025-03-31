import { ref } from 'vue';

export function useFetchData(key, endpoint) {
  const config = useRuntimeConfig();
  const data = ref([]);
  const error = ref(null);

  async function fetchData() {
    try {
      const { data: responseData, error: fetchError } = await useAsyncData(key, async () => {
        try {
          return await $fetch(`${config.public.apiBase}${endpoint}`);
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
  }

  fetchData();

  return { data, error, refresh: fetchData };
}
