<template>
     <!-- Modal profile -->
<div style="display: block;" class="modal  profile_setting" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Update Address</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closePopup"></button>
        </div>
        <div class="modal-body">
         
          <ProfileAddressForm @close="closePopup" :addressSelected="addressSelected" :edit="true"/>
         
         
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

const props = defineProps({
  addressSelected: {
    type: Object,
    default: () => null,  // Default to null
  },
});


</script>