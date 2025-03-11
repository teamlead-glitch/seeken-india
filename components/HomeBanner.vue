<template>
  
  <div class="intro">
    <a id="anchor1" rel="#section1">
      <div class="arrow"><img src="/images/arrow.svg" alt="seeken"></div>
    </a>
  <div class="content-slider banner">
    <Swiper
      @swiper="onSwiperInit"
      :modules="[Autoplay, Navigation, Pagination]"
      :spaceBetween="0"
      :slidesPerView="1"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
     
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
     
      
      class="mySwiper"
    >
    
      <SwiperSlide v-for="(item, index) in slides" :key="index">
       

        <div class="item">
          <img :src="item.image" class="img-fluid banner__desk" alt="">
          <img :src="item.mob_image" class="img-fluid banner__mob" alt="">
          <div class="slider-caption">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h6>Lorum ipsum</h6>
                  <h2>{{ item.title }} </h2>
                  <p>{{ item.description }} </p>
                  <div class="btn_boxes">
                    <a class="btn_1" href="#">Buy </a>
                    <a class="btn_2" href="#">Learn More </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </SwiperSlide>

     

     
    </Swiper>

    
  </div>


     <!-- Custom Thumbnails with Text -->
     <div class="owl-thumbs">
      <div class="owl-thumb-item" v-for="(slide, index) in slides" 
      :key="'thumb-' + index" >
        <img :src="slide.image" alt="Thumb 1">
        <div class="texts" @click="goToSlide(index)">
          <h4><span>Next</span>{{slide.title}}</h4>
        </div>
      </div>
      
    </div>

  </div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';  // Import required modules
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const router = useRouter();
const swiperInstance = ref(null);

const slides = [
  { title: "Slide 1", description: "This is the first slide content.", image: "/images/banner1.webp", mob_image: "/images/mob-banner-1.webp" },
  { title: "Slide 2", description: "This is the second slide content.", image: "/images/banner2.webp", mob_image: "/images/mob-banner-2.webp" },
 
];

// Initialize Swiper instance
const onSwiperInit = (swiper) => {
  swiperInstance.value = swiper;
};

// Function to navigate to a specific slide index
const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index);  // Ensures it works with looping
  }
};
</script>

<style scoped>
.content-slider {
  width: 100%;
  margin: auto;
}

.slide-content {
  padding: 20px;
  background: white;
  border-radius: 10px;
  text-align: center;
}

.swiper-pagination {
  margin-top: 10px;
}

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

/* Styling the thumbnail dots */
.swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.swiper-pagination-bullet {
  width: 50px;
  height: 50px;
  margin: 0 5px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
}

.swiper-pagination-bullet:hover,
.swiper-pagination-bullet-active {
  border-color: #000;
}

.thumb-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>

