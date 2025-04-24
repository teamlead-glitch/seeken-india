<template>
    <button @click="makePayment(amount)" class="btn_2">Pay Now</button>
  </template>
  
  <script setup>
  // Define the `amount` prop
const props = defineProps({
  amount:  Number | String,
  validation: Function
});
  const makePayment = async () => {

    if (props.validation && !props.validation()) {
    return // Don't open if validation fails
  }


    // Step 1: Call Laravel API to create Razorpay order

  //   const { data, error } = await useFetch('/api/razorpay/order', {
  //   method: 'POST',
  //   body: {
  //     amount: props.amount, 
  //   },
  // });

  // if (error.value || !data.value?.order_id) {
  //   alert('Failed to create Razorpay order');
  //   return;
  // }

  
  // Step 2: Proceed with Razorpay

    const options = {
      key: 'rzp_test_Nzwve0Zwr3iHZf', // Replace with your Razorpay sandbox key
      amount: props.amount * 100, // Amount in paisa
      currency: 'INR',
      name: 'Sherin P R',
      description: 'Test Payment',
      order_id: null,//data?.value?.order_id,
      handler: function (response) {
        console.log('Payment Successful:', response);
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
  