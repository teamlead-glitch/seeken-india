<template>
    <div class="countdown-container" v-if="endTime">
                <div class="countdown-box">
                  <span id="days">{{days}}</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">{{hours}}</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">{{minutes}}</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">{{seconds}}</span>
                  <span class="label">Seconds</span>
                </div>

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


const days = computed(() => Math.floor(timeLeft.value / 1000 / 60 / 60 / 24));
const hours = computed(() => Math.floor((timeLeft.value / 1000 / 60 / 60) % 24));
const minutes = computed(() => Math.floor((timeLeft.value / 1000 / 60) % 60));
const seconds = computed(() => Math.floor((timeLeft.value / 1000) % 60));

  
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