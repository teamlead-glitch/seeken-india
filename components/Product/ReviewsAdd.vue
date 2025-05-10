<template>


  <div class="row customer__review justify-content-center">

    <div class="col-md-8 col-xl-6">
      <div class="reviewrating_box ">
        <!-- this div show only  customer didnot login -->
        <h4>Write a review</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, animi sequi cupiditate alias doloribus eligendi
          dolor, commodi quaerat quo, eum ratione. Adipisci eaque tenetur pariatur vel repellat, aut dicta cumque?</p>
        <!-- <button class="btn_2" data-bs-toggle="modal"
                data-bs-target="#exampleModal5">Login</button> -->
        <!--  -->
                 <form  @submit.prevent="submitForm">
        <div class="mb-1">

          <div class="ratings">
            <h5>Rating:</h5>
            <div class="stars">
              <i v-for="i in 5" :key="i" class="bi bi-star-fill " :class="[
                'bi-star-fill',
                i > selectedRating ? 'hash' : '',
              ]" @click="handleStarClick(i)"></i>
            </div>
          </div>

        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title: </label>
          <input v-model="reviewTitle" type="text" class="form-control" id="exampleFormControlInput1" placeholder="" required>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"> Review:</label>
          <textarea v-model="reviewText" class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>
        <button class="btn_2">Submit</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useLoader } from '@/composables/useLoader';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
const { addToast } = useToast()

const { showLoader, hideLoader } = useLoader(); // Use global loader


const selectedRating = ref(0)
const reviewTitle = ref('')
const reviewText = ref('')

const props = defineProps({
  productId: {
    type: Number,
    required: true,
  }
    })


function handleStarClick(rating) {
  selectedRating.value = rating
  alert(`You clicked ${rating} star${rating > 1 ? 's' : ''}`)
}


async function submitForm() {
    
    showLoader();
    const payload = { product_id : props.productId , rating : selectedRating.value , title : reviewTitle.value , comment : reviewText.value  };
  console.log(payload,'payload');
  

  try {
    const config = useRuntimeConfig();
    const response = await $fetch(`${config.public.apiBase}product-review`, {
      method: 'POST',
      body: payload,
      headers: { Authorization: `Bearer ${authStore.token}` },
    });

   addToast('Your rating and review have been added successfully..!', 'success')
   
  } catch (error) {
    //cant manage error response api different structure
    addToast('An error occurred while submitting your rating and review. Please try again later..!', 'error')
    
  } finally {
    hideLoader();
  }
}
</script>
