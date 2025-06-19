<template>
  
    <section class="ad_container" v-if="page_content?.page_content">
      <a :href="page_content.page_content.ad_banner_url??'/'">
    <img :src="page_content.page_content.ad_banner_path??''" class="img-fluid banner__desk" alt="seeken" >
    <img :src="page_content.page_content.ad_mob_banner_path??''" class="img-fluid banner__mob" alt="seeken" >
  </a>
  </section>
</template>

<script setup>
// const add = { title: "add 1" ,web_image: "/images/ad.webp", mob_image: "/images/ad-mobile.jpg"}

// const props = defineProps({
//   page_content: {}
// });


const { data: page_content, error, refresh } = useFetchData('page_content', 'page/home');
</script>