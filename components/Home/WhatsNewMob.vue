<template>


<section class="new__products__mobile">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3>What's New</h3>
        </div>
        <div class="col-md-12 mt-1">
          <div class=" mySwiper">
            <div class="swiper-wrapper">

  <Swiper
    :modules="[Autoplay, Navigation, Pagination]"
    :spaceBetween="30"
    :slidesPerView="1"
    :centeredSlides="false"
    :loop="true"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :breakpoints="{
        
        768: { slidesPerView: 3, spaceBetween: 20 },
        480: { slidesPerView: 2, spaceBetween: 15 },
        380: { slidesPerView: 1, spaceBetween: 10 },
        0: { slidesPerView: 1, spaceBetween: 10 } 
      }"
    class="mySwiper"
  >
    <SwiperSlide v-for="(item, index) in whats_new" :key="index">
      <div class="swiper-slide">
                <img :src="item.image_path" alt="intersight" class="img-fluid">
                <div class="contents">
                  <h3>{{ item.title }} </h3>
                  <div class="button__box">
                    <NuxtLink class="btn_3" :to="`/list?category=${item.item_id}`">Buy Now <i class="bi bi-chevron-right"></i></NuxtLink>
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
</div>
</div>
</section>
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

const props = defineProps({
  whats_new: Array
});
</script>








