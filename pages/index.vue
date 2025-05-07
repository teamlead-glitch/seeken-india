<template>
  <HomeBanner />
  <HomeSlider />
  <HomeFlashSaleSlider />
  <HomeWhatsNewDesktop :whats_new="whats_new"/>
  <HomeWhatsNewMob />
  <HomeCategory />
  <HomeFeaturedProducts />
  <HomeAdd />
  <HomeTopPicks />
  <HomeLatestArticles />
</template>

<script setup>


const { data: whats_new, error, refresh } = useFetchData('whats_new', 'whatsnew');

</script>
