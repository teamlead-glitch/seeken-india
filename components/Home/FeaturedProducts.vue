<template>
    <ProductHomeFeaturedDesk :products="featured_products"/>

    <ProductHomeFeaturedMob :products="featured_products"/>
</template>


<script setup>

const { data: featured_products, error, refresh } = useFetchDataCache('featured_products', 'featured-products');

</script>