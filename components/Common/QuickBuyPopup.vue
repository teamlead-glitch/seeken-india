<template>
  
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
    class="bi bi-x-lg"></i></button>
<div class="offcanvas-body">
  <div class="product_img_heading">
    <div class="row align-items-center">
      <div class="col-md-5 col-lg-6">
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
          <!-- Carousel Indicators (Thumbnails) -->
          <div class="carousel-indicators">
           
            <template v-for="(image, index) in quickProduct?.images" :key="index">
              <button
                type="button"
                :data-bs-target="'#carouselExample'"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                :aria-current="index === 0 ? 'true' : null"
                :aria-label="'Slide ' + (index + 1)"
              >
                <img :src="image" class="d-block w-100" :alt="'Thumbnail ' + (index + 1)">
              </button>
            </template>
       
          </div>
   <!-- Carousel Slides -->
          <div class="carousel-inner">
            <template v-for="(image, index) in quickProduct?.images" :key="index">
              <div :class="['carousel-item', { active: index === 0 }]">
                <img :src="image" class="d-block w-100" :alt="'Slide ' + (index + 1)">
              </div>
            </template>
           
          </div>
        </div>
      </div>
      <div class="col-md-7 col-lg-6">
        <div class="top__box">
          <div class="category__name">
            <div class="rating"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
              class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> {{ quickProduct?.rating }}
            <span>({{ quickProduct?.review_count }} Ratings)</span>
          </div>
            <h5>{{ quickProduct?.category_name }}</h5>
          </div>
        </div>
        <div class="price__feature">
          <h4>{{quickProduct?.name}}</h4>
          <div class="price"><span>Rs. {{ quickProduct?.final_price }}</span>Rs. {{ quickProduct?.price }} </div>
        </div>
       
        <ProductCardVarients v-if="quickProduct?.product_variants?.length > 0" />
      
      </div>
    </div>
  </div>
 <div class="product_details">
  <div class="detail">
      <p>{{ quickProduct?.description }}</p>
   </div>
  </div>
  <div class="full_clm">
    <div class="quantity-input">
      <button class="quantity-btn minus-btn"><i class="bi bi-dash-lg"></i></button>
      <input type="number" class="quantity" value="1" min="1" max="10">
      <button class="quantity-btn plus-btn"><i class="bi bi-plus-lg"></i></button>
    </div>
    <button class="btn_2">Add to Cart</button>
    <button class="btn_1">Buy Now</button>
  </div>
  <div class="view_detail"><a class="btn_3" href="detail.html">More Details</a></div>

</div>
</template>

<script lang="ts" setup>

import { useQuickProductInject } from '@/composables/useQuickBuy';

const { quickProduct } = useQuickProductInject();


</script>

<style>

</style>