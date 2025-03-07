<template>
    <div style="display: block;" class="modal profile_setting" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Profile</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closePopup"></button>
        </div>
        <div class="modal-body">
        <div class="row justify-content-center ">
            <div class="col-md-12 mb-5"><h6>Edit Profile Details</h6></div>
            <div class="col-md-3 mb-3">
                <div class="profile-picture-upload">
                   <img src="/images/profile_icon.webp" alt="seeken">
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
                            <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="First name" required>
                            <label for="" class="form-label">First name</label>
                          </div>
                    </div>
                    <div class="col-md-12 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Last name" required>
                            <label for="" class="form-label">Last name</label>
                          </div>
                    </div> <div class="col-md-12 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Email address" required>
                            <label for="" class="form-label">Email address</label>
                          </div>
                    </div>
                    <div class="col-md-12 ">
                        <div class="form-floating ">
                            <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Phone number" required>
                            <label for="" class="form-label">Phone number</label>
                          </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center gap-2" >
                <button class="btn_2"data-bs-dismiss="modal" aria-label="Close" @click="closePopup">Cancel</button>  <button class="btn_1">Save Details</button>
            </div>
        </div>
     </div>
    </div>
  </div>
  </div>
</template>

<script setup>

const emit = defineEmits(["close"]); 

const closePopup = () => {
  emit("close");
};
</script>