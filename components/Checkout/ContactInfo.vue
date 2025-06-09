<template>
  <CommonOverlayPopup :show="showLoginPopup">
  <CommonLoginPopup @close="showLoginPopup = false"/> 
  </CommonOverlayPopup>
 <div class="col-md-7 col-xl-8">
    
            <div class="login_sign" v-if="!authStore.token">
                <h5>Log in now to unlock your special benefits</h5>
                <button class="btn_1" @click="showLoginPopup = true">Sign up / Sign in</button>
                </div>
                <CheckoutSelectAddress :billing_address="billing_address" :shipping_address="shipping_address"/>
                <div class="row checkout__form">
                    <div class="col-md-12 mb-2 mt-5"><h6>Contact Details</h6></div>
                    <div class="col-md-6 mb-3">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="ship_first_name" v-model="shipping_address.first_name" placeholder="First name" required>
                            <label for="" class="form-label">First name</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="ship_last_name" v-model="shipping_address.last_name"  placeholder="Last name" required>
                            <label for="" class="form-label">Last name</label>
                          </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="email" class="form-control border-0 border-bottom rounded-0" ref="ship_email"  v-model="shipping_address.email"  placeholder="Email" required >
                            <label for="" class="form-label">Email</label>
                          </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="ship_phone" v-numeric-only v-model="shipping_address.phone"  placeholder="Mobile" required maxlength="10">
                            <label for="" class="form-label">Mobile</label>
                          </div>
                    </div>
                    <div class="col-md-12 mb-2 mt-5"><h6>Delivery Address</h6></div>
                    <div class="col-md-12 ">
                        <div class="form-floating ">
                            <textarea class="form-control border-0 border-bottom rounded-0" ref="ship_address" v-model="shipping_address.address" placeholder="Address" id="floatingTextarea"></textarea>
          <label for="floatingTextarea" class="form-label">Address</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="ship_city" v-model="shipping_address.city"  placeholder="City" required>
                            <label for="" class="form-label">City</label>
                          </div>
                    </div>
                     <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="ship_state" v-model="shipping_address.state"  placeholder="State" required>
                            <label for="" class="form-label">State</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="ship_location" v-model="shipping_address.location"  placeholder="Locatione" required>
                            <label for="" class="form-label">Location</label>
                          </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="ship_pincode" v-numeric-only v-model="shipping_address.pincode"  placeholder="Pin code" required maxlength="6">
                            <label for="" class="form-label">Pin code</label>
                          </div>
                    </div>
                   
                    <div class="col-md-12 mb-2 mt-5"><h6>Billing Address</h6></div>
                    <div class="col-md-12 mt-4 mb-4">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                            :checked="addressOption === 'option1'" @click="toggleRadio">
                            <label class="form-check-label" for="inlineRadio1">Same as delivery address</label>
                          </div>
                   </div>
                    <div class="col-md-6 mb-3">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="bill_first_name" v-model="billing_address.first_name"  placeholder="First name" required>
                            <label for="" class="form-label">First name</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="bill_last_name" v-model="billing_address.last_name"  placeholder="Last name" required>
                            <label for="" class="form-label">Last name</label>
                          </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="email" class="form-control border-0 border-bottom rounded-0" ref="bill_email"  v-model="billing_address.email"  placeholder="Email" required >
                            <label for="" class="form-label">Email</label>
                          </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="bill_phone" v-numeric-only v-model="billing_address.phone"  placeholder="Pin code" required maxlength="10">
                            <label for="" class="form-label">Mobile</label>
                          </div>
                    </div>
                    
                   
                    <div class="col-md-12 ">
                        <div class="form-floating ">
                            <textarea class="form-control border-0 border-bottom rounded-0" ref="bill_address" v-model="billing_address.address" placeholder="Address" id="floatingTextarea"></textarea>
          <label for="floatingTextarea" class="form-label">Address</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="bill_city" v-model="billing_address.city"  placeholder="City" required>
                            <label for="" class="form-label">City</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="bill_state" v-model="billing_address.state"  placeholder="State" required>
                            <label for="" class="form-label">State</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="bill_location" v-model="billing_address.location"  placeholder="Locatione" required>
                            <label for="" class="form-label">Location</label>
                          </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" ref="bill_pincode" v-numeric-only v-model="billing_address.pincode"  placeholder="Pin code" required maxlength="6">
                            <label for="" class="form-label">Pin code</label>
                          </div>
                    </div>
                    
                </div>
         </div>
</template>

<script lang="ts" setup>

import { useAuthStore } from '~/store/auth';
const authStore = useAuthStore();

const props = defineProps({
    billing_address: {},
    shipping_address:{}
});


const addressOption = ref(null)

function toggleRadio() {
  if (addressOption.value === 'option1') {
    addressOption.value = null
    Object.assign(props.billing_address, {
      id: null,
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      state: '',
      location: '',
      pincode: '',
      phone: '',
      email: '',
     
    })
  } else {
    addressOption.value = 'option1'
    Object.assign(props.billing_address, { ...props.shipping_address })
  }
}

const bill_first_name = ref(null);
const bill_last_name = ref(null);
const bill_address = ref(null);
const bill_city = ref(null);
const bill_state = ref(null);
const bill_location = ref(null);
const bill_pincode = ref(null);
const bill_phone = ref(null);
const bill_email = ref(null);

const ship_first_name = ref(null);
const ship_last_name = ref(null);
const ship_address = ref(null);
const ship_city = ref(null);
const ship_state = ref(null);
const ship_location = ref(null);
const ship_pincode = ref(null);
const ship_phone = ref(null);
const ship_email = ref(null);

const bill_fieldRefs = {
  first_name: bill_first_name,
  last_name: bill_last_name,
  address: bill_address,
  city: bill_city,
  state: bill_state,
  location: bill_location,
  pincode: bill_pincode,
  phone: bill_phone,
  email: bill_email
};

const ship_fieldRefs = {
  first_name: ship_first_name,
  last_name: ship_last_name,
  address: ship_address,
  city: ship_city,
  state: ship_state,
  location: ship_location,
  pincode: ship_pincode,
  phone: ship_phone,
  email: ship_email
};

defineExpose({
  bill_fieldRefs,
  ship_fieldRefs
});

const showLoginPopup = ref(false);

</script>

<style>

</style>