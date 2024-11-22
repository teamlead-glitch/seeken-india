<template>
    <Navbar />
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import Navbar from '~/components/Navbar.vue';
  import ProductCard from '~/components/ProductCard.vue';
  import { useCartStore } from '~/store/cart';
  
  const cartStore = useCartStore();
  
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/images/product-1.jpg' },
    { id: 2, name: 'Product 2', price: 49.99, image: '/images/product-2.jpg' },
    { id: 3, name: 'Product 3', price: 149.99, image: '/images/product-3.jpg' },
  ];
  
  const handleAddToCart = (product) => {
    if (window.confirm('Are you sure you want to add this item to cart?')) {
    cartStore.addToCart(product);
    navigateTo('/cart');
    }
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 20px;
  }
  </style>
  