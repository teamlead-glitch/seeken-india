

<template>
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img v-if="product.images && product.images[0]" :src="product.images[0]" class="img-fluid default-image" alt="seeken" >
                <img v-if="product.images && product.images[1]" :src="product.images[1]" alt="seeken" class="img-fluid hover-image" >
              </div>
              <div class="items">Only {{ product.item_left }} more left</div>
              <div class="flash__combo" v-if="product.is_flashsale">Flash Sale</div>
              <div class="countdown-container" data-endtime="7">
                <div class="countdown-box">
                  <span id="days">01</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">23</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">57</span>
                  <span class="label">MINUTES</span>
                </div>

              </div>
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div class="quick__buy">QUICK BUY</div>
              </a>
              <div class="view__wishlist">
                <div class="view"><i class="bi bi-eye"></i></div>
                <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i class="bi bi-heart"></i>
                </div>
              </div>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>{{ product.category_name }}</h5>
                </div>
                <div class="rating"><i class="bi bi-star-fill"></i> {{ product.rating }} <span>({{ product.review_count }})</span></div>
              </div>
              <div class="price__feature">
                <h4>{{ product.title }}</h4>
                <div class="price">From Rs. {{ product.original_price }} <span>Rs. {{ product.sale_price }}</span></div>
                <div class="colors">
                  <ul>
                    <li>
                      <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                          loading="lazy">
                      </div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        more </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script setup>
import { defineProps } from 'vue';
// Define the props expected from parent component
const props = defineProps({
  product: Array
});


</script>