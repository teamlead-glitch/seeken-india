<template>
    <ProductHomeFeaturedDesk :products="featured_products"/>

    <ProductHomeFeaturedMob :products="featured_products"/>
</template>


<script setup>

const config = useRuntimeConfig();

// Fetch slide data during SSR
const { data: featured_products, error } = await useAsyncData('featured_products', () =>
  $fetch(`${config.public.apiBase}featured-products`)
);
// Handle errors gracefully
if (error.value) {
  console.error('Error fetching featured_products:', error.value);
}




</script>