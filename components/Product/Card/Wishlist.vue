<template>

<div class="view__wishlist">
  
                <div class="view" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="setQuickProduct(product.slug)"><i class="bi bi-eye"></i></div>
                <div class="wishlist" @click="onHeartClick(product)"><i class="bi bi-heart"></i>
                </div>
              </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useQuickProductInject } from '@/composables/useQuickBuy';
import { useWishlistStore } from '@/store/wishlist'
const wishlistStore = useWishlistStore()

const onHeartClick = (product) => {
  wishlistStore.openAddTo(product)
}

const { setQuickProduct } = useQuickProductInject();

// Define the props expected from parent component
const props = defineProps({
  product: Array
});


</script>