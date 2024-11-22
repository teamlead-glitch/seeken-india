<template>
    <Navbar />
    <h2>Your Cart</h2>
    <div v-if="cartStore.cart.length">
      <div v-for="item in cartStore.cart" :key="item.id" class="cart-item">
        
        <p>{{ item.name }} - ${{ item.price }} ( {{ item.quantity }} ) <button style="margin-left: 10%;" @click="handleRemove(item.id)">Remove</button></p>
        <p >{{ item.price + " x " + item.quantity  }}  </p>
        <p >{{ item.price * item.quantity }}</p>
        
      </div>

      <div  class="cart-item cart-total">
        <p>Total - $ {{ total }}</p>
        <NuxtLink to="/checkout"><button style="margin-left: 10%;" class="checkout-button" >Pay Now</button></NuxtLink>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import Navbar from '~/components/Navbar.vue';
  import { useCartStore } from '~/store/cart';
  
  const cartStore = useCartStore();
  
  
  // Computed property to calculate the total price
const total = computed(() => {
  return cartStore.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
});

// Method to handle removing an item
const handleRemove = (productId) => {
    if (window.confirm('Are you sure you want to remove this item to cart?')) {
  cartStore.removeFromCart(productId);
    }
};
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
  .checkout-button {
    background-color: #5cb85c;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .checkout-button:hover {
    background-color: #4cae4c;
  }
  </style>
  