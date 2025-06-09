<template>

<div class="items" v-if="item_left && item_left <= $siteSettings.stock_level">Only {{ item_left }} more left</div>
<div class="items" v-if=" item_left<1">Out Of Stock</div>
<div class="flash__combo" v-if="is_flashsale">Flash Sale</div>
</template>

<script setup>
  defineProps({
    item_left: {
      type: Number,
      required: true,
    },
    is_flashsale: {
      type: Boolean,
      default: 0,
    },
  });

  const { $siteSettings } = useNuxtApp();
  </script>