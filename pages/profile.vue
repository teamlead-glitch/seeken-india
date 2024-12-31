<template>
  
    <div>
      <h1>Profile</h1>
      <p>Name :  {{ authStore.user?.name ?? 'Guest' }}</p>
      <p>Email :  {{ authStore.user?.email ?? 'Guest' }}</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  
  const authStore = useAuthStore();
  
  const logout = () => {
    authStore.logout();
    navigateTo('/login');
  };

  definePageMeta({
    middleware: 'auth'
  })
  </script>
  
  
  