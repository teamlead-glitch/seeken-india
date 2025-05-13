<template>
  <HomeBanner />
  <HomeSlider :prime_products="prime_products"/>
  <HomeFlashSaleSlider />
  <HomeWhatsNewDesktop :whats_new="whats_new"/>
  <HomeWhatsNewMob :whats_new="whats_new"/>
  <HomeCategory />
  <HomeFeaturedProducts />
  <HomeAdd :page_content="page_content?.page_content"/>
  <HomeTopPicks />
  <HomeLatestArticles />
</template>

<script setup>


const { data: whats_new, error, refresh } = useFetchData('whats_new', 'whatsnew');
const { data: prime_products, error:error1, refresh:refresh1 } = useFetchData('prime_products', 'prime-products');

const { data: page_content, error:error2, refresh:refresh2 } = useFetchData('page_content', 'page/home');


// Watch or compute seo when page_content is ready
watchEffect(() => {
  if (page_content?.value?.seo) {
    const seo = page_content.value.seo;

    useHead({
      title: seo.meta_title || page_content.value.page_content.title || 'Default Title',
      meta: [
        { name: 'description', content: seo.meta_description || 'Default description' },
        { name: 'keywords', content: seo.meta_keywords || '' },
        { property: 'og:title', content: seo.og_title || '' },
        { property: 'og:description', content: seo.og_description || '' },
        { property: 'og:image', content: seo.og_image || '' },
        { name: 'twitter:title', content: seo.twitter_title || '' },
        { name: 'twitter:description', content: seo.twitter_description || '' },
        { name: 'twitter:image', content: seo.twitter_image || '' },
      ],
      link: seo.canonical_url ? [{ rel: 'canonical', href: seo.canonical_url }] : [],
    });
  }
});

</script>
