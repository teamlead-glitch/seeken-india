<template>
    <CommonInnerBanner page_title="Orders" />


    <section class="inner_container" v-if="authStore.token">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-7 col-xl-9 ">
                    <div class="orders">Your Orders <span>2</span></div>



                    <div class="order__history">
                        <div class="heading">
                            <ul class="nav nav-tabs " role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" :class="{ active: activeTab === 'orders' }"
                                        @click="activeTab = 'orders'" href="#"> Orders</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" :class="{ active: activeTab === 'not_shipped' }"
                                        @click="activeTab = 'not_shipped'" href="#">  Not Yet Shipped</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" :class="{ active: activeTab === 'cancelled' }"
                                        @click="activeTab = 'cancelled'" href="#">  Cancelled Orders</a>
                                </li>
                            </ul>
                            <div class="past_month">
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1" selected>Past 3 months</option>
                                    <option value="2">Past 6 months</option>
                                    <option value="3">Past 1 year</option>
                                </select>
                            </div>
                        </div>
                        <div class="tab-content orders_list">
                            <div class="tab-pane active">

                                <div class="accordion accordion-flush">

                                    <OrdersAccordionItem v-for="(order, index) in orders" :key="order.order_id" :order="order" :index="index"/>

                                </div>
                            </div>

                        </div>
                    </div>





                </div>

                <div class="col-md-5 col-xl-3">
                    <div class="total_prices ">
                        <div class="chat__icon"> <img src="/images/chatting_icon.svg" alt="seeken"></div>
                        <h4>Have Questions? We’re Here to Help!</h4>
                        <p>Whether you need assistance or just want to chat, our team is ready to answer any questions.
                            Send us a
                            message and we’ll get back to you as soon as possible!</p>
                        <div class="checkout__btn">
                            <NuxtLink to="/contactus" class="btn_2">Send us a message</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>





</template>

<script setup>

import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

const activeTab = ref('orders')

const orders = [
  {
    order_id: "112-0822160-54846510",
    order_placed_date: "January 25, 2025",
    total_amount: 5280.0,
    ship_to: "Firstname Lastname",
    invoice_url: "/invoice/112-0822160-54846510",
    details_url: "/orders/112-0822160-54846510",
    items: [
      {
        delivered_date: "January 25",
        product_name: "Wooden Coffee Table",
        return_eligible_till: "January 28, 2025",
        image: "/images/cart-img.webp",
        actions: {
          buy_again: "/buy-again/1",
          view_item: "/product/1",
          track_package: "/track/1",
        },
      },
      {
        delivered_date: "January 25",
        product_name: "Stylish Office Chair",
        return_eligible_till: "January 28, 2025",
        image: "/images/cart-img.webp",
        actions: {
          buy_again: "/buy-again/2",
          view_item: "/product/2",
          track_package: "/track/2",
        },
      },
    ],
  },
  {
    order_id: "113-5678912-12345678",
    order_placed_date: "February 10, 2025",
    total_amount: 3420.0,
    ship_to: "John Doe",
    invoice_url: "/invoice/113-5678912-12345678",
    details_url: "/orders/113-5678912-12345678",
    items: [
      {
        delivered_date: "February 12",
        product_name: "Bluetooth Headphones",
        return_eligible_till: "February 15, 2025",
        image: "/images/cart-img.webp",
        actions: {
          buy_again: "/buy-again/3",
          view_item: "/product/3",
          track_package: "/track/3",
        },
      },
      
    ],
  },
];



definePageMeta({
    middleware: 'auth'
})

</script>