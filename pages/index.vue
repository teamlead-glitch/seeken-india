<template>
  <HomeBanner />
  <HomeSlider :prime_products="prime_products"/>
  <HomeFlashSaleSlider />
  <HomeWhatsNewDesktop :whats_new="whats_new"/>
  <HomeWhatsNewMob :whats_new="whats_new"/>
  <HomeCategory />
  <HomeFeaturedProducts />
  <HomeAdd />
  <HomeTopPicks />
  <HomeLatestArticles />
</template>

<script setup>


const { data: whats_new, error, refresh } = useFetchData('whats_new', 'whatsnew');
const { data: prime_products, error:error1, refresh:refresh2 } = useFetchData('prime_products', 'prime-products');

</script>
