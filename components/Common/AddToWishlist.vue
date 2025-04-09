<template>
  <CommonOverlayPopup :show="wishlistStore.AddToshow">
    <div style="display: block;" class="modal wishlist_setting">
      <div class="modal-dialog modal-dialog-centered">
        <!-- Modal wishlist want to add wishlist-->
        <div class="modal-content" v-if="!showSuccess && !showLogin">
          <div class="modal-header">
            <h3 class="modal-title fs-5" id="exampleModalLabel">Add to wishlist</h3>
            <button type="button" class="btn-close" @click="wishlistStore.closeAddTo()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Do you want to add this product to your wishlist?</p>
            <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center gap-3">
              <a class="btn_2" @click="wishlistStore.closeAddTo()">Keep browsing</a>
              <button class="btn_1" @click="addToWishlist">Add to wishlist</button>
            </div>
          </div>
        </div>
        <!-- Modal wishlist want to add wishlist close-->
        <!-- Modal  wishlist success   -->
        <div class="modal-content" v-if="showSuccess">
          <div class="modal-header">
            <h3 class="modal-title fs-5" id="exampleModalLabel">Wishlist</h3>
            <button type="button" class="btn-close" @click="wishlistStore.closeAddTo()"></button>
          </div>
          <div class="modal-body">
            <p>The item will be added to your wishlist</p>
            <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center">
              <NuxtLink to="/"><button class="btn_2">Continue shopping</button> </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Modal  wishlist success close  -->
        <!-- Modal  wishlist Login   -->
        <div class="modal-content" v-if="showLogin">
          <div class="modal-header">
            <h3 class="modal-title fs-5" id="exampleModalLabel">Wishlist</h3>
            <button type="button" class="btn-close" @click="wishlistStore.closeAddTo()"></button>
          </div>
          <div class="modal-body">
            <div class="login__box">
              <form @submit.prevent="handleLogin">
                <p>You must be logged in to add items to your wishlist.</p>
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
        <!-- Modal  wishlist Login close  -->
      </div>
    </div>
  </CommonOverlayPopup>

</template>

<script setup lang="ts">
const { showLoader, hideLoader } = useLoader(); // Use global loader
import { useWishlistStore } from '@/store/wishlist'
import { useAuthStore } from '~/store/auth';
const wishlistStore = useWishlistStore()
const authStore = useAuthStore();

const showLogin = ref(false);
const showSuccess = ref(false);

const email = ref('');
const password = ref('');
const error = ref('');
const success = ref('');

const handleLogin = async () => {
  success.value = ''; error.value = '';
  showLoader();
  try {
    await authStore.login(email.value, password.value);
    showLogin.value = false;

  } catch (err) {
    console.log(err + 'err')
    error.value = 'Invalid credentials';
  }
  finally {
    hideLoader(); // Hide loader after request completes
  }
};

const addToWishlist = () => {

  if (!authStore.token) {
    showLogin.value = true;
  } else {
    //add to wishlist api
    showSuccess.value = true;
  }
}

watch(() => wishlistStore.AddToshow, (val) => {
  if (val) {
    showLogin.value = false
    showSuccess.value = false
  }
})

</script>