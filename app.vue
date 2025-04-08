<template>
    <!-- <Navbar /> -->
    
    <NuxtLayout>
      <LayoutsGlobalLoader />
      <NuxtPage />
    </NuxtLayout>
    
   

    
  </template>

<script setup>
import { useAuthStore } from '~/store/auth';
import { useCartStore } from '~/store/cart';

const authStore = useAuthStore()
const cartStore = useCartStore()

onMounted(() => {
  cartStore.fetchCartFromServer()
})

watch(
  () => [authStore.token, authStore.user],
  async ([newToken, newUser]) => {
      cartStore.cart={};
      await cartStore.fetchCartFromServer()
    
  },
  { immediate: true } // run once on load
)
</script>


 

  
  
  
  