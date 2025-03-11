<template>
  <div class="top_picks">
  <Swiper
    :modules="[Autoplay, Navigation, Pagination]"
    :spaceBetween="30"
    :slidesPerView="4"
    :centeredSlides="false"
    :loop="true"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    class="mySwiper"
  >
    <SwiperSlide v-for="(item, index) in slides" :key="index">
     
      <div class="product__box">
        <div class="top_box">
          <div class="view__wishlist">
            <a
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <div class="view"><i class="bi bi-eye"></i></div>
            </a>
            <div
              class="wishlist"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal4"
            >
              <i class="bi bi-heart"></i>
            </div>
          </div>
          <div class="product__img">
            <img
              src="/images/featured_product_1.webp"
              class="img-fluid"
              alt="seeken"
              loading="lazy"
            />
          </div>
          <div class="product__content">
            <h5>{{item.title}}</h5>
            <h4>{{item.description}}</h4>
            <div class="rating">
              <i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span>
            </div>
            <a class="btn_2" href="">Buy Now</a>
          </div>
        </div>
      </div>
     
    
    </SwiperSlide>
  </Swiper>
</div>
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
