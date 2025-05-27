<template>
  <button @click="makePayment(amount)" class="btn_2">Pay Now</button>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';
import { useGuestToken } from '@/composables/useGuestToken'
const router = useRouter()
 const { addToast } = useToast()

// Define the `amount` prop
const props = defineProps({
  amount: Number | String,
  validation: Function,
  billing_address: {},
  shipping_address: {}
});
const makePayment = async () => {

  if (props.validation && !props.validation()) {
    return // Don't open if validation fails
  }

  const {
    billing_address,
    shipping_address
  } = props;

  const combinedAddress = {

    billing_first_name: billing_address.first_name,
    billing_last_name: billing_address.last_name,
    billing_address: billing_address.address,
    billing_city: billing_address.city,
    billing_location: billing_address.location,
    billing_landmark: billing_address.landmark,
    billing_pincode: billing_address.pincode,
    billing_phone: billing_address.phone,
    billing_email: billing_address.email,
    billing_state: billing_address.state,


    shipping_first_name: shipping_address.first_name,
    shipping_last_name: shipping_address.last_name,
    shipping_address: shipping_address.address,
    shipping_city: shipping_address.city,
    shipping_location: shipping_address.location,
    shipping_landmark: shipping_address.landmark,
    shipping_pincode: shipping_address.pincode,
    shipping_phone: shipping_address.phone,
    shipping_email: shipping_address.email,
    shipping_state: shipping_address.state,
  };
  console.log(combinedAddress, 'combinedAddress')

  // Step 1: Call Laravel API to create Razorpay order
  const authStore = useAuthStore();
  const { ensureGuestToken } = useGuestToken();
  const headers: any = {};

  if (authStore.token) {

    headers['Authorization'] = `Bearer ${authStore.token}`;

  } else {

    const guestToken = ensureGuestToken();
    combinedAddress.session_id =  guestToken ;
    console.log(combinedAddress, 'combinedAddress++--')
    if (guestToken) headers['X-Guest-Token'] = guestToken;

  }

  const { data, error } = await useFetch(`${useRuntimeConfig().public.apiBase}place-order`, {
    method: 'POST',
    headers,
    body: combinedAddress,
     onResponseError({ response }) {
    // This captures the full error body, like { error: true, message: "Product Infrared Cooktop is out of stock" }
    if (response._data?.message) {
      //alert(response._data.message);
      addToast(response._data.message, 'error')
    } else {
      addToast('Failed to create Razorpay order', 'error');
    }
  }
  });

  if (error.value || !data.value?.order_id) {
    //addToast('Failed to create Razorpay order');
    return;
  }


  // Step 2: Proceed with Razorpay

  const options = {
    key: `${useRuntimeConfig().public.razorpayKey}`, // Replace with your Razorpay sandbox key
    amount: props.amount * 100, // Amount in paisa
    currency: 'INR',
    name: 'Sherin P R',
    description: 'Test Payment',
    order_id: data?.value?.razorpay_order_id,
    handler: function (response) {
      console.log('Payment Successful:', response);
      router.push({
    path: '/order-placed',
    query: { order_id: response?.order_id } // optional: pass order ID
  })
    },
    prefill: {
      name: 'Test User',
      email: 'test@example.com',
      contact: '9999999999',
    },
    theme: {
      color: '#F37254',
    },
  };

  const razorpay = new Razorpay(options);
  razorpay.open();
};
</script>