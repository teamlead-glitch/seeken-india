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
import { useWishlistStore } from '@/store/wishlist'

const authStore = useAuthStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()

onMounted(() => {
  cartStore.fetchCartFromServer()
  wishlistStore.fetchWishlists()
})

watch(
  () => [authStore.token, authStore.user],
  async ([newToken, newUser]) => {
      cartStore.cart={};
      await cartStore.fetchCartFromServer()
    
  },
  { immediate: true } // run once on load
)

watch(
  () => [authStore.token, authStore.user],
  async ([newToken, newUser]) => {
    wishlistStore.list=[];
      await wishlistStore.fetchWishlists()
    
  },
  { immediate: true } // run once on load
)
</script>


 

  
  
  
  