<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">${{ product.price.toFixed(2) }}</p>
        <button class="add-to-cart-btn" @click="handleAddToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '~/store/cart';

const cartStore = useCartStore();
const route = useRoute();
const productId = route.params.id;

const product = ref(null);
const error = ref(null);
const pending = ref(true);

const fetchProduct = async () => {
  try {
    const response = await $fetch(useRuntimeConfig().public.apiBase+'products'); // Replace with your actual API endpoint
   
    const prod = await response;
    console.log( prod,' prod')
    product.value = prod.find((prod) => prod.id === productId);
    console.log( product.value,' product.value')
  } catch (err) {
    error.value = err.message;
  } finally {
    pending.value = false;
  }
};

const handleAddToCart = (product) => {
  if (window.confirm('Are you sure you want to add this item to cart?')) {
    cartStore.addToCart(product);
    navigateTo('/cart');
  }
};

onMounted(() => {
  fetchProduct();
});
</script>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: auto;
  max-width: 250px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
}

.product-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
}

.product-price {
  font-size: 1rem;
  color: #38bdf8;
  margin: 10px 0;
}

.add-to-cart-btn {
  background-color: #38bdf8;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #28a0b0;
  transform: translateY(-2px);
}

.add-to-cart-btn:focus {
  outline: none;
}

@media (max-width: 768px) {
  .product-card {
    padding: 16px;
  }

  .product-image {
    max-width: 200px;
  }

  .product-name {
    font-size: 1rem;
  }

  .product-price {
    font-size: 0.9rem;
  }

  .add-to-cart-btn {
    padding: 10px 15px;
  }
}
</style>
