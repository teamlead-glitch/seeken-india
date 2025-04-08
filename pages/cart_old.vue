<template>
  <div class="cart-container">
    <h2 class="cart-title">Your Cart</h2>
    <div v-if="cartStore.cart.length">
      <div v-for="item in cartStore.cart" :key="item.id" class="cart-item">
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p class="price">$ {{ item.price }} x {{ item.quantity }}</p>
          <div class="quantity-controls">
            <button class="quantity-btn" @click="decreaseQuantity(item.id)">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button class="quantity-btn" @click="increaseQuantity(item.id)">+</button>
          </div>
        </div>
        <div class="item-total">
          <p>Total: $ {{ (item.price * item.quantity).toFixed(2) }}</p>
          <button class="remove-btn" @click="handleRemove(item.id)">Remove</button>
        </div>
      </div>

      <div class="cart-total">
        <p>Total: <strong>$ {{ total }}</strong></p>
        <NuxtLink to="/checkout">
          <button class="checkout-button">Pay Now</button>
        </NuxtLink>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>Your cart is empty.</p>
      <NuxtLink to="/">
        <button class="start-shop-button">Start Shopping</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cart';

const cartStore = useCartStore();

// Computed property for total price
const total = computed(() => {
  return cartStore.cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
});

// Handle item removal
const handleRemove = (productId) => {
  if (window.confirm('Are you sure you want to remove this item from your cart?')) {
    cartStore.removeFromCart(productId);
  }
};

// Adjust quantity methods
const increaseQuantity = (productId) => {
  cartStore.updateCartQuantity(productId, 1);
};

const decreaseQuantity = (productId) => {
  const item = cartStore.cart.find((item) => item.id === productId);
  if (item.quantity > 1) {
    cartStore.updateCartQuantity(productId, -1);
  } else {
    handleRemove(productId);
  }
};
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px 30px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.item-info {
  flex: 2;
}

.item-info h3 {
  font-size: 1.2rem;
  color: #333;
}

.price {
  font-size: 0.9rem;
  color: #666;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.quantity-btn {
  background: #5cb85c;
  color: white;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 5px;
}

.quantity-btn:hover {
  background: #4cae4c;
}

.quantity {
  font-size: 1rem;
  color: #333;
}

.item-total {
  flex: 1;
  text-align: right;
}

.item-total p {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.remove-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.remove-btn:hover {
  background: #c82333;
}

.cart-total {
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.checkout-button {
  background: #5cb85c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.checkout-button:hover {
  background: #4cae4c;
}

.empty-cart {
  text-align: center;
  margin-top: 50px;
}

.start-shop-button {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.start-shop-button:hover {
  background: #0056b3;
}
</style>
