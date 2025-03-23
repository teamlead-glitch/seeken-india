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


// Fetch slide data during SSR
const { data: categories, error } = await useAsyncData('categories', () =>
  $fetch(`${config.public.apiBase}categories`)
);
// Handle errors gracefully
if (error.value) {
  console.error('Error fetching slides:', error.value);
}

</script>