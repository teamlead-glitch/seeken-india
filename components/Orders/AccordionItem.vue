<template>
    <!-- {{ order }} -->
    <div class="accordion-item border" v-if="order">
      
      <h3 class="accordion-header" :id="`heading-${order.id}`">
        <button
          class="accordion-button bg-transparent"
          :class="{ collapsed: index !== 0 }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse-${order.id}`"
          aria-expanded="true"
          :aria-controls="`collapse-${order.id}`"
        >
          <div class="headings">
            <div class="colums">
              <h4><span>Order placed</span>{{ formatDate(order.created_at) }}</h4>
            </div>
            <div class="colums">
              <h4><span>Total</span>₹{{ order?.grand_total }}</h4>
            </div>
            <div class="colums">
              <h4><span>Ship to</span>{{ order.shipping_first_name+' '+order.shipping_last_name }}</h4>
              <p>{{ order.shipping_location }}, {{ order.shipping_city }}
              <br></br>
              {{ order.shipping_state }}, {{ order.shipping_pincode }}
              </p>
              
            </div>
            <div class="colums">
              <h4>Order #{{ order.order_no }}</h4>
              <div class="orderdetail">
                <a href="#">View Order details</a>
                <!-- <span>|</span>
                <a href="#">View Invoice</a> -->
              </div>
            </div>
          </div>
        </button>
      </h3>
  
      <div
        :id="`collapse-${order.id}`"
        class="accordion-collapse collapse "
        :class="{ show: index === 0 }"
        :aria-labelledby="`heading-${order.id}`"
        data-bs-parent="#accordionAbout6"
      >
        <div class="accordion-body">
          <div class="content">
            <div v-for="(item, index) in order.items" :key="index" class="order_boxes">
              <h5  style="width: 60%;float: left;">{{ order.order_status??'-' }} </h5>
              <a v-if="statusAllowedInvoice.includes(order.order_status) && index==0" :href="order.invoice_url" target="_blank" style="float: right;text-decoration: underline;font-size: 1rem;font-weight: 600">View Invoice</a>
              <div class="full">
                <div class="product__pic">
                  <img :src="item.product?.default_image??''" class="img-fluid" alt="product image" />
                </div>
                <div class="product__details">
                  <h4>{{ item.product_name }}</h4>
                   <h6 v-if="item.variant_name" style="font-size: 0.875rem">{{ cleanedVariantName(item.variant_name)	 }}</h6>
                  <!-- <h6>
                    Return or replace items: Eligible through
                    {{ formatDate(order.created_at) }}
                  </h6> -->
                  <div class="btn__boxes">
                    
                    <NuxtLink :to="`/buy-now/${item.product?.slug}`" class="btn_1">Buy it again</NuxtLink>
                    <NuxtLink :to="`/products/${item.product?.slug}`" class="btn_2">View Product</NuxtLink>
                  
                  </div>
                </div>
              </div>
              <!-- Mobile buttons -->
              <div class="btn__boxes__mob">
                <NuxtLink :to="`/buy-now/${item.product?.slug}`" class="btn_1">Buy it again</NuxtLink>
                <NuxtLink :to="`/products/${item.product?.slug}`" class="btn_2">View Product</NuxtLink>
                <!-- <a href="#" class="btn_2">Track package</a> -->
              </div>

              <div v-if="statusAllowedCancel.includes(order.order_status)" class="my-4 p-4 border rounded bg-light">
    <div v-if="!showReason[order.id]?.[item.id]">
      
      <div class="d-flex justify-content-between align-items-center">
        <span class="text-danger fw-semibold">Do you want to cancel this order item?</span>
        <button class="btn btn-outline-danger" @click="toggleReason(order.id, item.id)">
          Cancel Order
        </button>
      </div>
    </div>

    <div v-else>
      <label for="cancelReason" class="form-label fw-semibold">Reason for cancellation:</label>
      <textarea
        id="cancelReason"
        v-model="reasons[order.id][item.product_id]"
        rows="4"
        class="form-control mb-3"
        placeholder="Type your reason here..."
      ></textarea>

      <div class="d-flex justify-content-end">
        <button class="btn btn-secondary me-2" @click="toggleReason(order.id, item.id)">Back</button>
        <button class="btn btn-danger" @click="submitCancellation(order.id, item.product_id, order.order_no)" :disabled="!reasons[order.id]?.[item.product_id]?.trim()">
          Submit Cancellation
        </button>
      </div>
    </div>
  </div>
            </div>

             

          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const { addToast } = useToast()
const { showLoader, hideLoader } = useLoader(); // Use global loader
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

  defineProps<{
    index:Number,
    order: {
    }
  }>()

  const statusAllowedCancel = [
  "pending",
  "confirmed",
  "processing",
  "delivered",
  "failed"
];

const statusAllowedInvoice = [
  //"pending",
  //"confirmed",
  //"processing",
  //"shipped",
  //"in_transit",
  //"out_for_delivery",
  "delivered",
  "cancelled",
  "returned",
  "refunded",
  "partially-refunded",
  //"failed"
];

  const { formatDate } = useDateFormat();

  const showReason = ref({})
const reasons = ref({})

function toggleReason(orderId, itemId) {
  if (!showReason.value[orderId]) {
    showReason.value[orderId] = {}
  }
  showReason.value[orderId][itemId] = !showReason.value[orderId][itemId]

  if (!reasons.value[orderId]) reasons.value[orderId] = {};
  if (!reasons.value[orderId][itemId]) reasons.value[orderId][itemId] = '';
}

// Submit cancellation
async function submitCancellation(id, product_id, order_no){
  const reason = reasons.value[id]?.[product_id]?.trim();
  if (reason) {
    

     showLoader();
    const payload = { order_no : order_no , reason : reason, product_id   };

  

  try {
    const config = useRuntimeConfig();
    const response = await $fetch(`${config.public.apiBase}orders/cancel-request`, {
      method: 'POST',
      body: payload,
      headers: { Authorization: `Bearer ${authStore.token}` },
    });

   addToast('Your Cancel request sent!', 'success')
  
   
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
const cleanedVariantName = (name = '') => {
  return name.replace(/-/g, ' ').trim()
}
  </script>
  