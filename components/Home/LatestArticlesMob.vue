<template>
  <!-- latest__articles mobile -->
  <section class="latest__articles__mobile">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-md-8 mb-3">
          <h3>Latest Articles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget ullamcorper nisi
            egestas vitae.</p>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
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
              480: { slidesPerView: 1.5, spaceBetween: 15 },
              380: { slidesPerView: 1, spaceBetween: 10 },
              0: { slidesPerView: 1, spaceBetween: 10 }
            }"
          class="mySwiper"
          >
            <SwiperSlide v-for="(item, index) in articles" :key="index" class="swiper-slide">
              <NuxtLink :to="`/blog/${item.slug}`">
                <div class="img__box">
                  <img :src="item.image_path" class="img-fluid" alt="seeken" loading="lazy">
                </div>
                <div class="content">
                  <div class="calendar"><i class="bi bi-calendar4"></i> {{ formatDate(item.created_at) }}</div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.short_description }}</p>
                </div>
              </NuxtLink>
            </SwiperSlide>
            <div class="swiper-button-prev"><i class="bi bi-arrow-left"></i></div>
            <div class="swiper-button-next"><i class="bi bi-arrow-right"></i></div>
          </Swiper>
        </div>
      </div>
      <div class="row">
       
        <div class="col-md-12 d-flex justify-content-center">
         
          <NuxtLink to="/blog" class="btn_2">View More <i class="bi bi-arrow-right"></i></NuxtLink>
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

import { useDateFormat } from '~/composables/useDateFormat';
const { formatDate } = useDateFormat();

const props = defineProps({
  articles: Array
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
