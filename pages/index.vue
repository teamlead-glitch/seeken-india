<template>
  <HomeBanner />
  <HomeSlider />
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

</script>
