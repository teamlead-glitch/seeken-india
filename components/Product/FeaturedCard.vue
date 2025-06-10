

<template>
    <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 mb-5">
          <div class="product__box" :class="{ outOfStock: !product.stock_quantity || product.stock_quantity < 1 }">
            <div class="top_box">
              <div class="product__img">
                <NuxtLink :to="`/products/${product.slug}`">
                <img v-if="product.default_image" :src="product.default_image" class="img-fluid default-image" alt="seeken" >
                <img v-if="product.image_path " :src="product.image_path" alt="seeken" class="img-fluid hover-image" >
              </NuxtLink>
              </div>
              
              <ProductCardFlashSaleTag :is_flashsale="product.is_flash_sale" :item_left="product.stock_quantity" :endTime="product?.to_date?product?.to_date:null"/>
              <ProductCardCountDown :endTime="product.to_date" v-if="product.to_date"/>
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
                <NuxtLink :to="`/products/${product.slug}`">
                <h4>{{ product.name	 }}</h4>
              </NuxtLink>
                <div class="price" v-if="Number(product?.price) > Number(product?.final_price)"> Rs. {{ product.final_price	 }} <span>Rs. {{ product.price }}</span></div>
                <div class="price" v-else>  Rs. {{ product.final_price	 }}</div>
                <ProductCardVarients  :varients="product?.product_variants" :product_slug="product?.slug"/>
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

<style>
.outOfStock {
  opacity: 0.4;
  pointer-events: none;
}

</style>