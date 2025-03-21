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
           
            <template v-for="(image, index) in product.images" :key="index">
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
            <template v-for="(image, index) in product.images" :key="index">
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
              class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> {{ product.rating }}
            <span>({{ product.review_count }} Ratings)</span>
          </div>
            <h5>{{ product.category_name }}</h5>
          </div>
        </div>
        <div class="price__feature">
          <h4>{{product.title}}</h4>
          <div class="price"><span>Rs. {{ product.original_price }}</span>Rs. {{ product.sale_price }} </div>
        </div>
        <div class="colors">
          <ul>
            <li>Colors</li>
            <li>
              <div class="code active"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                  loading="lazy">
              </div>
            </li>
            <li>
              <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </li>
            <li>
              <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </li>
            <li>
              <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </li>
            <li>
              <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </li>
            <li>
              <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </li>
            <li>
              <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </li>
          </ul>
        </div>
      
      </div>
    </div>
  </div>
 <div class="product_details">
  <div class="detail">
      <p>{{ product.description }}</p>
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

import { inject } from 'vue';

const product = inject('QickByProduct');



</script>

<style>

</style>