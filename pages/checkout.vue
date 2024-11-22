<template>
    <Navbar />
    <div class="checkout-container">
      <h1>Checkout</h1>
  
      <form @submit.prevent="submitCheckout">
        <!-- Shipping Details -->
        <div class="form-section">
          <h2>Shipping Details</h2>
          <input type="text" v-model="form.name" placeholder="Full Name" required />
          <input type="email" v-model="form.email" placeholder="Email" required />
          <input type="text" v-model="form.address" placeholder="Address" required />
          <input type="text" v-model="form.city" placeholder="City" required />
          <input type="text" v-model="form.zip" placeholder="ZIP Code" required />
        </div>
  
        <!-- Order Summary -->
        <div class="order-summary">
          <h2>Order Summary</h2>
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <p>{{ item.name }} - ${{ item.price }}</p>
            <p>Quantity: {{ item.quantity }}</p>
          </div>
          <p class="total">Total: ${{ total }}</p>
        </div>
  
        <!-- Payment Button -->
        <button type="submit" class="checkout-button">Proceed to Payment</button>
        <NuxtLink to="/cart"><button type="submit" class="checkout-button cancel_btn">Cancel</button></NuxtLink>
        
      </form>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '~/store/cart';
  
  const cartStore = useCartStore();
  
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          address: '',
          city: '',
          zip: ''
        },
        cartItems: cartStore.cart
      };
    },
    computed: {
      total() {
        console.log(this.cartItems,' this.cartItems')
        return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
      }
    },
    methods: {
      submitCheckout() {
        alert('Checkout submitted!');
        // Logic for handling form submission, e.g., sending data to a server
      }
    }
  };

  definePageMeta({
    middleware: 'auth'
  })
  </script>
  
  <style scoped>
  .checkout-container {
    max-width: 600px;
    margin: 10px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  .form-section, .order-summary {
    margin-bottom: 20px;
  }
  input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
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

  .cancel_btn{
    margin-left: 5px;
    background-color: #b1c9b1;
    color: black;
  }
  .total {
    font-weight: bold;
  }
  </style>
  