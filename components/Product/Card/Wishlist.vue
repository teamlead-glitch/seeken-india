<template>

<div class="view__wishlist">
  
                <div class="view" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" @click="setQuickProduct(product.slug)"><i class="bi bi-eye"></i></div>
                <div class="wishlist" :class="{ wishlisted: isInWishlist }" @click="onHeartClick(product)"><i class="bi bi-heart"></i>
                </div>
              </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useQuickProductInject } from '@/composables/useQuickBuy';
import { useWishlistStore } from '@/store/wishlist'

const { addToast } = useToast()

const wishlistStore = useWishlistStore()

const isInWishlist = computed(() => {
 
  return wishlistStore.list.some(item => item.id === props.product.id);
});

const onHeartClick = (product) => {
  //console.log(isInWishlist,'isInWishlist')
  if(isInWishlist.value){
    removeFromWishlist(product.id)
    // addToast('Item Removed From Your wishlist','success');
    alert('Item Removed From Your wishlist');
    return false;
  }
  wishlistStore.openAddTo(product)
}

const { setQuickProduct } = useQuickProductInject();

// Define the props expected from parent component
const props = defineProps({
  product: Array
});

const removeFromWishlist = (id) => {


  wishlistStore.removeFromWishlist(id);
  
}


</script>
<style scoped>
.wishlisted{
  background: #00687f !important;
}
</style>