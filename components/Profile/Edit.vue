<template>
    <div style="display: block;" class="modal profile_setting" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <form  @submit.prevent="handleEdit">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closePopup"></button>
        </div>
        <div class="modal-body">
        <div class="row justify-content-center ">
            <!-- <div class="col-md-12 mb-5"><h6>Edit Profile Details</h6></div> -->
            <div class="col-md-3 mb-3 flash__desk">
                <div class="profile-picture-upload">
                  <CommonAvatar :name="name"   />
                   <!-- <img src="/images/profile_icon.webp" class="img-fluid" alt="seeken">
                    <label for="profile-picture-input" class="upload-label">
                        <i class="bi bi-camera-fill"></i> 
                    </label> -->
                      <!-- Hidden File Input (No div wrapper) -->
        <input type="file" id="profile-picture-input" accept="image/*">
              </div>
            </div>
            <div class="col-md-7 mb-3">
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="name" placeholder="First name" required>
                            <label for="" class="form-label">Name</label>
                          </div>
                    </div>
                    <!-- <div class="col-md-12 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Last name" required>
                            <label for="" class="form-label">Last name</label>
                          </div>
                    </div>  -->
                    <div class="col-md-12 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="email" placeholder="Email address" required readonly>
                            <label for="" class="form-label">Email address</label>
                          </div>
                    </div>
                    <div class="col-md-12 ">
                        <div class="form-floating ">
                            <input type="tel" v-numeric-only class="form-control border-0 border-bottom rounded-0" v-model="mobile" placeholder="Phone number" required maxlength="10"
                            pattern="\d{10}"
  @invalid="e => e.target.setCustomValidity('Please enter a valid 10-digit number')"
  @input="e => e.target.setCustomValidity('')">
                            <label for="" class="form-label">Phone number</label>
                          </div>
                          
                    </div>

                     <div class="col-md-12 ">
                        <div class="form-floating ">
                          <div class="password"><i class="bi " :class="showPassword ? 'bi-eye' : 'bi-eye-slash'" @click="togglePassword"></i></div>
                            <input :type="showPassword ? 'text' : 'password'" autocomplete="new-password" class="form-control border-0 border-bottom rounded-0" v-model="password" placeholder="Password" >
                            <label for="" class="form-label">Password</label>
                          </div>
                    </div>

                     <div class="col-md-12 ">
                        <div class="form-floating ">
                          <div class="password"><i class="bi" :class="showConfirmPassword ? 'bi-eye' : 'bi-eye-slash'" @click="toggleConfirmPassword"></i></div>
                            <input :type="showConfirmPassword ? 'text':'password'" class="form-control border-0 border-bottom rounded-0" v-model="password_confirmation" placeholder="Re enter Password" >
                            <label for="" class="form-label">Confirm Password</label>
                          </div>
                    </div>
                    
                </div>
            </div>
<center>
  <p class="success-message" v-if="successMessage">{{ successMessage }}</p>
            <p class="error-message" v-if="error">{{ error }}</p>
</center>
            
            <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center gap-2" >
                <button class="btn_2"data-bs-dismiss="modal" aria-label="Close" @click="closePopup">Cancel</button>  <button class="btn_1">Save Details</button>
            </div>
        </div>
     </div>
    </form>
    </div>
  </div>
  </div>
</template>

<script setup>

import { useAuthStore } from '~/store/auth';
  import { useLoader } from '@/composables/useLoader';
  const { showLoader, hideLoader } = useLoader(); // Use global loader
  const { updateProfile } = useProfile();
  const authStore = useAuthStore();

  const email = ref(  authStore.user?.email ?? '' );
  const mobile = ref(authStore.user?.phone ?? '');

  const password = ref('');
  const password_confirmation = ref('');

  const error = ref('');
  
  const successMessage = ref('');
 
  const name = ref(authStore.user?.name ?? '');

const emit = defineEmits(["close"]); 

const closePopup = () => {
  emit("close");
};


const handleEdit = async () => {
    successMessage.value = error.value = '';


    const hasPassword = password.value.trim() !== '';
  const hasConfirmation = password_confirmation.value.trim() !== '';

  if (hasPassword || hasConfirmation) {
    if (password.value !== password_confirmation.value) {
      error.value = 'Passwords do not match.';
      return;
    }else{
      if(password.value.length < 8){
         error.value = 'The password must be at least 8 characters.';
      return;
      }
    }
  }

    
    showLoader();
    try {
      const payload = { name: name.value, email: email.value, phone: mobile.value, password:password.value, password_confirmation:password_confirmation.value };
      
      const response = await updateProfile(payload);

  if (response.success) {
    successMessage.value = 'Profile updated';
  } else {
    error.value = response.error;
  }
    } 
    finally {
    hideLoader(); // Hide loader after request completes
  }
  };

  const showPassword = ref(false) // Toggle state

    const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const showConfirmPassword = ref(false) // Toggle state

    const toggleConfirmPassword = () => {
      showConfirmPassword.value = !showConfirmPassword.value
}
</script>

<style lang="css" scoped>
 .password {
    position: absolute;
    right: 10px;
    top: 18px;
    cursor: pointer;
    z-index: 99;
}


</style>