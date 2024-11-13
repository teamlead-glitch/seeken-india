<template>
    <Navbar />
    <h2>Your Cart</h2>
    <div v-if="cart.length">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <p>{{ item.name }} - ${{ item.price }}</p>
      </div>

      <div  class="cart-item cart-total">
        <p>Total - $ {{ total }}</p>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </template>
  
  <script setup>
  import Navbar from '~/components/Navbar.vue';
  import { useCartStore } from '~/store/cart';
  
  const cartStore = useCartStore();
  const cart = cartStore.cart;
  
  // Computed property to calculate the total price
const total = computed(() => {
  return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
});
  </script>
  
  <style scoped>
  .cart-item {
    border-bottom: 1px solid #ccc;
    padding: 8px 0;
  }
  .cart-total{
    text-align: right;
    padding-right: 30px;
  }
  </style>
  