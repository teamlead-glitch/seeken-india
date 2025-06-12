<template>
  <CommonInnerBanner page_title="Order Success" />
  <section class="inner_container" >


    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="empty__cart" style="min-height: auto;">
            <img src="/images/empyt-cart.svg" alt="seeken">
            <h5 class="text-success fw-bold">Thank you for your order!</h5>
            <p class="text-success fw-bold">Your order has been placed successfully. We’ve sent you a confirmation email with the order details.</p>
            <div class="btn_box" v-if="authStore.token">
              <NuxtLink to="/orders" class="btn_1">View My Orders</NuxtLink>
              
            </div>
          </div>
        </div>
      </div>
      <CheckoutSupportedPayments />
    </div>

  </section>
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/store/auth';
import { useCartStore } from '~/store/cart'
const authStore = useAuthStore();

const cartStore = useCartStore()

onMounted(() => {
  cartStore.fetchCartFromServer()
})

</script>

<style>

</style>