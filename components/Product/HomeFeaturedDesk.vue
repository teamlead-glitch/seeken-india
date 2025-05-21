<template>

    <!-- featured__products desktop -->
  <section class="featured__products">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-9 mb-3">
          <h3>Featured Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget ullamcorper nisi
            egestas vitae.</p>
        </div>
        <div class="col-md-3 d-flex justify-content-end">
          <a href="/list">View More</a>
        </div>
      </div>
      <div class="row mt-4">
        
        
        <ProductFeaturedCard v-for="(item, index) in products" :product="item" :key="index"/>
        
        
      </div>
    </div>
  </section>
  <!-- featured__products desktop close -->
</template>

<script setup>
import { defineProps } from 'vue';
// Define the props expected from parent component
const props = defineProps({
  products: Array
});


</script>