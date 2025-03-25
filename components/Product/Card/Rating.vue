<template>
    <div class="rating">
      <i class="bi bi-star-fill"></i>
      {{ rating }}
      <span>({{ reviewCount }})</span>
    </div>
  </template>
  
  <script setup>
  defineProps({
    rating: {
      type: Number,
      required: true,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
  });
  </script>