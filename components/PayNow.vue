<template>
    <button @click="makePayment(amount)" class="checkout-button">Pay Nowww</button>
  </template>
  
  <script setup>
  // Define the `amount` prop
defineProps({
  amount: {
    type: Number, // Expect the amount to be a number
    required: true, // Make it required
  },
});
  const makePayment = (amount) => {
    const options = {
      key: 'rzp_test_1UbmXOwJbkSRQy', // Replace with your Razorpay sandbox key
      amount , // Amount in paisa
      currency: 'INR',
      name: 'Your Business Name',
      description: 'Test Payment',
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
  