<template>
    <div class="flash-sale-alert">
        <span>🔥 Flash Sale!</span>
        <span> {{ timeString }}</span>
      </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  
  const props = defineProps({
    endTime: {
      type: String,
      required: true,
    },
  });
  
  const timeLeft = ref(0);
  const timeString = computed(() => {

    if (timeLeft.value <= 0) {
    return "Flash Sale Ended"; // Display this when the timer runs out
  }
    const seconds = Math.floor((timeLeft.value / 1000) % 60);
    const minutes = Math.floor((timeLeft.value / 1000 / 60) % 60);
    const hours = Math.floor(timeLeft.value / 1000 / 60 / 60);
  
    return `Ends in : ${hours}h ${minutes}m ${seconds}s`;
  });
  
  const updateTimer = () => {
    const endTimeMs = new Date(props.endTime).getTime();
    const nowMs = Date.now();
    timeLeft.value = Math.max(0, endTimeMs - nowMs);
  };
  
  let intervalId;
  
  onMounted(() => {
    updateTimer();
    intervalId = setInterval(updateTimer, 1000);
  });
  
  onUnmounted(() => {
    clearInterval(intervalId);
  });
  </script>
  <style>
  .flash-sale-alert {
    background: linear-gradient(90deg, #ff9a9e, #de3030); /* Gradient background */
    color: #fff; /* White text for contrast */
    font-size: 0.875rem; /* Small text size */
    font-weight: 500; /* Medium font weight */
    padding: 10px 15px; /* Padding for spacing */
    border-radius: 8px; /* Rounded corners */
    border: 1px solid rgba(255, 255, 255, 0.4); /* Subtle border for depth */
    display: flex; /* Flexbox layout */
    justify-content: space-between; /* Space between elements */
    align-items: center; /* Center items vertically */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow for elevation */
    animation: pulse 1.5s infinite; /* Add a soft pulsing effect */
    margin-bottom:20px;
  }
  
  /* Pulsing effect */
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }
  }
  
</style>
  