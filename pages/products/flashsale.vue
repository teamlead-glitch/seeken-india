

<template>
    <div>
      <!-- <FlashSaleBanner /> -->
    </div>
  
    <h1 style="text-align: center; margin-top: 40px;">Flash Sale Products</h1>
  
    <div class="content">
      
  
      <div class="product-list">
      <div v-if="pending">Loading products...</div>
     
      <ProductCard
      v-if="products"
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :flash="true"
        @add-to-cart="handleAddToCart"
        
      />
      
    
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useCartStore } from '~/store/cart';
  import ProductCard from '~/components/ProductCard.vue';
  
  const products = ref([]);
  const filteredProducts = ref([]);
  const search = ref('');
  const sort = ref('nameAsc');
  const pending = ref(true);
  
  const cartStore = useCartStore();
  
  const fetchProducts = async () => {
    try {
      const data = await $fetch(useRuntimeConfig().public.apiBase+'products?flash=true'); // Adjust server API endpoint if needed
      products.value = data;
      filteredProducts.value = data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      pending.value = false;
    }
  };
  
  const handleAddToCart = (product) => {
    if (window.confirm('Are you sure you want to add this item to cart?')) {
        product.price = product.sale_price;
      cartStore.addToCart(product);
      navigateTo('/cart');
    }
  };
  
  const filterProducts = () => {
    let filtered = products.value.filter((product) =>
      product.name.toLowerCase().includes(search.value.toLowerCase())
    );
  
    if (sort.value === 'priceLowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort.value === 'priceHighToLow') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort.value === 'nameAsc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort.value === 'nameDesc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
  
    filteredProducts.value = filtered;
  };
  
  onMounted(() => {
    fetchProducts();
  });
  </script>
  
  <style scoped>
  /* Style the container and the sidebar for better spacing */
  .container {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    margin-top: 40px; /* Add some margin to top */
  }
  
  .sidebar {
    padding: 20px;
    border-right: 1px solid #ddd;
    background-color: #f8f9fa; /* Light background color for sidebar */
    border-radius: 8px; /* Rounded corners for the sidebar */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
   
  }
  
  /* Style filter inputs and selects to align horizontally */
  .sidebar .filter {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row; /* Align items in a row */
    align-items: center; /* Vertically align in the middle */
    gap: 10px; /* Add space between the input and select */
  }
  
  .sidebar h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-transform: uppercase; /* Uppercase the filter titles */
    letter-spacing: 1px;
    width: 100%;
  }
  
  /* Style select and input to take full width */
  .sidebar select,
  .sidebar input[type="text"] {
    width: 100%;
    padding: 10px;
    margin: 5px 0 0 0; /* Adjust margins */
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  /* Add a hover effect on the inputs and select */
  .sidebar select:hover,
  .sidebar input[type="text"]:hover {
    border-color: #007bff; /* Blue border on hover */
  }
  
  /* Add focus styles to inputs */
  .sidebar select:focus,
  .sidebar input[type="text"]:focus {
    outline: none;
    border-color: #0056b3; /* Darker blue for focus */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add subtle glow effect */
  }
  
  /* Style the product list */
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  
  /* Responsive adjustments for smaller screens */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  
    .product-list {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
  
    .sidebar {
      width: 100%;
      border-right: none;
      margin-bottom: 20px;
    }
  
    /* Stack filter elements vertically on small screens */
    .sidebar .filter {
      flex-direction: column; /* Stack input and select vertically */
      gap: 15px;
    }
  
    /* Adjust the select and input to fit the width on small screens */
    .sidebar select,
    .sidebar input[type="text"] {
      width: 100%; /* Ensure full width on small screens */
    }
  }
  
  
  </style>
  