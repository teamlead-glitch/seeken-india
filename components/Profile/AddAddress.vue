<template>
     <!-- Modal profile -->
<div style="display: block;" class="modal  profile_setting" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Address</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closePopup"></button>
        </div>
        <div class="modal-body">
        <div class="row">
            <div class="col-md-12 mb-2"><h6>Shipping Address</h6></div>
            <div class="col-md-6 mb-3">
                <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="First name" required>
                    <label for="" class="form-label">First name</label>
                  </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Last name" required>
                    <label for="" class="form-label">Last name</label>
                  </div>
            </div>
            <div class="col-md-12 ">
                <div class="form-floating ">
                    <textarea class="form-control border-0 border-bottom rounded-0" placeholder="Address" id="floatingTextarea"></textarea>
  <label for="floatingTextarea" class="form-label">Address</label>
                  </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="City" required>
                    <label for="" class="form-label">City</label>
                  </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-floating ">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Locatione" required>
                    <label for="" class="form-label">Location</label>
                  </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Pin code" required>
                    <label for="" class="form-label">Pin code</label>
                  </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Landmark" required>
                    <label for="" class="form-label">Landmark</label>
                  </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Mobile number" required>
                    <label for="" class="form-label">Mobile number</label>
                  </div>
            </div>
            <div class="col-md-6">
                <div class="form-floating">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" name="" id="" value="" placeholder="Email address" required>
                    <label for="" class="form-label">Email address</label>
                  </div>
            </div>
            <div class="col-md-12 mt-4 mb-4">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">House (All day delivery)</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Work (Delivery between 9am - 6pm)</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                    <label class="form-check-label" for="inlineRadio3">Neighbour</label>
                  </div>
            </div>
            <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center gap-2" >
                <button class="btn_2" data-bs-dismiss="modal" aria-label="Close" @click="closePopup">Cancel</button>  <button class="btn_1">Save Address</button>
            </div>
        </div>
     </div>
    </div>
  </div></div>
    <!-- Modal profile close  -->
</template>

<script setup>

const emit = defineEmits(["close"]); 

const closePopup = () => {
  emit("close");
};
</script>