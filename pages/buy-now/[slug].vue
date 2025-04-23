<template>
  <CommonInnerBanner page_title="Buy Now" />
  <section class="inner_container" v-if="product">
        <div class="container">
         <div class="row justify-content-center">
           <CheckoutContactInfo :billing_address="billing_address" :shipping_address="shipping_address"/>
           <!-- {{ product }} -->
<div class="col-md-5 col-xl-4">
    <div class="total_prices ">
        <h3>View Order</h3>
      <div class="cart_left">
                <!-- <h6>You have <span>1 item</span>  in your cart</h6> -->
<div class="full__boxes__checkout">
    <div class="left">
        <div class="img_box">
            <img :src="product.image_path" class="img-fluid" alt="seeken">
        </div>
    </div>
    <div class="right">
        <div class="full__container">
            <div class="product__details">
                <h4>{{ product.name }} </h4>
                <!-- <div class="color">Brown</div> -->
                <h3>₹ {{ product.final_price }} </h3>
            </div>
    </div>
   </div>
</div>
 </div>
        <div class="total__price">
            <h6>Price Breakdown</h6>
            <div class="pricing">
                <div class="left">Price (Inclusive of all taxes)</div>
                <div class="right">₹ {{ product.final_price }}</div>
                <div class="left">Discount</div>
                <div class="right">- ₹ {{ product.price - product.final_price }}</div>
            </div>
        </div>
        <div class="total__price">
            <div class="pricing_two">
                <div class="left"><h3>Total <span>Includes GST*</span></h3></div>
                <div class="right">
                    <h3>₹ {{ product.final_price }} </h3>
                <h5><span>₹ {{ product.price }}</span>    save ₹ {{ product.price - product.final_price }}   </h5>
                </div>
            </div>
        </div>
        <div class="checkout__btn">
            
            <!-- <StripePayment :amount="product.final_price" :validation="validateInputs"/> -->
            <RazorpayPayment :amount="product.final_price" :validation="validateInputs"/>
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

import { useRoute } from 'vue-router';
import { useDateFormat } from '~/composables/useDateFormat';
import { useCartActions } from '@/composables/useCartActions'
const { addToast } = useToast()
const { formatDate } = useDateFormat();

const route = useRoute(); 
const slug = route.params.slug; // Get slug from URL
const { data: response, error, refresh } = useFetchData('response', `products/${slug}`);
const product = computed(() => response.value?.data);
const billing_address = ref({});
const shipping_address = ref({});

const validateInputs = () => {
  //addToast("⚠️ Payment integration is in progress. We'll be launching soon!", 'error')
  const is_valid_shipping_address = validateAddress()
  if(is_valid_shipping_address){
    const is_valid_billing_address = validateAddress(billing_address.value)
    if(is_valid_billing_address){
        return true;
    }
  }
  return false;
}


const validateAddress = (validate_obj=shipping_address.value) => {
  const requiredFields = [
    'first_name',
    'last_name',
    'address',
    'city',
    'location',
    'pincode',
    'phone',
    
  ];

  for (let field of requiredFields) {
    const value = validate_obj[field];

    if (!value || String(value).trim() === '') {
      const formattedField = field.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      addToast(`${formattedField} is required`, 'error');
      return false;
    }
  }

  return true; // All fields are valid
};

</script>

<style>

</style>