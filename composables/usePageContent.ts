import { ref } from 'vue';

export function usePageContent(slug: string, fallbackTitle = 'Page') {
  const config = useRuntimeConfig();

  const cacheKey = `page-content-${slug}`;
  const page_content = ref(null);
  const seo = ref(null);
  const title = ref(fallbackTitle);
  const error = ref(null);

  // Load cached content (client only)
  if (process.client) {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        page_content.value = JSON.parse(cached);
        seo.value = page_content.value?.seo || null;
        title.value = page_content.value?.page_content?.title || fallbackTitle;
        useSeoMeta(seo.value, title.value, fallbackTitle);
      } catch (e) {
        console.warn('Failed to parse cached page content', e);
      }
    }
  }

  // Always fetch fresh data (SSR or client)
  useAsyncData(slug, async () => {
    try {
      const res = await $fetch(`${config.public.apiBase}page/${slug}`);
      page_content.value = res;
      seo.value = res?.seo || null;
      title.value = res?.page_content?.title || fallbackTitle;

      // Save to localStorage (client only)
      if (process.client) {
        localStorage.setItem(cacheKey, JSON.stringify(res));
        useSeoMeta(seo.value, title.value, fallbackTitle);
      }

      return res;
    } catch (err) {
      console.error(`Failed to fetch page content: ${slug}`, err);
      error.value = err;
      return null;
    }
  });

  return {
    page_content,
    seo,
    title,
    error,
  };
}
