<template>

  <div class="inner__banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="breadcrums">
                        <ul>
                            <li><NuxtLink to="/">
                                    Home</NuxtLink></li>
                            <li>Reset Password</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  


    <section class="inner_container">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-xl-5">




          <div class="login__box">



            <form  @submit.prevent="submit">
                    <h1>Reset Seeken Account Password</h1>
                    <!-- <p>Register with email to become a member</p> -->
                   
                     
                      <div class="col-12 mb-3 mt-5">
                        <div class="form-floating mb-3">
                          <input autocomplete="off" type="email" class="form-control border-0 border-bottom rounded-0" v-model="email" placeholder="Email address" required>
                          <label for="email" class="form-label">Email address</label>
                        </div>
                      </div>
                      <div class="col-12 mb-3">
                        <div class="form-floating mb-3">
                            <div class="password"><i class="bi " :class="showPassword ? 'bi-eye' : 'bi-eye-slash'" @click="togglePassword"></i></div>
                          <input autocomplete="off" :type="showPassword ? 'text' : 'password'" class="form-control border-0 border-bottom rounded-0" v-model="password" placeholder="Password" required>
                          <label for="password" class="form-label">Password</label>
                        </div>
                       
                      </div>

                      <div class="col-12 mb-3">
                        <div class="form-floating mb-3">
                            <div class="password"><i class="bi" :class="showConfirmPassword ? 'bi-eye' : 'bi-eye-slash'" @click="toggleConfirmPassword"></i></div>
                          <input autocomplete="off" :type="showConfirmPassword ? 'text':'password'" class="form-control border-0 border-bottom rounded-0" v-model="password_confirmation" placeholder="Confirm Password" required>
                          <label for="password" class="form-label">Confirm Password</label>
                        </div>
                        <p class="success-message" v-if="successMessage">{{ successMessage }}</p>
                        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
                      </div>
                      <div class="col-12 mt-5 mb-3 d-flex justify-content-center flex-column align-items-center">
                   <button class="btn_1"  type="submit">Submit</button>
                        <!-- <p class="mt-4">Already have an account? <NuxtLink to="/login">Log In Now</NuxtLink>   </p> -->
                      </div>
                    </form>
  
    
    
    
    
    
    
    
    
    
         

  </div>
  </div>
  </div>
  </div>
  </section>
 

  
  
  </template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const { showLoader, hideLoader } = useLoader(); // Use global loader

const route = useRoute()
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const token = ref(route.query.token || '')

const successMessage = ref('')
const errorMessage = ref('')

    const showPassword = ref(false) // Toggle state

    const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const showConfirmPassword = ref(false) // Toggle state

    const toggleConfirmPassword = () => {
      showConfirmPassword.value = !showConfirmPassword.value
}

const submit = async () => {
    successMessage.value = ''
    errorMessage.value = ''

     if (password.value !== password_confirmation.value) {
        errorMessage.value = 'Passwords do not match.';
        return; // Stop execution if passwords don't match
    }
    showLoader();

    try {
        const response = await $fetch(`${useRuntimeConfig().public.apiBase}reset-password`, {
            method: 'POST',
            body: {
                email: email.value,
                password: password.value,
                password_confirmation: password_confirmation.value,
                token: token.value,
            }
        })
        successMessage.value = response.message
    } catch (error) {
        errorMessage.value = error.data.message || 'Something went wrong'
    }
      finally {
    hideLoader(); // Hide loader after request completes
  }
}
</script>

  <style>
 

</style>
  
  