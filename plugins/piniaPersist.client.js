import { defineNuxtPlugin } from '#app';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'; // ✅ Correct import

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia.use(piniaPluginPersistedState);
});
