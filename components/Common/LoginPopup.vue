<template>
    <div style="display: block;" class="modal profile_setting" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        
        <div class="modal-content" >
          <div class="modal-header">
            <h3 class="modal-title fs-5" id="exampleModalLabel">Login</h3>
            <button type="button" class="btn-close" @click="closePopup"></button>
          </div>
          <div class="modal-body">
            <div class="login__box">
              <form @submit.prevent="handleLogin">
                <p>Log in now to unlock your special benefits</p>
                <div class="col-12 mb-3 mt-5">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="email"
                      placeholder="Email Address" required>
                    <label for="firstName" class="form-label">Email Address</label>
                  </div>
                </div>
                <div class="col-12 mb-3">
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control border-0 border-bottom rounded-0" v-model="password"
                      placeholder="Password" required>
                    <label for="password" class="form-label">Password</label>
                  </div>
                  <p class="success-message" v-if="success">{{ success }}</p>
                  <p class="error-message" v-if="error">{{ error }}</p>
                </div>
                <div class="col-12 mt-5 mb-3 d-flex justify-content-center flex-column align-items-center">

                  <button class="btn_1" type="submit">Sign in</button>

                </div>

              </form>
            </div>

          </div>
        </div>
        
        
    </div>
  </div>
  </div>
</template>

<script setup>

const { showLoader, hideLoader } = useLoader(); // Use global loader

import { useAuthStore } from '~/store/auth';
const authStore = useAuthStore();

const emit = defineEmits(["close"]); 

const closePopup = () => {
  emit("close");
};

const email = ref('');
const password = ref('');
const error = ref('');
const success = ref('');

const handleLogin = async () => {
  success.value = ''; error.value = '';
  showLoader();
  try {
    await authStore.login(email.value, password.value);
    window.location.reload();

  } catch (err) {
    console.log(err + 'err')
    error.value = 'Invalid credentials';
  }
  finally {
    hideLoader(); // Hide loader after request completes
  }
};

</script>

<style lang="css" scoped>
 
</style>