<template>

<div class="items">Only {{ item_left }} more left</div>
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
  </script>