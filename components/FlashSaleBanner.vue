<template>
    <div class="slider-container">
        <div class="ribbon">Flash Sale</div>
      <div class="slider" ref="slider">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
        
        <NuxtLink :to="`/products/${slide.id}`">
          <div class="slide-content" style="color: white;">
            
            <h2>{{ slide.name }}</h2>
            <p>{{ slide.price }}</p>
          </div>
        </NuxtLink>
       
        </div>
      </div>
      <button @click="prevSlide" class="slider-button prev">‹</button>
      <button @click="nextSlide" class="slider-button next">›</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  

  const { data: slides, error, pending } = useFetch(`/api/flashsale`);
  
  const currentIndex = ref(0);
  const slider = ref(null);
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
    updateSlider();
  };
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
    updateSlider();
  };
  
  const updateSlider = () => {
    slider.value.style.transform = `translateX(-${currentIndex.value * 100}%)`;
  };
  
  onMounted(() => {
    updateSlider();
  });
  </script>
  
  <style scoped>
  .slider-container {
    position: relative;
    overflow: hidden;
    width: 100%;
   
    margin: 0 auto;
  }
  
  .slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    min-width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 10;
  }
  
  .slider-button.prev {
    left: 10px;
  }
  
  .slider-button.next {
    right: 10px;
  }

  .ribbon {
    position: absolute;
    top: 10px;
    left: -10px;
    background-color: red;
    color: white;
    padding: 5px 15px;
    font-size: 14px;
    font-weight: bold;
    transform: rotate(-45deg);
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  </style>
  