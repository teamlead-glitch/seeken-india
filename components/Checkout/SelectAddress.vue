<template>
<div class="profile__container">
  <div class="full__box">
    <div class="row align-items-center">
      <div class="col-md-12 mb-3">
        <h5>Saved Address </h5>



        <div class="row" v-if="result.addresses && result.addresses.length > 0">



          <div class="col-md-6 mb-4" v-for="adress in result.addresses">

            <div class="shipping__boxes">
              <div class="default" v-if="adress.id == billing_address.id">Selected</div>

              <div class="address__list">
                <ul>
                  <li>
                    <p> <strong>{{ adress.first_name }} {{ adress.last_name }}</strong> <br>
                      {{ adress.address }} <br>
                      {{ adress.city }}, {{ adress.location }}, {{ adress.landmark }}, {{ adress.pincode }}</p>
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
              <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center gap-2 profile_setting">
                <button class="btn_1" @click="setBillAddress(adress)">Use This Address</button>
              </div>


            </div>
          </div>



        </div>
      </div>
    </div>



  </div>
</div>
</template>

<script lang="ts" setup>

import { useAuthStore } from '~/store/auth';
const { showLoader, hideLoader } = useLoader(); // Use global loader
const config = useRuntimeConfig();

const authStore = useAuthStore();


const { data: result, error, refresh } = useFetchData('result', 'listaddress', true);

const props = defineProps({
    billing_address: {},
    shipping_address:{}
});

const setBillAddress = (adress) => {
  //console.log(adress.first_name,'adress')
props.shipping_address.id = adress.id
props.shipping_address.first_name = adress.first_name
props.shipping_address.last_name = adress.last_name
props.shipping_address.address = adress.address
props.shipping_address.city = adress.city
props.shipping_address.location = adress.location
props.shipping_address.landmark = adress.landmark
props.shipping_address.pincode = adress.pincode
props.shipping_address.phone = adress.phone
props.shipping_address.email = adress.email

}

</script>

<style></style>