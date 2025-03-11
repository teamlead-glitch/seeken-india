<template>
  <Swiper
    :modules="[Autoplay, Navigation, Pagination]"
    :spaceBetween="30"
    :slidesPerView="5"
    :centeredSlides="false"
    :loop="true"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    class="mySwiper"
  >
    <SwiperSlide v-for="(item, index) in slides" :key="index">
      <div class="items">
        <a href="#">
          <div class="category__img__box">
            <div class="img_box">
              <img
                src="/images/category_1.webp"
                alt="seeken"
                class="img-fluid"
                loading="lazy"
              />
            </div>
            <div class="content">
              <h4>Fan</h4>
              <h6>5 Items</h6>
            </div>
          </div>
        </a>
      </div>
    </SwiperSlide>
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

const slides = [
  { title: "Slide 1", description: "This is the first slide content." },
  { title: "Slide 2", description: "This is the second slide content." },
  { title: "Slide 3", description: "This is the third slide content." },
  { title: "Slide 4", description: "This is the fourth slide content." },
  { title: "Slide 5", description: "This is the fifth slide content." },
  { title: "Slide 6", description: "This is the fifth slide content." },
];
</script>
