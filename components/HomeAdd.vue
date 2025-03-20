<template>
    <section class="ad_container">
    <img :src="add.web_image" class="img-fluid banner__desk" alt="seeken" >
    <img :src="add.mob_image" class="img-fluid banner__mob" alt="seeken" >
  </section>
</template>

<script setup>
const add = { title: "add 1" ,web_image: "/images/ad.webp", mob_image: "/images/ad-mobile.jpg"}
</script>