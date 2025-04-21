<!-- components/StripePayment.vue -->
<template>
  
  <!-- replace this button with paynow -->
  <button class="btn_2" data-bs-toggle="offcanvas" data-bs-target="#paymentOffcanvas">Pay Now</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="paymentOffcanvas" >
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Secure Payment</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"><i
      class="bi bi-x-lg"></i></button>
  </div>
  <div class="offcanvas-body">
    


     <!-- stripe component -->
  <div class="container mt-5">
    <div class="card shadow m-5">
      <div class="card-body ">
        <h5 class="card-title d-flex align-items-center gap-2 mb-4">
          <img src="https://stripe.com/img/v3/powered_by_stripe.png" alt="Stripe" height="18" />
          Secure Payment
        </h5>

        <!-- Card Brand Icons -->
        <div class="mb-3 d-flex gap-3 align-items-center">
       
          <img :src="`/images/visa.svg`" alt="visa" height="45">
            <img :src="`/images/maestro.svg`" alt="visa" height="45">
            <img :src="`/images/mastercard.svg`" alt="visa" height="45">
            <img :src="`/images/rupay.svg`" alt="visa" height="45">
            <img :src="`/images/american-express.svg`" alt="visa" height="45">
        
        </div>

        <!-- Stripe Card Element -->
        <div id="card-element" class="form-control p-3 mb-4"></div>

        <!-- Payment Button -->
        <button
          @click="handlePayment"
          :disabled="loading"
          class="btn btn-primary w-100 ml-5 mr-5"
        >
          <span v-if="!loading">Pay ${{amount}}</span>
          <span v-else>Processing...</span>
        </button>

        <!-- Feedback -->
        <div class="mt-3">
          <div v-if="error" class="alert alert-danger">{{ error }}</div>
          <div v-if="success" class="alert alert-success">✅ Payment successful!</div>
        </div>
      </div>
    </div>
  </div>
   <!-- stripe component ends-->




  </div>
</div>
  
  
 




</template>

<script setup>
import { onMounted, ref } from 'vue'
import { loadStripe } from '@stripe/stripe-js'

const config = useRuntimeConfig()
const stripePublicKey = config.public.stripePublicKey

let stripe
let elements
let card

const error = ref(null)
const success = ref(false)
const loading = ref(false)

const props = defineProps({
  amount:  Number | String
});

onMounted(async () => {
  stripe = await loadStripe(stripePublicKey)
  elements = stripe.elements()
  card = elements.create('card')
  card.mount('#card-element')
})

const handlePayment = async () => {
  error.value = null
  success.value = false
  loading.value = true

  // 🔁 Replace with API call
  // const { data } = await useFetch('/api/create-payment-intent', {
  //   method: 'POST',
  //   body: { amount: props.amount }
  // })

  const clientSecret = 'pi_XXX_secret_XXX' // Replace with your real one

  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: { card }
  })

  if (result.error) {
    error.value = result.error.message
  } else if (result.paymentIntent.status === 'succeeded') {
    success.value = true
  }

  loading.value = false
}
</script>
