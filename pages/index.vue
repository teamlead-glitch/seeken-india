<template>
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 60px; /* Ensures spacing for footer */
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    padding: 10px;
    margin-bottom: 60px; /* Spacing for footer */
  }
}

/* Add this style to ensure footer is positioned correctly on small screens */
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto; /* Ensures footer stays at the bottom */
}
</style>
