<template>
  
  <Swiper
    :modules="[Autoplay, Navigation, Pagination]"
    :spaceBetween="30"
    :slidesPerView="4"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    :breakpoints="{
        1024: { slidesPerView: 4, spaceBetween: 30 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        480: { slidesPerView: 1.5, spaceBetween: 15 },
        380: { slidesPerView: 1, spaceBetween: 10 },
        0: { slidesPerView: 1, spaceBetween: 5 } 
      }"
    class="mySwiper"
  >
    <SwiperSlide v-for="(item, index) in slides" :key="index">
     
     
      <div class="swiper-slide">


        <ProductFeaturedCard  :product="item" :key="index"/>
              </div>
    
    </SwiperSlide>
    <!-- Navigation Arrows -->
    <div class="swiper-button-next"><i class="bi bi-arrow-right"></i></div>
    <div class="swiper-button-prev"><i class="bi bi-arrow-left"></i></div>
  </Swiper>

</template>

<script setup>
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
  slides: Array
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
  top: 50%;
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
