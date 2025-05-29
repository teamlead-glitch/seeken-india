<template>
 
  <div class="row justify-content-center mt-5" v-if="products && products.length >0">
    <div class="col-md-12 related__products">
        <h3>You might also like</h3>
      
        <div class="relatedproducts ">


            <Swiper
    :modules="[Autoplay, Navigation, Pagination]"
    :spaceBetween="30"
    :slidesPerView="4"
    :centeredSlides="false"
    :loop="true"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    :breakpoints="{
        1024: { slidesPerView: 4, spaceBetween: 30 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        480: { slidesPerView: 2, spaceBetween: 15 },
        380: { slidesPerView: 1, spaceBetween: 10 },
        0: { slidesPerView: 1, spaceBetween: 10 } 
      }"
    class="mySwiper"
  >
    <SwiperSlide v-for="product in products" >
     
     
      <div class="swiper-slide">

        <div class="product__box"> 
       
            <ProductCardFlashSaleTag :is_flashsale="product.is_flash_sale" :item_left="product.stock_quantity" />
            <div class="product__content">
                <div class="top__box">
                    <div class="category__name">
                        <h5>{{ product.category_name }}</h5>
                    </div>
                </div>
                <div class="price__feature">
                    <div class="name">
                        <NuxtLink :to="`/products/${product.slug}`">
                        <h4>{{ product.name	 }}</h4>
                        </NuxtLink>
                    </div>
                    <div class="price"> Rs. {{ product.final_price	 }} <span>Rs. {{ product.price }}</span></div>
                </div>
            </div>
            <div class="top_box">
                <div class="product__img">
                    <NuxtLink :to="`/products/${product.slug}`">
                    <img v-if="product.image_path" :src="product.image_path" class="img-fluid" alt="seeken"
                        loading="lazy">
                    </NuxtLink>
                </div>
                
                <ProductCardCountDown :endTime="product.to_date" v-if="product.to_date"/>
                <ProductCardWishlist :product="product"/>
            </div>
            <div class="bottom__box">
                <ProductCardRating :rating="product.rating" :reviewCount="product.review_count"/>
                <ProductCardVarients  :varients="product?.product_variants"/>
                <!-- v-if="product.product_variants.length > 0" -->
              
            </div>
        </div>


        
              </div>
    
    </SwiperSlide>
    <!-- Navigation Arrows -->
    <div class="swiper-button-next"><i class="bi bi-arrow-right"></i></div>
    <div class="swiper-button-prev"><i class="bi bi-arrow-left"></i></div>
  </Swiper>
           
           
           
            




                
        </div>
    </div>
</div>
</template>




<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import required modules
import { useRouter } from "vue-router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const router = useRouter();
import { defineProps } from 'vue';

// Define the props expected from parent component
const props = defineProps({
  products: Array
});




</script>

<style scoped>

/* Hide default Swiper big arrows */
.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

/* Style for the new navigation arrows */
.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 38%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7); /* Black with transparency */
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s, transform 0.3s;
}

/* Centering the arrows */
.swiper-button-prev {
  left: 15px;
}

.swiper-button-next {
  right: 15px;
}

/* Hover effect */
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.9);
  transform: translateY(-50%) scale(1.1);
}

/* Icon style */
.swiper-button-next i,
.swiper-button-prev i {
  color: white;
  font-size: 20px;
}
</style>