<template>
  <div>
    <Slider />
  </div>

  <h1 style="text-align: center;margin-top:40px;">Our Products</h1>
  <div class="product-list">
    <div v-if="pending">Loading products...</div>
   
    <ProductCard
    v-if="products"
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="handleAddToCart"
      
    />
  
  </div>

  
</template>


<script setup lang="ts">
//import ProductCard from '~/components/ProductCard.vue';
import { useCartStore } from '~/store/cart';

const cartStore = useCartStore();

const { data: products, error, pending } = useFetch(`/api/all`);


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
