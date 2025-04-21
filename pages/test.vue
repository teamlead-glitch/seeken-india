<template>
  
  
  <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#paymentOffcanvas" style="margin: 20%;">Pay Now</button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="paymentOffcanvas" >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Secure Payment</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <StripePayment />
    </div>
  </div>

</template>

<script setup>



</script>

<style lang="scss" scoped>

</style>