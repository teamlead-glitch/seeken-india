<template>
 <div class="col-md-7 col-xl-8">
    
            <!-- <div class="login_sign">
                <h5>Log in now to unlock your special benefits</h5>
                <button class="btn_1">Sign up / Sign in</button>
                </div> -->
                <CheckoutSelectAddress :billing_address="billing_address" :shipping_address="shipping_address"/>
                <div class="row checkout__form">
                    <div class="col-md-12 mb-2 mt-5"><h6>Contact Details</h6></div>
                    <div class="col-md-6 mb-3">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="shipping_address.first_name" placeholder="First name" required>
                            <label for="" class="form-label">First name</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="shipping_address.last_name"  placeholder="Last name" required>
                            <label for="" class="form-label">Last name</label>
                          </div>
                    </div>
                    <div class="col-md-12 mb-2 mt-5"><h6>Delivery Address</h6></div>
                    <div class="col-md-12 ">
                        <div class="form-floating ">
                            <textarea class="form-control border-0 border-bottom rounded-0" v-model="shipping_address.address" placeholder="Address" id="floatingTextarea"></textarea>
          <label for="floatingTextarea" class="form-label">Address</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="shipping_address.city"  placeholder="City" required>
                            <label for="" class="form-label">City</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="shipping_address.location"  placeholder="Locatione" required>
                            <label for="" class="form-label">Location</label>
                          </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-numeric-only v-model="shipping_address.pincode"  placeholder="Pin code" required maxlength="6">
                            <label for="" class="form-label">Pin code</label>
                          </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-numeric-only v-model="shipping_address.phone"  placeholder="Mobile" required maxlength="10">
                            <label for="" class="form-label">Mobile</label>
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
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="billing_address.first_name"  placeholder="First name" required>
                            <label for="" class="form-label">First name</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="billing_address.first_name"  placeholder="Last name" required>
                            <label for="" class="form-label">Last name</label>
                          </div>
                    </div>
                   
                    <div class="col-md-12 ">
                        <div class="form-floating ">
                            <textarea class="form-control border-0 border-bottom rounded-0" v-model="billing_address.address" placeholder="Address" id="floatingTextarea"></textarea>
          <label for="floatingTextarea" class="form-label">Address</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="billing_address.city"  placeholder="City" required>
                            <label for="" class="form-label">City</label>
                          </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="billing_address.location"  placeholder="Locatione" required>
                            <label for="" class="form-label">Location</label>
                          </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-numeric-only v-model="billing_address.pincode"  placeholder="Pin code" required maxlength="6">
                            <label for="" class="form-label">Pin code</label>
                          </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-numeric-only v-model="billing_address.phone"  placeholder="Pin code" required maxlength="10">
                            <label for="" class="form-label">Mobile</label>
                          </div>
                    </div>
                </div>
         </div>
</template>

<script lang="ts" setup>

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
      location: '',
      pincode: '',
      phone: '',
     
    })
  } else {
    addressOption.value = 'option1'
    Object.assign(props.billing_address, { ...props.shipping_address })
  }
}

</script>

<style>

</style>