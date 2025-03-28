<template>
    <section class="category">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-xl-6 mb-4">
              <h3>Choose Your Category</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque impedit animi ad voluptatem
                beatae modi adipisci.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="category_lists ">
                
                
               <CategorySlider :categories="categories"/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const config = useRuntimeConfig();

// Define a ref to hold categories data
const categories = ref([]);

// Fetch slide data during SSR with error handling
try {
  const { data, error } = await useAsyncData('categories', async () => {
    try {
      // Fetch categories from the API
      return await $fetch(`${config.public.apiBase}categories`);
    } catch (err) {
      // Catch and log fetch errors (500, 404, etc.)
      console.error('API call failed with error:', err);
      throw err; // Rethrow to outer catch
    }
  });

  // Handle useAsyncData-specific error
  if (error.value) {
    console.error('Error fetching slides:', error.value);
    categories.value = []; // Return empty array if error occurs
  } else {
    categories.value = data.value || [];
  }
} catch (err) {
  // Catch any unhandled errors
  console.error('Unexpected error during API call:', err);
  categories.value = [];
}
</script>
