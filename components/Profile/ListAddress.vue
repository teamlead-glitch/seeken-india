<template>
    <div class="no__address" v-if="!result.addresses || result.addresses.length ==0">
        <h6>You did not add any address yet</h6>
    </div>
   
    <div class="row" v-if="result.addresses && result.addresses.length >0">



        <div class="col-md-6 mb-4" v-for="adress in result.addresses">
           
            <div class="shipping__boxes">
                <div class="default" v-if="adress.is_default">Default</div>
                <div class="address__list">
                    <ul>
                        <li>
                            <p> <strong>{{ adress.first_name }} {{ adress.last_name }}</strong> <br>
                                {{ adress.address }} <br>
                                {{ adress.city }}, {{ adress.location }},  {{ adress.landmark }},  {{ adress.pincode }}</p>
                        </li>
                        <li>
                            <p> {{ adress.phone }}<br>
                                <a :href="'mailto:' + adress.email">{{ adress.email }}</a>
                            </p>
                        </li>
                        <li>
                            <p>House (All day delivery)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



    </div>
</template>

<script setup>

import { useAuthStore } from '~/store/auth';
  
  const authStore = useAuthStore();


const { data: result, error, refresh } = useFetchData('result', 'listaddress', true);

</script>