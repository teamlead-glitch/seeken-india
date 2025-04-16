<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <!-- Carousel Indicators (Thumbnails) -->
    <div class="carousel-indicators" v-if="images">
     
      <template v-for="(image, index) in images" :key="index">
        <button
          type="button"
          :data-bs-target="'#carouselExample'"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          @click="showImage(image.image_url)"
        >
          <img :src="image.image_url" class="d-block w-100" ><!--style="max-width: 74px;"-->
        </button>
      </template>
 
    </div>
<!-- Carousel Slides -->
    <div class="carousel-inner" v-if="images">
      
        <div :class="['carousel-item', 'active']">
          <img :src="currentImage" class="d-block w-100" > <!--style="max-height: 451px;object-fit: cover;"-->
        </div>
      
     
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

  const currentImage = ref(props.images[0].image_url);

  const showImage = (image_path) => {
console.log(image_path,'image_path--')
  if (image_path) {
    currentImage.value = image_path;
  }
}

defineExpose({ showImage });

//Watch for changes in quickProduct and set the first image
watch(props, (props) => {
  currentImage.value = props?.images[0]?.image_url;
}, { immediate: true });

</script>

<style>

</style>