<template>
    <div class="p-4 bg-blue-100 rounded-lg shadow-md">
      <h2 class="text-xl font-bold text-blue-700">Mobile component</h2>
      <p class="text-gray-600">This is a reusable Nuxt 3 component.</p>
      
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  