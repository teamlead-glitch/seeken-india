export default defineNuxtPlugin(async (nuxtApp) => {
  const settings = await useSiteSettings();
  nuxtApp.provide('siteSettings', settings);
});
