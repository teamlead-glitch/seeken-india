

<template>
    <!-- {{ product }} -->
     <div class="col-md-6 col-lg-4  col-xl-4 col-xxl-3 mb-3">
                                        <a >
                                            <div class="product__box">
                                              <ProductCardFlashSaleTag :is_flashsale="product.is_flashsale? product.is_flashsale : product.is_flash_sale" :item_left="product.item_left?product.item_left:product.stock_quantity" :endTime="product.to_date"/>
                                            <div class="product__content">
                                                <div class="top__box">
                                                    <div class="category__name">
                                                        <h5>{{ product.category_name }}</h5>
                                                    </div>
                                                </div>
                                                <div class="price__feature">
                                                    <div class="name">
                                                        <NuxtLink :to="`/products/${product.slug}`">
                                                        <h4>{{ product.name }}</h4>
                                                        </NuxtLink>
                                                    </div>
                                                    <template v-if="product.final_price">
                                                    <div class="price" v-if="parseFloat(product.price) > parseFloat(product.final_price)"> Rs. {{ product.final_price }} <span>Rs. {{ product.price }}</span></div>
                                                    <div class="price" v-else> Rs. {{ product.final_price }} </div>
                                                    </template>
                                                    <template v-else>
                                                    <div class="price" v-if="parseFloat(product.price) > parseFloat(product.selling_price)"> Rs. {{ product.selling_price }} <span>Rs. {{ product.price }}</span></div>
                                                    <div class="price" v-else> Rs. {{ product.selling_price }} </div>
                                                    </template>
                                                </div>
                                            </div>
                                            <div class="top_box">
                                                <div class="product__img">
                                                    <NuxtLink :to="`/products/${product.slug}`">
                                                        <img v-if="product.image_path && product.image_path" :src="product.image_path" class="img-fluid" alt="seeken" >
                                                    </NuxtLink>
                                                </div>
                                               
                                                <ProductCardCountDown v-if="product.to_date" :endTime="product.to_date"/>

                                                <ProductCardWishlist :product="product"/>
                                            </div>
                                            <div class="bottom__box">
                                               
                                                <ProductCardRating v-if="product.rating" :rating="product.rating" :reviewCount="product.review_count"/>
                                                
                                                <ProductCardVarients :varients="product?.product_variants" :product_slug="product?.slug"/>
                                           </div>
                                         </div></a>
                                    </div>
</template>

<script setup>
import { defineProps } from 'vue';
// Define the props expected from parent component
const props = defineProps({
  product: Array
});


</script>