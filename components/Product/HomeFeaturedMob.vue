<template>

  <section class="featured__products__mobile">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-md-9 mb-3">
          <h3>Featured Products</h3>
          <p>Turning ordinary moments into effortless experience</p>
        </div>

      </div>
      <div class="row mt-4">







        <div class="col-md-12">
          <div class="swiper mySwiper2">
            <div class="swiper-wrapper">

              <ProductFeaturedMobSlider :slides="products" />

            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4">
       
       <div class="col-md-12 d-flex justify-content-center">
        
         <!-- <NuxtLink to="/list" class="btn_2">View More <i class="bi bi-arrow-right"></i></NuxtLink> -->
       </div>
     </div>

    </div>


  </section>

</template>

<script setup>
import { defineProps } from 'vue';
// Define the props expected from parent component
const props = defineProps({
  products: Array
});


</script>
<style lang="css" scoped>
.featured__products__mobile .swiper .swiper-slide .col-md-6{ width: 100% !important}
</style>
