<template>
    <nav>
        <h1 style="width: 75%;"><NuxtLink to="/">MyStore</NuxtLink></h1>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/cart">Cart ({{ cartCount }})</NuxtLink>
      <NuxtLink to="/login" v-if="!authStore.token">  Login</NuxtLink>
      <NuxtLink v-if="authStore.token" to="/profile"> Profile</NuxtLink>
      <NuxtLink v-if="authStore.token" @click="logout"> Logout</NuxtLink>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { useCartStore } from '~/store/cart';
  import { useAuthStore } from '~/store/auth';
  const cartStore = useCartStore();
  const cartCount = computed(() => cartStore.cart.length);
  const authStore = useAuthStore();

  const logout = () => {
    authStore.logout();
    navigateTo('/login');
  };
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
  