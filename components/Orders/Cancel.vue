<template>


<div style="display: block;" class="modal profile_setting" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        
        <div class="modal-content" >
          <div class="modal-header">
            <h3 class="modal-title fs-5" id="exampleModalLabel">Order Cancel</h3>
            <button type="button" class="btn-close" @click="closePopup"></button>
          </div>
          <div class="modal-body">
<!-- {{ orderSelected }}123 -->
<div  id="order_canel" class="my-4 p-4 border rounded bg-light">

              <label for="cancelReason" class="form-label fw-semibold">

               Reason

              </label>
              <textarea v-model="reason" id="cancelReason"  rows="4" class="form-control mb-3"
                placeholder="Type your reason here..."></textarea>

              <div class="d-flex justify-content-end">
                <button class="btn btn-secondary me-2" @click="closePopup">Back</button>
                <button class="btn btn-danger" :disabled="!reason?.trim()" @click="submitCancellation(orderSelected)">
                  Submit Request
                </button>
              </div>

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
import { useAuthStore } from '~/store/auth';
const { addToast } = useToast()
const { showLoader, hideLoader } = useLoader(); // Use global loader

const authStore = useAuthStore();

const props = defineProps({
  orderSelected: {
    type: Array,
    required: true,
  },
  statusAllowedCancelOnly: {
    type: Array,
    required: true,
  }
})

const emit = defineEmits(["close"]); 

const closePopup = () => {
  emit("close");
};

const reason = ref('');

// Submit cancellation
async function submitCancellation(order) {
  const reasons = reason?.value.trim();

  const type = props.statusAllowedCancelOnly.includes(order.order_status)
    ? 'cancel'
    : 'return';

  if (reasons) {


    showLoader();
    const payload = { order_no: order.order_no, reason: reasons, type: type };



    try {
      const config = useRuntimeConfig();
      const response = await $fetch(`${config.public.apiBase}orders/cancel-request`, {
        method: 'POST',
        body: payload,
        headers: { Authorization: `Bearer ${authStore.token}` },
      });

      addToast('Your Cancel request sent!', 'success')
      window.location.reload();


    } catch (error) {

      // Extract and show the specific error message from the API response
      const errorMessage =
        error?.data?.message || error?.message || 'An error occurred while submitting your request. Please try again later.';

      addToast(errorMessage, 'error');


    } finally {
      hideLoader();
    }

  }
}


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
