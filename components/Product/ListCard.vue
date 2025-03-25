

<template>
     <div class="col-md-6 col-lg-4  col-xl-4 col-xxl-3 mb-3">
                                        <a >
                                            <div class="product__box">
                                              <ProductCardFlashSaleTag :is_flashsale="product.is_flashsale" :item_left="product.item_left" />
                                            <div class="product__content">
                                                <div class="top__box">
                                                    <div class="category__name">
                                                        <h5>Fann</h5>
                                                    </div>
                                                </div>
                                                <div class="price__feature">
                                                    <div class="name">
                                                        <h4>{{ product.title }}</h4>
                                                    </div>
                                                    <div class="price"> Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                                                </div>
                                            </div>
                                            <div class="top_box">
                                                <div class="product__img">
                                                   
                                                        <img v-if="product.images && product.images[0]" :src="product.images[0]" class="img-fluid" alt="seeken" >
                
                                                </div>
                                               
                                                <ProductCardCountDown />

                                                <ProductCardWishlist/>
                                            </div>
                                            <div class="bottom__box">
                                               
                                                <ProductCardRating :rating="product.rating" :reviewCount="product.review_count"/>
                                                
                                                <ProductCardVarients/>
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