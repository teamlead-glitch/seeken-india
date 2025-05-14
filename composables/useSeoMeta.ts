// composables/useSeoMeta.ts
export function useSeoMeta(seo?: any, contentTitle?: string, fallbackTitle = 'Default Title') {
  if (!seo) return;

  const title = seo.meta_title || contentTitle || fallbackTitle;

  useHead({
    title,
    meta: [
      { name: 'description', content: seo.meta_description || '' },
      { name: 'keywords', content: seo.meta_keywords || '' },
      { property: 'og:title', content: seo.og_title || '' },
      { property: 'og:description', content: seo.og_description || '' },
      { property: 'og:image', content: seo.og_image || '' },
      { name: 'twitter:title', content: seo.twitter_title || '' },
      { name: 'twitter:description', content: seo.twitter_description || '' },
      { name: 'twitter:image', content: seo.twitter_image || '' },
    ].filter(meta => meta.content),
    link: seo.canonical_url ? [{ rel: 'canonical', href: seo.canonical_url }] : [],
  });
}
