<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
      <button @click="$emit('add-to-cart', product)">Add to Cart</button>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps(['product']);
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
  }

  .product-card img{
    width: 200px;
  }
  </style>