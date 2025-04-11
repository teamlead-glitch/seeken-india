<template>
<!-- mobile menu -->
<div class="mobile_menu">
    <div class="mob__menu">
      <div class="nav">
        <NuxtLink to="/login" v-if="!authStore.token && !isLoginPage">Login</NuxtLink>
        <NuxtLink to="/register" v-if="!authStore.token && isLoginPage">Register</NuxtLink>
        <NuxtLink to="/profile" v-if="authStore.token">Account</NuxtLink>
      </div>
      <div class="logo"><NuxtLink to="/"><img src="/images/logo-blue.svg" alt="logo"></NuxtLink>  </div>
      <div class="search_wishlist">
        <div class="wishlist"> <NuxtLink to="/wishlist">
            <div class="icon"><img src="/images/whislist.svg" alt="search">
              <!-- <div class="count">2</div> -->
            </div>
          </NuxtLink> </div>
        <div class="search">
          <div class="icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTopone"
            aria-controls="offcanvasTop"><img src="/images/search_icon.svg" alt="search"></div>
        </div>

      </div>
    </div>
    <div class="grab_sale">
      <div class="close-btns">
        <i class="bi bi-chevron-down"></i>
      </div>
      <h6>Grab your Flash Deals Now</h6>
      <p style="display: none;">We have a flash sale running with 40-70% off for a limited period and stock.</p>
    </div>
  </div>
  <!-- mobile menu close -->
</template>

<script setup lang="ts">

import { useAuthStore } from '~/store/auth';
const authStore = useAuthStore();
const route = useRoute();

const isLoginPage = computed(() => route.path === '/login');

</script>