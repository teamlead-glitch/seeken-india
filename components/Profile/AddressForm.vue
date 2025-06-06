<template>
    <form @submit.prevent="submitForm" >
        <div class="row">
            <div class="col-md-12 mb-2"><h6>Shipping Address</h6></div>
            <div class="col-md-6 mb-3">
                <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="address.first_name"  placeholder="First name" required maxlength="18">
                    <label for="" class="form-label" >First name</label>
                  </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="address.last_name"  placeholder="Last name" required maxlength="18">
                    <label for="" class="form-label">Last name</label>
                  </div>
            </div>
            <div class="col-md-12 ">
                <div class="form-floating ">
                    <textarea v-model="address.address" class="form-control border-0 border-bottom rounded-0" placeholder="Address" id="floatingTextarea" required></textarea>
  <label for="floatingTextarea" class="form-label">Address</label>
                  </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="address.location"  placeholder="Locatione" required>
                    <label for="" class="form-label">Location</label>
                  </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="address.city"  placeholder="City" required>
                    <label for="" class="form-label">City</label>
                  </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="address.state"  placeholder="State" required>
                    <label for="" class="form-label">State</label>
                  </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-numeric-only v-model="address.pincode"  placeholder="Pin code" required maxlength="6">
                    <label for="" class="form-label">Pin code</label>
                  </div>
            </div>
            <!-- <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="address.land_mark"  placeholder="Landmark" required>
                    <label for="" class="form-label">Landmark</label>
                  </div>
            </div> -->
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="tel" class="form-control border-0 border-bottom rounded-0" v-numeric-only v-model="address.phone"  placeholder="Mobile number" required  maxlength="10"
                    pattern="\d{10}"
  @invalid="e => e.target.setCustomValidity('Please enter a valid 10-digit number')"
  @input="e => e.target.setCustomValidity('')">
                    <label for="" class="form-label">Mobile number</label>
                  </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="email" class="form-control border-0 border-bottom rounded-0" v-model="address.email"  placeholder="Email address" required>
                    <label for="" class="form-label">Email address</label>
                  </div>
            </div>
            <div class="col-md-12 mt-4 mb-4">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" v-model="addressType">
                    <label class="form-check-label" for="inlineRadio1"  >House (All day delivery)</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" v-model="addressType">
                    <label class="form-check-label" for="inlineRadio2">Work (Delivery between 9am - 6pm)</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" v-model="addressType">
                    <label class="form-check-label" for="inlineRadio3">Neighbour</label>
                  </div>
            </div>
            <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center gap-2" >
                <button class="btn_2" data-bs-dismiss="modal" aria-label="Close" @click="closePopup">Cancel</button>  <button class="btn_1">Save Address</button>
            </div>
            <center><p class="error-message" v-if="error">{{ error }}</p></center>
            <center><p class="success-message" v-if="success">{{ success }}</p></center>
        </div>
      </form>
</template>

<script setup>

import { useLoader } from '@/composables/useLoader';
const { showLoader, hideLoader } = useLoader(); // Use global loader

import { useAuthStore } from '~/store/auth';

const props = defineProps({
  addressSelected: {
    type: Object,
    default: () => null,  // Default to null
  },
  edit: {
    type: Boolean,
    default: () => false,  // Default to null
  },
});
  
  const authStore = useAuthStore();

  const addressType = ref(1); // Default value

  const defaultAddress = {
  id: 0,
  first_name: '',
  last_name: '',
  address: '',
  city: '',
  location: '',
  pincode: '',
  land_mark: '',
  phone: '',
  email: '',
  is_default: 0,
  user_id: authStore.user.id,
  type: addressType,
  state: ''
};

const address = ref({ ...defaultAddress });

if (props.edit && props.addressSelected) {
  //console.log(props.addressSelected,'props.addressSelected')
  address.value = { ...props.addressSelected }; // When 'edit' is true, use 'addressSelected'
  addressType.value = props.addressSelected.type;
}

const error = ref('');
const success = ref('');


async function submitForm() {
    error.value = success.value = '';
    showLoader();
  console.log(address,'address');
  address.value.type = addressType.value

  try {
    const config = useRuntimeConfig();
    const response = await $fetch(`${config.public.apiBase}addaddress`, {
      method: 'POST',
      body: address.value,
      headers: { Authorization: `Bearer ${authStore.token}` },
    });

    success.value = 'Address saved successfully!';
    // Reset form after submission
    address.value = { ...defaultAddress };
    console.log('Response:', response);
    closePopup();
  } catch (error) {
    console.error('Error submitting form:', error);
    error.value = 'Failed to save address.';
  } finally {
    hideLoader();
  }
}

const emit = defineEmits(["close"]); 

const closePopup = () => {
  emit("close");
};


</script>