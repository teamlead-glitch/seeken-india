<template>
  <!-- {{ quickProduct }} -->
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
    class="bi bi-x-lg"></i></button>
<div class="offcanvas-body">
  <div class="product_img_heading">
    <div class="row align-items-center">
      <div class="col-md-5 col-lg-6">
        
<ProductCardImages :images="quickProduct?.product_images" v-if="quickProduct && quickProduct?.product_images?.length > 0"/>


      </div>
      <div class="col-md-7 col-lg-6">
        <div class="top__box">
          <div class="category__name">
            
           

          <ProductCardRating :rating="quickProduct.rating" :reviewCount="quickProduct.review_count"/>

            <h5>{{ quickProduct?.category_name }}</h5>
          </div>
        </div>
        <div class="price__feature">
          <h4>{{quickProduct?.name}}</h4>
          <div class="price"><span>Rs. {{ quickProduct?.final_price }}</span>Rs. {{ quickProduct?.price }} </div>
        </div>
       
        <ProductCardVarients  />
        <!-- v-if="quickProduct?.product_variants?.length > 0" -->
      
      </div>
    </div>
  </div>
 <div class="product_details">
  <div class="detail">
      <p>{{ quickProduct?.short_description }}</p>
   </div>
  </div>
  <div class="full_clm">
    <div class="quantity-input">
      <button class="quantity-btn minus-btn" @click="quantity > 1 ? quantity-- : null"><i class="bi bi-dash-lg"></i></button>
      <input type="number" class="quantity" v-model="quantity" min="1" max="10">
      <button class="quantity-btn plus-btn" @click="quantity++"><i class="bi bi-plus-lg"></i></button>
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


const quantity = ref(1);



</script>

<style>

</style>