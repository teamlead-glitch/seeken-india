<template>


<div style="display: block;" class="modal profile_setting" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        
        <div class="modal-content" >
          <div class="modal-header">
            <h3 class="modal-title fs-5" id="exampleModalLabel">Order History Timeline</h3>
            <button type="button" class="btn-close" @click="closePopup"></button>
          </div>
          <div class="modal-body">




  <div class="container py-4">
    
   
    <ul class="timeline" v-if="orderLogs">
      <li v-for="log in orderLogs" :key="log.id" class="timeline-item mb-4">
        <span class="timeline-point bg-primary"></span>
        <div class="timeline-event">
          <div class="small text-muted">{{ formatDate(log.created_at) }}</div>
          <h6 class="mt-1">{{ log.comment }}</h6>
          <p class="mb-0">
            <strong>Payment Status:</strong> {{ log.payment_status }}<br>
            <strong>Order Status:</strong> {{ log.order_status }}
          </p>
        </div>
      </li>
    </ul>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</template>

<script setup>
import { useDateFormat } from '~/composables/useDateFormat';
const { formatDate } = useDateFormat();
const props = defineProps({
  orderLogs: {
    type: Array,
    required: true,
  }
})

const emit = defineEmits(["close"]); 

const closePopup = () => {
  emit("close");
};


</script>

<style scoped>
/* Basic Bootstrap-style timeline layout */
.timeline {
  position: relative;
  padding-left: 40px;
  border-left: 2px solid #dee2e6;
}

.timeline-item {
  position: relative;
}

.timeline-point {
  position: absolute;
  left: -11px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.timeline-event {
  margin-left: 10px;
}
</style>
