<template>
    <div style="display: block;" class="modal profile_setting" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <form  @submit.prevent="handleEdit">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Profile</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closePopup"></button>
        </div>
        <div class="modal-body">
        <div class="row justify-content-center ">
            <div class="col-md-12 mb-5"><h6>Edit Profile Details</h6></div>
            <div class="col-md-3 mb-3">
                <div class="profile-picture-upload">
                   <img src="/images/profile_icon.webp" class="img-fluid" alt="seeken">
                    <label for="profile-picture-input" class="upload-label">
                        <i class="bi bi-camera-fill"></i> 
                    </label>
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
                            <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="mobile" placeholder="Phone number" required>
                            <label for="" class="form-label">Phone number</label>
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
  const mobile = ref(authStore.user?.mobile ?? '');
  const error = ref('');
  
  const successMessage = ref('');
 
  const name = ref(authStore.user?.name ?? '');

const emit = defineEmits(["close"]); 

const closePopup = () => {
  emit("close");
};


const handleEdit = async () => {
    successMessage.value = error.value = '';

    
    showLoader();
    try {
      const payload = { name: name.value, email: email.value, mobile: mobile.value };
      
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
</script>