<template>
    <div class="row align-items-center">
        <div class="col-md-6">
          <div class="newsletter">
            <h4>Subscribe our Newsletter and get all of our update</h4>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
          <div class="subscribe_form">
            <form action="# " @submit.prevent="handleSubscribe">
              <div class="input-group input-group-lg ">
                <input type="email" v-model="email" class="form-control input-lg " required placeholder="Enter your email">
                <span class="input-group-btn ">
                  <button type="submit" class="btn c-theme-btn c-btn-uppercase btn-lg c-btn-bold c-btn-square ">Submit
                    Now</button>
                </span>
                
              </div>
              <p class="mt-1"><center class="error-message" v-if="error">{{ error }}</center></p>
              <p class="mt-1"><center class="success-message" v-if="success">{{ success }}</center></p>
            </form>
          </div>
        </div>
        <div class="line"></div>
      </div>
</template>

<script setup lang="ts">

const email = ref('');
const error = ref('');
const success = ref('');

const { showLoader, hideLoader } = useLoader(); // Use global loader

const handleSubscribe = async () => {
  success.value = ''; error.value = '';
  showLoader();
  try {
    
    const response = await $fetch(`${useRuntimeConfig().public.apiBase}subscribe`, {
      method: 'POST',
      body: { email: email.value },
    });

    // Assuming the API response contains a success message in `message`
    if (response?.message) {
      success.value = response.message;
    } else {
      success.value = 'Subscription successful!';
    }
    
  } catch (err) {
    
    // Extract error message from API response if available
    if (err?.data?.message) {
      error.value = err.data.message; // Show API error message
    } else {
      error.value = 'Subscription Failed!'; // Fallback error message
    }
  }
  finally {
    hideLoader(); // Hide loader after request completes
  }
};

</script>