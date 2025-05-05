<template>
  <CommonInnerBanner page_title="Checkout" />
 <section class="inner_container">
        <div class="container">
         <div class="row justify-content-center">
          <CheckoutContactInfo :billing_address="billing_address" :shipping_address="shipping_address"  ref="contactInfoRef"/>
<div class="col-md-5 col-xl-4">
    <div class="total_prices ">
        <h3>View Order</h3>
      <div class="cart_left">
                <h6>You have <span>{{ cart.total_quantity }} item</span>  in your cart</h6>
<div class="full__boxes__checkout" v-for="item in cart.items" :key="item.id">
    <div class="left">
        <div class="img_box">
            <img :src="item.product_image" class="img-fluid" alt="seeken">
        </div>
    </div>
    <div class="right">
        <div class="full__container">
            <div class="product__details">
                <h4>{{ item.product_name }} </h4>
                <div class="color">Brown</div>
                <h3>₹ {{ item.selling_price }} </h3>
            </div>
    </div>
   </div>
</div>
 </div>
 <div class="total__price">
              <h6>Price Breakdown</h6>
              <div class="pricing">
                <div class="left">Subtotal</div>
                <div class="right">₹ {{ cart.total_price }}</div>
                <div class="left">Discount</div>
                <div class="right">₹ {{ cart.total_discount }}</div>
              </div>
            </div>
            <div class="total__price">
              <h6>Total</h6>
              <div class="pricing_two">
                <div class="left">
                  <h3>Total <span>Includes GST*</span></h3>
                </div>
                <div class="right">
                  <h3>₹ {{ cart.grand_total }}</h3>
                  <h5 v-if="Number(cart.total_discount) > 0">
                    <span>₹ {{ cart.total_price }}</span>
                    save ₹ {{ cart.total_discount }}
                  </h5>
                </div>
              </div>
            </div>
        <div class="checkout__btn">
          <RazorpayPayment :amount="cart.grand_total" :validation="validateInputs" :billing_address="billing_address" :shipping_address="shipping_address"/>
            <!-- <StripePayment :amount="cart.grand_total" :validation="validateInputs"/> -->
        </div>
        <div class="cancellation">
            <h5>Order Cancellation Charges</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam convallis tellus est, ut finibus magna ultrices ut.</p>
           <a href="" class="link">Cancellation policy</a> 
        </div>
    </div>
    </div>
</div>
<CheckoutSupportedPayments/>
</div>
    </section>
    
</template>

<script lang="ts" setup>

import { onMounted, computed } from 'vue'
import { useCartStore } from '~/store/cart'
import { useCheckoutAddressValidator } from '~/composables/useCheckoutAddressValidator'

const { addToast } = useToast()
const { validateAddress } = useCheckoutAddressValidator()

const contactInfoRef = ref(null);

const billing_address = ref({});
const shipping_address = ref({});

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)

onMounted(() => {
  cartStore.fetchCartFromServer()
})

const validateInputs = () => {
  //addToast("⚠️ Payment integration is in progress. We'll be launching soon!", 'error')
  const is_valid_shipping_address = validateAddress(shipping_address.value, contactInfoRef, 'ship')
  if(is_valid_shipping_address){
    const is_valid_billing_address = validateAddress(billing_address.value, contactInfoRef, 'bill')
    if(is_valid_billing_address){
        return true;
    }
  }
  return false;
}





</script>

<style>

</style>