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
            </div>
            <div class="colums">
              <h4>Order #{{ order.order_no }}</h4>
              <div class="orderdetail">
                <a href="#">View Order details</a>
                <span>|</span>
                <a href="#">View Invoice</a>
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
              <h5>{{ order.order_status??'-' }} </h5>
              <div class="full">
                <div class="product__pic">
                  <img :src="item.product.default_image??''" class="img-fluid" alt="product image" />
                </div>
                <div class="product__details">
                  <h4>{{ item.product_name }}</h4>
                  <h6>
                    Return or replace items: Eligible through
                    {{ formatDate(order.created_at) }}
                  </h6>
                  <div class="btn__boxes">
                    
                    <NuxtLink :to="`/buy-now/${item.product.slug}`" class="btn_1">Buy it again</NuxtLink>
                    <NuxtLink :to="`/products/${item.product.slug}`" class="btn_2">View your item</NuxtLink>
                  
                  </div>
                </div>
              </div>
              <!-- Mobile buttons -->
              <div class="btn__boxes__mob">
                <NuxtLink :to="`/buy-now/${item.product.slug}`" class="btn_1">Buy it again</NuxtLink>
                <NuxtLink :to="`/products/${item.product.slug}`" class="btn_2">View your item</NuxtLink>
                <!-- <a href="#" class="btn_2">Track package</a> -->
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
    }
  }>()

  const { formatDate } = useDateFormat();
  </script>
  