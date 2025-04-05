<template>
  
  <div class="inner__banner" v-if="product">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="breadcrums">
                    <ul>
                        <li><NuxtLink to="/">
                          Home</NuxtLink></li>
                        <li>{{product.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="inner_container" v-if="product">
  
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xl-5 mb-4 ">
                <div class="product_detail">

                  <ProductCardImages :images="product.product_images" v-if="product?.product_images?.length > 0"/>
                </div>
            </div>
            <div class="col-md-6 col-xl-7">
                <div class="product__detail__box">
                    <h2 class="mob_none">{{product.name}} </h2>
                    <ProductCardRating :rating="product.rating" :reviewCount="product.review_count"/>
                    
                    <ProductCardVarients  v-if="product?.product_variants?.length > 0"/>
                   
                    <div class="highlights">
                        <h4>Highlights</h4>
                        <ul>
                            <li>
                                <div class="img_box"><img src="/images/highlight1.svg" alt="seeken"></div>
                                <h4> <span>Sweep</span> 1200 MM</h4>
                            </li>
                            <li>
                                <div class="img_box"><img src="/images/highlight2.svg" alt="seeken"></div>
                                <h4> <span>Voltage</span> 230V</h4>
                            </li>
                            <li>
                                <div class="img_box"><img src="/images/highlight3.svg" alt="seeken"></div>
                                <h4> <span>RPM</span> 390 rpm</h4>
                            </li>
                            <li>
                                <div class="img_box"><img src="/images/highlight4.svg" alt="seeken"></div>
                                <h4> <span>Air Delivery</span> 210 CM</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="product__content">
                        <p>{{product.short_description}}</p>
                    </div>
                </div>
            </div>
        </div>
       
        {{ product.description }}
        
        <ProductCardSpecs :specs="product.product_specifications	"/>

        <ProductRelatedSlider :products="featured_products"/>

        <ProductRatings/>
        <ProductReviewsAdd/>
        <ProductReviews/>
</div>

<div class="fixed_position_rates">
  <div class="container">
   <div class="row">
       <div class="col-md-12">
           <div class="full__container">
               <div class="product__name">
                <h5>{{product.name}}   <span>|</span>   {{product.category_name}}</h5>
                <div class="prices"><span>Rs. {{ product?.price }}</span>{{ product?.final_price }} </div>
               </div>
               <div class="total__rate">
                   <div class="quantity">
                       <h4>Quatity</h4>
                       <div class="quantity-input">
                           <button class="quantity-btn minus-btn" @click="quantity > 1 ? quantity-- : null"><i class="bi bi-dash-lg"></i></button>
                           <input type="number" class="quantity" v-model="quantity" min="1" max="10">
                           <button class="quantity-btn plus-btn" @click="quantity++"><i class="bi bi-plus-lg"></i></button>
                       </div>
                   </div>
                   <button class="btn_1">Add to Cart</button>
                   <button class="btn_2">Buy Now</button>
               </div>
           </div>
       </div>
   </div>
  </div> 
</div>

</section>


</template>

<script lang="ts" setup>

import { useRoute } from 'vue-router';
import { useDateFormat } from '~/composables/useDateFormat';
const { formatDate } = useDateFormat();

const route = useRoute(); 
const slug = route.params.slug; // Get slug from URL
const { data: response, error, refresh } = useFetchData('response', `products/${slug}`);
const product = computed(() => response.value?.data);
const quantity = ref(1);

const { data: featured_products, error1, refresh1 } = useFetchData('featured_products', 'featured-products');

</script>

<style>

</style>