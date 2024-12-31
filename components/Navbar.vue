<template>


  <nav>
    <div class="logo">
      <h1><NuxtLink to="/">MyStore</NuxtLink></h1>
    </div>
    <ul class="nav-links">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      <li><NuxtLink to="/cart">Cart ({{ cartCount }})</NuxtLink></li>
      <li v-if="!authStore.token"><NuxtLink to="/login">Login</NuxtLink></li>
      <li v-if="authStore.token"><NuxtLink to="/profile">Profile</NuxtLink></li>
      <li v-if="authStore.token"><a @click="logout">Logout</a></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useCartStore } from '~/store/cart';
import { useAuthStore } from '~/store/auth';

const cartStore = useCartStore();
const cartCount = computed(() => cartStore.cart.length);
const authStore = useAuthStore();

const logout = () => {
  authStore.logout();
  navigateTo('/login');
};
</script>

<style scoped>
/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #1e293b;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

nav .logo h1 a {
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
}

.nav-links a:hover {
  color: #38bdf8; /* Tailwind's sky-blue color */
}

nav .nav-links li a {
  position: relative;
}

nav .nav-links li a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  left: 50%;
  bottom: -5px;
  background-color: #38bdf8;
  transition: all 0.3s ease-in-out;
}

nav .nav-links li a:hover::after {
  width: 100%;
  left: 0;
}

nav a:last-child {
  cursor: pointer;
}

/* Responsive Design */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 16px 0;
  }
  .nav-links li {
    margin: 10px 0;
  }
}
</style>
