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
    <SwiperSlide v-for="(item, index) in categories" :key="index">
      <div class="items">
        <a href="#">
          <div class="category__img__box">
            <div class="img_box">
              <img
                :src="item.image_path"
                alt="seeken"
                class="img-fluid"
                loading="lazy"
              />
            </div>
            <div class="content">
              <h4>{{item.name}}</h4>
              <h6>{{ item.product_count }} Items</h6>
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

const props = defineProps({
  categories: Array
});
</script>
