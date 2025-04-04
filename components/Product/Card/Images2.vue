<template>
  {{images}}
  <div id="carouselExample2" class="carousel slide" data-bs-ride="carousel">
    <!-- Carousel Indicators (Thumbnails) -->
    <div class="carousel-indicators">
      <template v-for="(image, index )in images">
        <button type="button" data-bs-target="#carouselExample2" :data-bs-slide-to="index" class="active"
            aria-current="true" :aria-label="`Slide ${index}`">
            <img :src="image.image_url" class="d-block w-100" :alt="`Thumbnail ${index}`">
        </button>
       
      </template>
        
</div>
    <!-- Carousel Slides -->
    <div class="carousel-inner">
      <template v-for="(image, index )in images">
        <div class="carousel-item active">
            <img :src="image.image_url" class="d-block w-100" :alt="`Slide ${index}`">
        </div>
      </template>
    </div>
</div>
</template>

<script lang="ts" setup>

const props = defineProps({
    images: {
      type: [],
      required: true,
    },
  });


</script>

<style>

</style>