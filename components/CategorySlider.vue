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
                :src="item.image"
                alt="seeken"
                class="img-fluid"
                loading="lazy"
              />
            </div>
            <div class="content">
              <h4>{{item.title}}</h4>
              <h6>{{ item.items_count }} Items</h6>
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
  { title: "Category 1", items_count: 2 , image :"/images/category_1.webp"},
  { title: "Category 2", items_count: 5 , image :"/images/category_2.webp"},
  { title: "Category 3", items_count: 6 , image :"/images/category_3.webp"},
  { title: "Category 4", items_count: 8 , image :"/images/category_4.webp"},
  { title: "Category 5", items_count: 9 , image :"/images/category_5.webp"},
  { title: "Category 6", items_count: 2 , image :"/images/category_3.webp"},
];
</script>
