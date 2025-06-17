<template>

  <div class="inner__banner">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="breadcrums">
            <ul>
              <li>
                <NuxtLink to="/">
                  Home</NuxtLink>
              </li>
              <li>Register</li>
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
            <form @submit.prevent="handleRegister">
              <h1>Create your Seeken Account</h1>
              <p>Register with email to become a member</p>
              <div class="col-12 mb-3 mt-5">
                <div class="form-floating mb-3">
                  <input autocomplete="off" type="text" class="form-control border-0 border-bottom rounded-0"
                    v-model="name" placeholder="Name" required>
                  <label for="Name" class="form-label">Name</label>
                </div>
              </div>

              <div class="col-12 mb-3">
                <div class="form-floating mb-3">
                  <input autocomplete="off" type="email" class="form-control border-0 border-bottom rounded-0"
                    v-model="email" placeholder="Email address" required>
                  <label for="email" class="form-label">Email address</label>
                </div>
              </div>
              <div class="col-12 mb-3">
                <div class="form-floating mb-3">
                  <div class="password"><i class="bi " :class="showPassword ? 'bi-eye' : 'bi-eye-slash'"
                      @click="togglePassword"></i></div>
                  <input autocomplete="off" :type="showPassword ? 'text' : 'password'"
                    class="form-control border-0 border-bottom rounded-0" v-model="password" placeholder="Password"
                    required minlength="8">
                  <label for="password" class="form-label">Password</label>
                </div>

              </div>

              <div class="col-12 mb-3">
                <div class="form-floating mb-3">
                  <div class="password"><i class="bi" :class="showConfirmPassword ? 'bi-eye' : 'bi-eye-slash'"
                      @click="toggleConfirmPassword"></i></div>
                  <input autocomplete="off" :type="showConfirmPassword ? 'text' : 'password'"
                    class="form-control border-0 border-bottom rounded-0" v-model="confirm_password"
                    placeholder="Confirm Password" required>
                  <label for="password" class="form-label">Confirm Password</label>
                </div>
                <p class="success-message" v-if="successMessage">{{ successMessage }}</p>
                <p class="error-message" v-if="error">{{ error }}</p>
              </div>
              <div class="col-12 mt-5 mb-3 d-flex justify-content-center flex-column align-items-center">
                <button class="btn_1" type="submit">Submit</button>
                <p class="mt-4">Already have an account? <NuxtLink to="/login">Log In Now</NuxtLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 col-xl-7">
          <div class="login__box">
            <p>By logging-in, I consent and accept the Enrollment 
              <NuxtLink to="/terms-of-services">Terms and Conditions</NuxtLink>   &  
              <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>.
              </p>
          </div>
        </div>
      </div>
    </div>
  </section>



</template>



<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/store/auth';
import { useLoader } from '@/composables/useLoader';
const { showLoader, hideLoader } = useLoader(); // Use global loader
const route = useRoute();

const fromCheckout = computed(() => route.query.from === 'checkout');

const email = ref('');
const password = ref('');
const confirm_password = ref('');
const error = ref('');
const authStore = useAuthStore();
const successMessage = ref('');

const name = ref('');

const showPassword = ref(false) // Toggle state

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const showConfirmPassword = ref(false) // Toggle state

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const handleRegister = async () => {
  successMessage.value = error.value = '';

  if (password.value !== confirm_password.value) {
    error.value = 'Passwords do not match.';
    return; // Stop execution if passwords don't match
  }
  showLoader();
  try {
    const payload = { name: name.value, email: email.value, password: password.value, password_confirmation: confirm_password.value };
    const reg = await authStore.register(payload);
    if (reg) {

      if (fromCheckout.value) {
        navigateTo({
          path: '/login',
          query: { reg: 'success',red: 'checkout' }
        });
      } else {

        navigateTo({
          path: '/login',
          query: { reg: 'success' }
        });
      }



    }

    else {
      error.value = 'Error please try again';
    }
    //navigateTo('/login'); // Redirect to homepage after login
  } catch (errors) {
    if (errors.status === 422) {
      error.value = errors.data.errors.email ? errors.data.errors.email : 'Unexpected error';// Store validation errors
    } else {
      error.value = 'Unexpected error';
      console.error('Unexpected error:', errors)
    }
  }
  finally {
    hideLoader(); // Hide loader after request completes
  }
};


</script>