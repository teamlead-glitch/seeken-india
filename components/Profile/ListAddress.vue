<template>
  <div class="no__address" v-if="!result.addresses || result.addresses.length == 0">
    <h6>You did not add any address yet</h6>
  </div>

  <div class="row" v-if="result.addresses && result.addresses.length > 0">



    <div class="col-md-6 mb-4" v-for="adress in result.addresses">

      <div class="shipping__boxes">
        <div class="default" v-if="adress.is_default">Default</div>
        <div class="default set" v-if="!adress.is_default">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option1"
              @click="setDefault(adress)">
            <label class="form-check-label" for="inlineRadio4">Set as default</label>
          </div>
        </div>
        <div class="address__list">
          <ul>
            <li>
              <p> <strong>{{ adress.first_name }} {{ adress.last_name }}</strong> <br>
                {{ adress.address }} <br>
                {{ adress.city }}, {{ adress.location }}, {{ adress.pincode }}, {{ adress.landmark }}</p>
            </li>
            <li>
              <p> {{ adress.phone }}<br>
                <a :href="'mailto:' + adress.email">{{ adress.email }}</a>
              </p>
            </li>
            <li>
              <p v-if="adress.type == 1">House (All day delivery)</p>
              <p v-if="adress.type == 2">Work (Delivery between 9am - 6pm)</p>
              <p v-if="adress.type == 3">Neighbour</p>
            </li>
          </ul>
        </div>
        <!-- <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center gap-2 profile_setting" >
                  <button class="btn_1" @click="setDefault(adress)">Set As Default</button>
            </div> -->
        <!-- Delete Icon -->
        <button class="btn btn-sm btn-outline-danger position-absolute bottom-0 end-0 m-2" v-if="!adress.is_default"
          @click="deleteAddress(adress)">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>



  </div>
</template>

<script setup>

import { useAuthStore } from '~/store/auth';
const { showLoader, hideLoader } = useLoader(); // Use global loader
const config = useRuntimeConfig();

const authStore = useAuthStore();


const { data: result, error, refresh } = useFetchData('result', 'listaddress', true);

const props = defineProps({
  addPopup: Boolean
});


async function setDefault(address) {

  showLoader();

  try {
    
    address.is_default = 1;
    const response = await $fetch(`${config.public.apiBase}addaddress`, {
      method: 'POST',
      body: address,
      headers: { Authorization: `Bearer ${authStore.token}` },
    });
    refresh();

  } catch (error) {
    console.error('Error set default address:', error);
    error.value = 'Failed to  set default address.';
  } finally {
    hideLoader();
  }

}

async function deleteAddress(address) {

  if (confirm("Are you sure you want to delete this address?")) {

showLoader();

try {
 
  
  const response = await $fetch(`${config.public.apiBase}deleteaddress/${address.id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${authStore.token}` },
  });
  refresh();

} catch (error) {
  console.error('Error delete address:', error);
  error.value = 'Failed to  delete address.';
} finally {
  hideLoader();
}

  }

}

// Watch for changes in addPopup prop
watch(() => props.addPopup, (newValue) => {

  refresh(); // Call the API again

});

</script>