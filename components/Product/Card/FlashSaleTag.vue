<template>

<div class="items" v-if="item_left && item_left <= $siteSettings.stock_level">Only {{ item_left }} more left</div>
<div class="items" v-if=" item_left<1">Out Of Stock</div>
<div class="flash__combo" v-if="endTime && timeLeft > 0">Flash Sale </div>
</template>

<script setup>
  const props = defineProps({
    item_left: {
      type: Number,
      required: true,
    },
    is_flashsale: {
      type: Boolean,
      default: 0,
    },
    endTime: {
      type: String,
      required: true,
    }
  });

  const { $siteSettings } = useNuxtApp();

  const timeLeft = ref(0);

  const updateTimer = () => {
    const endTimeMs = new Date(props.endTime).getTime();
    const nowMs = Date.now();
    timeLeft.value = Math.max(0, endTimeMs - nowMs);
  };

  onMounted(() => {
    updateTimer();
  });

  </script>