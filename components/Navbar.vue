<template>
    <nav>
      <h1 style="width: 75%;">My E-commerce Store</h1>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About us</NuxtLink>
      <NuxtLink to="/contact">Contact us</NuxtLink>
      <NuxtLink to="/cart">Cart ({{ cartCount }})</NuxtLink>
    </nav>
  </template>
  
  <script setup>
  import { useCartStore } from '~/store/cart';
  const cartStore = useCartStore();
  const cartCount = computed(() => cartStore.cart.length);
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    background-color: #333;
    color: #fff;
  }
  a {
    color: #fff;
    margin-left: 20px;
  }
  </style>
  