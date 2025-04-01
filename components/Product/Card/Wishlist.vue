<template>

<div class="view__wishlist">
  
                <div class="view" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="setQuickProduct(product.slug)"><i class="bi bi-eye"></i></div>
                <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i class="bi bi-heart"></i>
                </div>
              </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useQuickProductInject } from '@/composables/useQuickBuy';

const { setQuickProduct } = useQuickProductInject();

// Define the props expected from parent component
const props = defineProps({
  product: Array
});


</script>