<template>
    <section class="category">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-xl-6 mb-4">
              <h3>Choose Your Category</h3>
              <p>Explore innovative consumer electronics, including smartwatches, wireless audio, charging solutions, gaming accessories, and mobile essentials.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="category_lists ">
                
                
               <HomeCategorySlider :categories="categories"/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup>

const { data: categories, error, refresh } = useFetchData('categories', 'categories');


</script>
