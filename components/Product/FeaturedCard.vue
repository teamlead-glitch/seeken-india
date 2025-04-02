

<template>
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img v-if="product.image_path" :src="product.image_path" class="img-fluid default-image" alt="seeken" >
                <img v-if="product.image_path " :src="product.image_path" alt="seeken" class="img-fluid hover-image" >
              </div>
              
              <ProductCardFlashSaleTag :is_flashsale="product.is_flash_sale" :item_left="product.stock_quantity" />
              <ProductCardCountDown />
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="setQuickProduct(product.slug)">
                <div class="quick__buy">QUICK BUY</div>
              </a>
              
              <ProductCardWishlist :product="product"/>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>{{ product.category_name }}</h5>
                </div>
                
                <ProductCardRating :rating="product.rating" :reviewCount="product.review_count"/>
              </div>
              <div class="price__feature">
                <h4>{{ product.name	 }}</h4>
                <div class="price">From Rs. {{ product.final_price	 }} <span>Rs. {{ product.price }}</span></div>
                <ProductCardVarients  />
                <!-- v-if="product.product_variants.length > 0" -->
              </div>
            </div>
          </div>
        </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useQuickProductInject } from '@/composables/useQuickBuy';

const { setQuickProduct } = useQuickProductInject();

// Define the props expected from parent component
const props = defineProps({
  product: Array
});


</script>