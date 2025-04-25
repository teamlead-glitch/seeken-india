<template>
    
    <div class="accordion-item border">
      <h3 class="accordion-header" :id="`heading-${order.order_id}`">
        <button
          class="accordion-button bg-transparent"
          :class="{ collapsed: index !== 0 }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse-${order.order_id}`"
          aria-expanded="true"
          :aria-controls="`collapse-${order.order_id}`"
        >
          <div class="headings">
            <div class="colums">
              <h4><span>Order placed</span>{{ order.order_placed_date }}</h4>
            </div>
            <div class="colums">
              <h4><span>Total</span>₹{{ order.total_amount.toFixed(2) }}</h4>
            </div>
            <div class="colums">
              <h4><span>Ship to</span>{{ order.ship_to }}</h4>
            </div>
            <div class="colums">
              <h4>Order #{{ order.order_id }}</h4>
              <div class="orderdetail">
                <a :href="order.details_url">View Order details</a>
                <span>|</span>
                <a :href="order.invoice_url">View Invoice</a>
              </div>
            </div>
          </div>
        </button>
      </h3>
  
      <div
        :id="`collapse-${order.order_id}`"
        class="accordion-collapse collapse "
        :class="{ show: index === 0 }"
        :aria-labelledby="`heading-${order.order_id}`"
        data-bs-parent="#accordionAbout6"
      >
        <div class="accordion-body">
          <div class="content">
            <div v-for="(item, index) in order.items" :key="index" class="order_boxes">
              <h5>Delivered {{ item.delivered_date }}</h5>
              <div class="full">
                <div class="product__pic">
                  <img :src="item.image" class="img-fluid" alt="product image" />
                </div>
                <div class="product__details">
                  <h4>{{ item.product_name }}</h4>
                  <h6>
                    Return or replace items: Eligible through
                    {{ item.return_eligible_till }}
                  </h6>
                  <div class="btn__boxes">
                    <a :href="item.actions.buy_again" class="btn_1">Buy it again</a>
                    <a :href="item.actions.view_item" class="btn_2">View your item</a>
                    <a :href="item.actions.track_package" class="btn_2">Track package</a>
                  </div>
                </div>
              </div>
              <!-- Mobile buttons -->
              <div class="btn__boxes__mob">
                <a :href="item.actions.buy_again" class="btn_1">Buy it again</a>
                <a :href="item.actions.view_item" class="btn_2">View your item</a>
                <a :href="item.actions.track_package" class="btn_2">Track package</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    index:Number,
    order: {
      order_id: string
      order_placed_date: string
      total_amount: number
      ship_to: string
      invoice_url: string
      details_url: string
      items: Array<{
        delivered_date: string
        product_name: string
        return_eligible_till: string
        image: string
        actions: {
          buy_again: string
          view_item: string
          track_package: string
        }
      }>
    }
  }>()
  </script>
  