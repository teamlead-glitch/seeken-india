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



const config = useRuntimeConfig();
const { data: page_content  } = await useAsyncData('home', () =>
  $fetch(`${config.public.apiBase}page/home`)
);

const seo = page_content.value?.seo;
const title = page_content.value?.page_content?.title;

useSeoMeta(seo, title, 'Home');

</script>
